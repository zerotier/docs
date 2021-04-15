/*
 * Copyright (c)2019 ZeroTier, Inc.
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file in the project's root directory.
 *
 * Change Date: 2023-01-01
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2.0 of the Apache License.
 */
/****/

/**
 * @file
 *
 * This defines the external C API for ZeroTier's core network virtualization
 * engine.
 */

#ifndef ZTS_ZEROTIER_API_H
#define ZTS_ZEROTIER_API_H

#include <stdint.h>

#ifdef __cplusplus
extern "C" {
#endif

/****************************************************************************/
/* Core constants                                                           */
/****************************************************************************/

/**
 * Default UDP port for devices running a ZeroTier endpoint
 */
#define ZTS_DEFAULT_PORT 9993

/**
 * Minimum MTU, which is the minimum allowed by IPv6 and several specs
 */
#define ZTS_MIN_MTU 1280

/**
 * Maximum MTU for ZeroTier virtual networks
 */
#define ZTS_MAX_MTU 10000

/**
 * Minimum UDP payload size allowed
 */
#define ZTS_MIN_PHYSMTU 1400

/**
 * Maximum length of network short name
 */
#define ZTS_MAX_NETWORK_SHORT_NAME_LENGTH 127

/**
 * Maximum number of pushed routes on a network
 */
#define ZTS_MAX_NETWORK_ROUTES 32

/**
 * Maximum number of statically assigned IP addresses per network endpoint
 * using ZT address management (not DHCP)
 */
#define ZTS_MAX_ASSIGNED_ADDRESSES 16

/**
 * Maximum number of "specialists" on a network -- bridges, relays, etc.
 */
#define ZTS_MAX_NETWORK_SPECIALISTS 256

/**
 * Maximum number of multicast group subscriptions per network
 */
#define ZTS_MAX_NETWORK_MULTICAST_SUBSCRIPTIONS 4096

/**
 * Maximum number of direct network paths to a given peer
 */
#define ZTS_MAX_PEER_NETWORK_PATHS 16

/**
 * Maximum number of path configurations that can be set
 */
#define ZTS_MAX_CONFIGURABLE_PATHS 32

/**
 * Maximum number of multicast groups a device / network interface can be
 * subscribed to at once
 */
#define ZTS_MAX_MULTICAST_SUBSCRIPTIONS 1024

/**
 * Maximum value for link quality (min is 0)
 */
#define ZTS_PATH_LINK_QUALITY_MAX 0xff

/****************************************************************************/
/* Structures and other types                                               */
/****************************************************************************/

/**
 * Current node status
 */
typedef struct {
	/**
	 * 40-bit ZeroTier address of this node
	 */
	uint64_t address;

	/**
	 * Public identity in string-serialized form (safe to send to others)
	 *
	 * This pointer will remain valid as long as the node exists.
	 */
	const char* publicIdentity;

	/**
	 * Full identity including secret key in string-serialized form
	 *
	 * This pointer will remain valid as long as the node exists.
	 */
	const char* secretIdentity;

	/**
	 * True if some kind of connectivity appears available
	 */
	int online;
} ZTS_NodeStatus;

/**
 * Virtual network status codes
 */
enum ZTS_VirtualNetworkStatus {
	/**
	 * Waiting for network configuration (also means revision == 0)
	 */
	ZTS_NETWORK_STATUS_REQUESTING_CONFIGURATION = 0,

	/**
	 * Configuration received and we are authorized
	 */
	ZTS_NETWORK_STATUS_OK = 1,

	/**
	 * Netconf master told us 'nope'
	 */
	ZTS_NETWORK_STATUS_ACCESS_DENIED = 2,

	/**
	 * Netconf master exists, but this virtual network does not
	 */
	ZTS_NETWORK_STATUS_NOT_FOUND = 3,

	/**
	 * Initialization of network failed or other internal error
	 */
	ZTS_NETWORK_STATUS_PORT_ERROR = 4,

	/**
	 * ZeroTier core version too old
	 */
	ZTS_NETWORK_STATUS_CLIENT_TOO_OLD = 5
};

/**
 * Virtual network type codes
 */
enum ZTS_VirtualNetworkType {
	/**
	 * Private networks are authorized via certificates of membership
	 */
	ZTS_NETWORK_TYPE_PRIVATE = 0,

	/**
	 * Public networks have no access control -- they'll always be AUTHORIZED
	 */
	ZTS_NETWORK_TYPE_PUBLIC = 1
};

/**
 * A route to be pushed on a virtual network
 */
typedef struct {
	/**
	 * Target network / netmask bits (in port field) or NULL or 0.0.0.0/0
	 * for default
	 */
	struct zts_sockaddr_storage target;

	/**
	 * Gateway IP address (port ignored) or NULL (family == 0) for LAN-local
	 * (no gateway)
	 */
	struct zts_sockaddr_storage via;

	/**
	 * Route flags
	 */
	uint16_t flags;

	/**
	 * Route metric (not currently used)
	 */
	uint16_t metric;
} ZTS_VirtualNetworkRoute;

/**
 * An Ethernet multicast group
 */
typedef struct {
	/**
	 * MAC address (least significant 48 bits)
	 */
	uint64_t mac;

	/**
	 * Additional distinguishing information (usually zero)
	 */
	unsigned long adi;
} ZTS_MulticastGroup;

/**
 * What trust hierarchy role does this peer have?
 */
enum ZTS_PeerRole {
	ZTS_PEER_ROLE_LEAF = 0,    // ordinary node
	ZTS_PEER_ROLE_MOON = 1,    // moon root
	ZTS_PEER_ROLE_PLANET = 2   // planetary root
};

/**
 * Virtual network configuration
 */
typedef struct {
	/**
	 * 64-bit ZeroTier network ID
	 */
	uint64_t nwid;

	/**
	 * Ethernet MAC (48 bits) that should be assigned to port
	 */
	uint64_t mac;

	/**
	 * Network name (from network configuration master)
	 */
	char name[ZTS_MAX_NETWORK_SHORT_NAME_LENGTH + 1];

	/**
	 * Network configuration request status
	 */
	enum ZTS_VirtualNetworkStatus status;

	/**
	 * Network type
	 */
	enum ZTS_VirtualNetworkType type;

	/**
	 * Maximum interface MTU
	 */
	unsigned int mtu;

	/**
	 * If nonzero, the network this port belongs to indicates DHCP availability
	 *
	 * This is a suggestion. The underlying implementation is free to ignore it
	 * for security or other reasons. This is simply a netconf parameter that
	 * means 'DHCP is available on this network.'
	 */
	int dhcp;

	/**
	 * If nonzero, this port is allowed to bridge to other networks
	 *
	 * This is informational. If this is false (0), bridged packets will simply
	 * be dropped and bridging won't work.
	 */
	int bridge;

	/**
	 * If nonzero, this network supports and allows broadcast
	 * (ff:ff:ff:ff:ff:ff) traffic
	 */
	int broadcastEnabled;

	/**
	 * If the network is in PORT_ERROR state, this is the (negative) error code
	 * most recently reported
	 */
	int portError;

	/**
	 * Revision number as reported by controller or 0 if still waiting for
	 * config
	 */
	unsigned long netconfRevision;

	/**
	 * Number of assigned addresses
	 */
	unsigned int assignedAddressCount;

	/**
	 * ZeroTier-assigned addresses (in sockaddr_storage structures)
	 *
	 * For IP, the port number of the sockaddr_XX structure contains the number
	 * of bits in the address netmask. Only the IP address and port are used.
	 * Other fields like interface number can be ignored.
	 *
	 * This is only used for ZeroTier-managed address assignments sent by the
	 * virtual network's configuration master.
	 */
	struct zts_sockaddr_storage assignedAddresses[ZTS_MAX_ASSIGNED_ADDRESSES];

	/**
	 * Number of ZT-pushed routes
	 */
	unsigned int routeCount;

	/**
	 * Routes (excluding those implied by assigned addresses and their masks)
	 */
	ZTS_VirtualNetworkRoute routes[ZTS_MAX_NETWORK_ROUTES];

	/**
	 * Number of multicast groups subscribed
	 */
	unsigned int multicastSubscriptionCount;

	/**
	 * Multicast groups to which this network's device is subscribed
	 */
	struct {
		uint64_t mac; /* MAC in lower 48 bits */
		uint32_t adi; /* Additional distinguishing information, usually zero
		                 except for IPv4 ARP groups */
	} multicastSubscriptions[ZTS_MAX_MULTICAST_SUBSCRIPTIONS];
} ZTS_VirtualNetworkConfig;

/**
 * Physical network path to a peer
 */
typedef struct {
	/**
	 * Address of endpoint
	 */
	struct zts_sockaddr_storage address;

	/**
	 * Time of last send in milliseconds or 0 for never
	 */
	uint64_t lastSend;

	/**
	 * Time of last receive in milliseconds or 0 for never
	 */
	uint64_t lastReceive;

	/**
	 * Is this a trusted path? If so this will be its nonzero ID.
	 */
	uint64_t trustedPathId;

	/**
	 * One-way latency
	 */
	float latency;

	/**
	 * How much latency varies over time
	 */
	float packetDelayVariance;

	/**
	 * How much observed throughput varies over time
	 */
	float throughputDisturbCoeff;

	/**
	 * Packet Error Ratio (PER)
	 */
	float packetErrorRatio;

	/**
	 * Packet Loss Ratio (PLR)
	 */
	float packetLossRatio;

	/**
	 * Stability of the path
	 */
	float stability;

	/**
	 * Current throughput (moving average)
	 */
	uint64_t throughput;

	/**
	 * Maximum observed throughput for this path
	 */
	uint64_t maxThroughput;

	/**
	 * Percentage of traffic allocated to this path
	 */
	float allocation;

	/**
	 * Name of physical interface (for monitoring)
	 */
	char* ifname;

	/**
	 * Is path expired?
	 */
	int expired;

	/**
	 * Is path preferred?
	 */
	int preferred;
} ZTS_PeerPhysicalPath;

/**
 * Peer status result buffer
 */
typedef struct {
	/**
	 * ZeroTier address (40 bits)
	 */
	uint64_t address;

	/**
	 * Remote major version or -1 if not known
	 */
	int versionMajor;

	/**
	 * Remote minor version or -1 if not known
	 */
	int versionMinor;

	/**
	 * Remote revision or -1 if not known
	 */
	int versionRev;

	/**
	 * Last measured latency in milliseconds or -1 if unknown
	 */
	int latency;

	/**
	 * What trust hierarchy role does this device have?
	 */
	enum ZTS_PeerRole role;

	/**
	 * Number of paths (size of paths[])
	 */
	unsigned int pathCount;

	/**
	 * Whether this peer was ever reachable via an aggregate link
	 */
	int hadAggregateLink;

	/**
	 * Known network paths to peer
	 */
	ZTS_PeerPhysicalPath paths[ZTS_MAX_PEER_NETWORK_PATHS];
} ZTS_Peer;

#ifdef __cplusplus
}
#endif

#endif
