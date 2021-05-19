---
title: include/ZeroTierSockets.h

custom_edit_url: null
---

# include/ZeroTierSockets.h

 [More...](#detailed-description)

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[zts_in_addr](/autogen/libzt/classes/structzts__in__addr.md)**  |
| struct | **[zts_in6_addr](/autogen/libzt/classes/structzts__in6__addr.md)**  |
| union | **[zts_in6_addr::un](/autogen/libzt/classes/unionzts__in6__addr_1_1un.md)**  |
| struct | **[zts_sockaddr_in](/autogen/libzt/classes/structzts__sockaddr__in.md)**  |
| struct | **[zts_sockaddr_in6](/autogen/libzt/classes/structzts__sockaddr__in6.md)**  |
| struct | **[zts_sockaddr](/autogen/libzt/classes/structzts__sockaddr.md)**  |
| struct | **[zts_sockaddr_storage](/autogen/libzt/classes/structzts__sockaddr__storage.md)**  |
| struct | **[zts_node_info_t](/autogen/libzt/classes/structzts__node__info__t.md)**  |
| struct | **[zts_addr_info_t](/autogen/libzt/classes/structzts__addr__info__t.md)**  |
| struct | **[zts_route_info_t](/autogen/libzt/classes/structzts__route__info__t.md)**  |
| struct | **[zts_multicast_group_t](/autogen/libzt/classes/structzts__multicast__group__t.md)**  |
| struct | **[zts_net_info_t](/autogen/libzt/classes/structzts__net__info__t.md)**  |
| struct | **[zts_path_t](/autogen/libzt/classes/structzts__path__t.md)**  |
| struct | **[zts_peer_info_t](/autogen/libzt/classes/structzts__peer__info__t.md)**  |
| struct | **[zts_root_set_t](/autogen/libzt/classes/structzts__root__set__t.md)**  |
| struct | **[zts_netif_info_t](/autogen/libzt/classes/structzts__netif__info__t.md)**  |
| struct | **[zts_event_msg_t](/autogen/libzt/classes/structzts__event__msg__t.md)**  |
| struct | **[zts_stats_counter_t](/autogen/libzt/classes/structzts__stats__counter__t.md)**  |
| struct | **[zts_linger](/autogen/libzt/classes/structzts__linger.md)**  |
| struct | **[zts_ip_mreq](/autogen/libzt/classes/structzts__ip__mreq.md)**  |
| struct | **[zts_in_pktinfo](/autogen/libzt/classes/structzts__in__pktinfo.md)**  |
| struct | **[zts_ipv6_mreq](/autogen/libzt/classes/structzts__ipv6__mreq.md)**  |
| struct | **[zts_fd_set](/autogen/libzt/classes/structzts__fd__set.md)**  |
| struct | **[zts_timeval](/autogen/libzt/classes/structzts__timeval.md)**  |
| struct | **[zts_pollfd](/autogen/libzt/classes/structzts__pollfd.md)**  |
| struct | **[zts_iovec](/autogen/libzt/classes/structzts__iovec.md)**  |
| struct | **[zts_msghdr](/autogen/libzt/classes/structzts__msghdr.md)**  |
| struct | **[zts_hostent](/autogen/libzt/classes/structzts__hostent.md)**  |
| struct | **[zts_ip4_addr](/autogen/libzt/classes/structzts__ip4__addr.md)**  |
| struct | **[zts_ip6_addr](/autogen/libzt/classes/structzts__ip6__addr.md)**  |
| struct | **[zts_ip_addr](/autogen/libzt/classes/structzts__ip__addr.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[zts_error_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_error_t)** { ZTS_ERR_OK = 0, ZTS_ERR_SOCKET = -1, ZTS_ERR_SERVICE = -2, ZTS_ERR_ARG = -3, ZTS_ERR_NO_RESULT = -4, ZTS_ERR_GENERAL = -5} |
| enum| **[zts_event_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_event_t)** { ZTS_EVENT_NODE_UP = 200, ZTS_EVENT_NODE_ONLINE = 201, ZTS_EVENT_NODE_OFFLINE = 202, ZTS_EVENT_NODE_DOWN = 203, ZTS_EVENT_NODE_FATAL_ERROR = 204, ZTS_EVENT_NETWORK_NOT_FOUND = 210, ZTS_EVENT_NETWORK_CLIENT_TOO_OLD = 211, ZTS_EVENT_NETWORK_REQ_CONFIG = 212, ZTS_EVENT_NETWORK_OK = 213, ZTS_EVENT_NETWORK_ACCESS_DENIED = 214, ZTS_EVENT_NETWORK_READY_IP4 = 215, ZTS_EVENT_NETWORK_READY_IP6 = 216, ZTS_EVENT_NETWORK_READY_IP4_IP6 = 217, ZTS_EVENT_NETWORK_DOWN = 218, ZTS_EVENT_NETWORK_UPDATE = 219, ZTS_EVENT_STACK_UP = 220, ZTS_EVENT_STACK_DOWN = 221, ZTS_EVENT_NETIF_UP = 230, ZTS_EVENT_NETIF_DOWN = 231, ZTS_EVENT_NETIF_REMOVED = 232, ZTS_EVENT_NETIF_LINK_UP = 233, ZTS_EVENT_NETIF_LINK_DOWN = 234, ZTS_EVENT_PEER_DIRECT = 240, ZTS_EVENT_PEER_RELAY = 241, ZTS_EVENT_PEER_UNREACHABLE = 242, ZTS_EVENT_PEER_PATH_DISCOVERED = 243, ZTS_EVENT_PEER_PATH_DEAD = 244, ZTS_EVENT_ROUTE_ADDED = 250, ZTS_EVENT_ROUTE_REMOVED = 251, ZTS_EVENT_ADDR_ADDED_IP4 = 260, ZTS_EVENT_ADDR_REMOVED_IP4 = 261, ZTS_EVENT_ADDR_ADDED_IP6 = 262, ZTS_EVENT_ADDR_REMOVED_IP6 = 263, ZTS_EVENT_STORE_IDENTITY_SECRET = 270, ZTS_EVENT_STORE_IDENTITY_PUBLIC = 271, ZTS_EVENT_STORE_PLANET = 272, ZTS_EVENT_STORE_PEER = 273, ZTS_EVENT_STORE_NETWORK = 274} |
| enum| **[zts_errno_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_errno_t)** { ZTS_EPERM = 1, ZTS_ENOENT = 2, ZTS_ESRCH = 3, ZTS_EINTR = 4, ZTS_EIO = 5, ZTS_ENXIO = 6, ZTS_EBADF = 9, ZTS_EAGAIN = 11, ZTS_EWOULDBLOCK = ZTS_EAGAIN, ZTS_ENOMEM = 12, ZTS_EACCES = 13, ZTS_EFAULT = 14, ZTS_EBUSY = 16, ZTS_EEXIST = 17, ZTS_ENODEV = 19, ZTS_EINVAL = 22, ZTS_ENFILE = 23, ZTS_EMFILE = 24, ZTS_ENOSYS = 38, ZTS_ENOTSOCK = 88, ZTS_EDESTADDRREQ = 89, ZTS_EMSGSIZE = 90, ZTS_EPROTOTYPE = 91, ZTS_ENOPROTOOPT = 92, ZTS_EPROTONOSUPPORT = 93, ZTS_ESOCKTNOSUPPORT = 94, ZTS_EOPNOTSUPP = 95, ZTS_EPFNOSUPPORT = 96, ZTS_EAFNOSUPPORT = 97, ZTS_EADDRINUSE = 98, ZTS_EADDRNOTAVAIL = 99, ZTS_ENETDOWN = 100, ZTS_ENETUNREACH = 101, ZTS_ECONNABORTED = 103, ZTS_ECONNRESET = 104, ZTS_ENOBUFS = 105, ZTS_EISCONN = 106, ZTS_ENOTCONN = 107, ZTS_ETIMEDOUT = 110, ZTS_EHOSTUNREACH = 113, ZTS_EALREADY = 114, ZTS_EINPROGRESS = 115} |
| enum| **[zts_network_status_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_network_status_t)** { ZTS_NETWORK_STATUS_REQUESTING_CONFIGURATION = 0, ZTS_NETWORK_STATUS_OK = 1, ZTS_NETWORK_STATUS_ACCESS_DENIED = 2, ZTS_NETWORK_STATUS_NOT_FOUND = 3, ZTS_NETWORK_STATUS_PORT_ERROR = 4, ZTS_NETWORK_STATUS_CLIENT_TOO_OLD = 5} |
| enum| **[zts_net_info_type_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_net_info_type_t)** { ZTS_NETWORK_TYPE_PRIVATE = 0, ZTS_NETWORK_TYPE_PUBLIC = 1} |
| enum| **[zts_peer_role_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#enum-zts_peer_role_t)** { ZTS_PEER_ROLE_LEAF = 0, ZTS_PEER_ROLE_MOON = 1, ZTS_PEER_ROLE_PLANET = 2} |
| typedef uint32_t | **[zts_socklen_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_socklen_t)**  |
| typedef uint32_t | **[zts_in_addr_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_in_addr_t)**  |
| typedef uint16_t | **[zts_in_port_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_in_port_t)**  |
| typedef uint8_t | **[zts_sa_family_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_sa_family_t)**  |
| typedef struct zts_ip_mreq | **[zts_ip_mreq](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_ip_mreq)**  |
| typedef struct zts_ipv6_mreq | **[zts_ipv6_mreq](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_ipv6_mreq)**  |
| typedef struct zts_fd_set | **[zts_fd_set](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_fd_set)**  |
| typedef struct zts_timeval | **[zts_timeval](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_timeval)**  |
| typedef unsigned int | **[zts_nfds_t](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_nfds_t)**  |
| typedef struct <a href="/autogen/libzt/classes/structzts__ip__addr.md">zts_ip_addr</a> | **[zts_ip_addr](/autogen/libzt/files/_zero_tier_sockets_8h.md#typedef-zts_ip_addr)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| int | **[zts_id_new](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_id_new)**(char * key, unsigned int * key_buf_len)<br/>Generates a node identity (public/secret key-pair) and stores it in a user-provided buffer.  |
| int | **[zts_id_pair_is_valid](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_id_pair_is_valid)**(const char * key, unsigned int len)<br/>Verifies that a key-pair is valid. Checks formatting and pairing of key to address.  |
| int | **[zts_init_from_storage](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage)**(const char * path)<br/>Instruct ZeroTier to look for node identity files at the given location. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_from_memory](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_memory)**(const char * key, unsigned int len)<br/>Instruct ZeroTier to use the identity provided in <code>key</code>. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_set_event_handler](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_event_handler)**(void(*)(void *) callback)<br/>Set the event handler function. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_blacklist_if](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_blacklist_if)**(const char * prefix, unsigned int len)<br/>Blacklist an interface prefix (or name). This prevents ZeroTier from sending traffic over matching interfaces. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_set_roots](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_roots)**(const void * roots_data, unsigned int len)<br/>Present a root set definition for ZeroTier to use instead of the default. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_set_port](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_port)**(unsigned short port)<br/>Set the port to which the node should bind. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_set_random_port_range](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_random_port_range)**(unsigned short start_port, unsigned short end_port)<br/>Set range that random ports will be selected from. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_secondary_port](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_secondary_port)**(unsigned int allowed)<br/>Allow or disallow ZeroTier from automatically selecting a backup port to help get through buggy NAT. This is enabled by default. This port is randomly chosen and should be disabled if you want to control exactly which ports ZeroTier talks on and (iff) you know with absolute certainty that traffic on your chosen primary port is allowed. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_port_mapping](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_port_mapping)**(unsigned int allowed)<br/>Allow or disallow the use of port-mapping. This is enabled by default. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_net_cache](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_net_cache)**(unsigned int allowed)<br/>Enable or disable whether the node will cache network details (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_peer_cache](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_peer_cache)**(unsigned int allowed)<br/>Enable or disable whether the node will cache peer details (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_roots_cache](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_roots_cache)**(unsigned int allowed)<br/>Enable or disable whether the node will cache root definitions (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_init_allow_id_cache](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_id_cache)**(unsigned int allowed)<br/>Enable or disable whether the node will cache identities (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>.  |
| int | **[zts_addr_is_assigned](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_is_assigned)**(uint64_t net_id, unsigned int family)<br/>Return whether an address of the given family has been assigned by the network.  |
| int | **[zts_addr_get](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_get)**(uint64_t net_id, unsigned int family, struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> * addr)<br/>Get the first-assigned IP on the given network.  |
| int | **[zts_addr_get_str](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_get_str)**(uint64_t net_id, unsigned int family, char * dst, unsigned int len)<br/>Get the first-assigned IP on the given network as a null-terminated human-readable string.  |
| int | **[zts_addr_get_all](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_get_all)**(uint64_t net_id, struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> * addr, unsigned int * count)<br/>Get all IP addresses assigned to this node by the given network.  |
| int | **[zts_addr_compute_6plane](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_compute_6plane)**(const uint64_t net_id, const uint64_t node_id, struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> * addr)<br/>Compute a <code>6PLANE</code> IPv6 address for the given Network ID and Node ID.  |
| int | **[zts_addr_compute_rfc4193](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_compute_rfc4193)**(const uint64_t net_id, const uint64_t node_id, struct <a href="/autogen/libzt/classes/structzts__sockaddr__storage.md">zts_sockaddr_storage</a> * addr)<br/>Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID.  |
| int | **[zts_addr_compute_rfc4193_str](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_compute_rfc4193_str)**(uint64_t net_id, uint64_t node_id, char * dst, unsigned int len)<br/>Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID and copy its null-terminated human-readable string representation into destination buffer.  |
| int | **[zts_addr_compute_6plane_str](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_compute_6plane_str)**(uint64_t net_id, uint64_t node_id, char * dst, unsigned int len)<br/>Compute <code>6PLANE</code> IPv6 address for the given Network ID and Node ID and copy its null-terminated human-readable string representation into destination buffer.  |
| uint64_t | **[zts_net_compute_adhoc_id](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_compute_adhoc_id)**(uint16_t start_port, uint16_t end_port)<br/>Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID.  |
| int | **[zts_net_join](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_join)**(uint64_t net_id)<br/>Join a network.  |
| int | **[zts_net_leave](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_leave)**(uint64_t net_id)<br/>Leave a network.  |
| int | **[zts_net_transport_is_ready](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_transport_is_ready)**(const uint64_t net_id)<br/>Return whether this network is ready to send and receive traffic.  |
| uint64_t | **[zts_net_get_mac](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_mac)**(uint64_t net_id)<br/>Get the MAC Address for this node on the given network.  |
| int | **[zts_net_get_mac_str](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_mac_str)**(uint64_t net_id, char * dst, unsigned int len)<br/>Get the MAC Address for this node on the given network.  |
| int | **[zts_net_get_broadcast](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_broadcast)**(uint64_t net_id)<br/>Return whether broadcast is enabled on this network.  |
| int | **[zts_net_get_mtu](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_mtu)**(uint64_t net_id)<br/>Get the MTU of the given network.  |
| int | **[zts_net_get_name](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_name)**(uint64_t net_id, char * dst, unsigned int len)<br/>Get the nickname of the network.  |
| int | **[zts_net_get_status](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_status)**(uint64_t net_id)<br/>Get the status of the network.  |
| int | **[zts_net_get_type](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_net_get_type)**(uint64_t net_id)<br/>Get the type of network (public or private.)  |
| int | **[zts_route_is_assigned](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_route_is_assigned)**(uint64_t net_id, unsigned int family)<br/>Return whether a managed route of the given address family has been assigned by the network.  |
| int | **[zts_node_start](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_start)**()<br/>Start the ZeroTier node. Should be called after calling the relevant <code>zts\_init\_\*       </code> functions for your application. To enable storage call <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> before this function. To enable event callbacks call <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_event_handler">zts\_init\_set\_event\_handler()                        </a></code> before this function.  |
| int | **[zts_node_is_online](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_is_online)**()<br/>Return whether the node is online (Can reach the Internet)  |
| uint64_t | **[zts_node_get_id](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_id)**()<br/>Get the public node identity (aka <code>node\_id      </code>). Callable only after the node has been started.  |
| int | **[zts_node_get_id_pair](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_id_pair)**(char * key, unsigned int * key_dst_len)<br/>Copy the current node's public (and secret!) identity into a buffer.  |
| int | **[zts_node_get_port](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_port)**()<br/>Get the primary port to which the node is bound. Callable only after the node has been started.  |
| int | **[zts_node_stop](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_stop)**()<br/>Stop the ZeroTier node and bring down all virtual network transport services. Callable only after the node has been started.  |
| int | **[zts_node_free](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_free)**()<br/>Stop all background threads, bring down all transport services, free all resources. After calling this function an application restart will be required before the library can be used again. Callable only after the node has been started.  |
| int | **[zts_moon_orbit](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_moon_orbit)**(uint64_t moon_roots_id, uint64_t moon_seed)<br/>Orbit a given moon (user-defined root server)  |
| int | **[zts_moon_deorbit](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_moon_deorbit)**(uint64_t moon_roots_id)<br/>De-orbit a given moon (user-defined root server)  |
| int | **[zts_stats_get_all](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_stats_get_all)**(<a href="/autogen/libzt/classes/structzts__stats__counter__t.md">zts_stats_counter_t</a> * dst)<br/>Get all statistical counters for all protocols and levels. See also: lwip/stats.h.  |
| int | **[zts_bsd_socket](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_socket)**(int family, int type, int protocol)<br/>Create a socket.  |
| int | **[zts_bsd_connect](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_connect)**(int fd, const struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t addrlen)<br/>Connect a socket to a remote host.  |
| int | **[zts_bsd_bind](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_bind)**(int fd, const struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t addrlen)<br/>Bind a socket to a local address.  |
| int | **[zts_bsd_listen](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_listen)**(int fd, int backlog)<br/>Listen for incoming connections on socket.  |
| int | **[zts_bsd_accept](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_accept)**(int fd, struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t * addrlen)<br/>Accept an incoming connection.  |
| int | **[zts_bsd_setsockopt](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_setsockopt)**(int fd, int level, int optname, const void * optval, zts_socklen_t optlen)<br/>Set socket options.  |
| int | **[zts_bsd_getsockopt](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_getsockopt)**(int fd, int level, int optname, void * optval, zts_socklen_t * optlen)<br/>Get socket options.  |
| int | **[zts_bsd_getsockname](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_getsockname)**(int fd, struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t * addrlen)<br/>Get the name (address) of the local end of the socket.  |
| int | **[zts_bsd_getpeername](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_getpeername)**(int fd, struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t * addrlen)<br/>Get the name (address) of the remote end of the socket.  |
| int | **[zts_bsd_close](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_close)**(int fd)<br/>Close socket.  |
| int | **[zts_bsd_select](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_select)**(int nfds, zts_fd_set * readfds, zts_fd_set * writefds, zts_fd_set * exceptfds, struct zts_timeval * timeout)<br/>Monitor multiple file descriptors for "readiness".  |
| int | **[zts_bsd_fcntl](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_fcntl)**(int fd, int cmd, int flags)<br/>Issue file control commands on a socket.  |
| int | **[zts_bsd_poll](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_poll)**(struct zts_pollfd * fds, zts_nfds_t nfds, int timeout)<br/>Wait for some event on a file descriptor.  |
| int | **[zts_bsd_ioctl](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_ioctl)**(int fd, unsigned long request, void * argp)<br/>Control a device.  |
| ssize_t | **[zts_bsd_send](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_send)**(int fd, const void * buf, size_t len, int flags)<br/>Send data to remote host.  |
| ssize_t | **[zts_bsd_sendto](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_sendto)**(int fd, const void * buf, size_t len, int flags, const struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t addrlen)<br/>Send data to remote host.  |
| ssize_t | **[zts_bsd_sendmsg](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_sendmsg)**(int fd, const struct zts_msghdr * msg, int flags)<br/>Send message to remote host.  |
| ssize_t | **[zts_bsd_recv](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_recv)**(int fd, void * buf, size_t len, int flags)<br/>Receive data from remote host.  |
| ssize_t | **[zts_bsd_recvfrom](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_recvfrom)**(int fd, void * buf, size_t len, int flags, struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t * addrlen)<br/>Receive data from remote host.  |
| ssize_t | **[zts_bsd_recvmsg](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_recvmsg)**(int fd, struct zts_msghdr * msg, int flags)<br/>Receive a message from remote host.  |
| ssize_t | **[zts_bsd_read](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_read)**(int fd, void * buf, size_t len)<br/>Read data from socket onto buffer.  |
| ssize_t | **[zts_bsd_readv](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_readv)**(int fd, const struct zts_iovec * iov, int iovcnt)<br/>Read data from socket into multiple buffers.  |
| ssize_t | **[zts_bsd_write](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_write)**(int fd, const void * buf, size_t len)<br/>Write data from buffer to socket.  |
| ssize_t | **[zts_bsd_writev](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_writev)**(int fd, const struct zts_iovec * iov, int iovcnt)<br/>Write data from multiple buffers to socket.  |
| int | **[zts_bsd_shutdown](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_shutdown)**(int fd, int how)<br/>Shut down some aspect of a socket.  |
| int | **[zts_socket](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_socket)**(int family, int type, int protocol)<br/>Create a socket.  |
| int | **[zts_connect](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_connect)**(int fd, const char * ipstr, unsigned short port, int timeout_ms)<br/>Connect a socket to a remote host.  |
| int | **[zts_bind](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bind)**(int fd, const char * ipstr, unsigned short port)<br/>Bind a socket to a local address.  |
| int | **[zts_listen](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_listen)**(int fd, int backlog)<br/>Listen for incoming connections on socket.  |
| int | **[zts_accept](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_accept)**(int fd, char * remote_addr, int len, unsigned short * port)<br/>Accept an incoming connection.  |
| ssize_t | **[zts_send](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_send)**(int fd, const void * buf, size_t len, int flags)<br/>Send data to remote host.  |
| ssize_t | **[zts_recv](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_recv)**(int fd, void * buf, size_t len, int flags)<br/>Receive data from remote host.  |
| ssize_t | **[zts_read](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_read)**(int fd, void * buf, size_t len)<br/>Read data from socket onto buffer.  |
| ssize_t | **[zts_write](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_write)**(int fd, const void * buf, size_t len)<br/>Write data from buffer to socket.  |
| int | **[zts_shutdown_rd](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_shutdown_rd)**(int fd)<br/>Shut down <code>read</code> aspect of a socket.  |
| int | **[zts_shutdown_wr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_shutdown_wr)**(int fd)<br/>Shut down <code>write</code> aspect of a socket.  |
| int | **[zts_shutdown_rdwr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_shutdown_rdwr)**(int fd)<br/>Shut down both <code>read</code> and <code>write</code> aspect of a socket.  |
| int | **[zts_close](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_close)**(int fd)<br/>Close socket.  |
| int | **[zts_getpeername](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_getpeername)**(int fd, char * remote_addr_str, int len, unsigned short * port)<br/>Get the name (address) of the remote end of the socket.  |
| int | **[zts_getsockname](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_getsockname)**(int fd, char * local_addr_str, int len, unsigned short * port)<br/>Get the name (address) of the local end of the socket.  |
| int | **[zts_tcp_client](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_tcp_client)**(const char * remote_ipstr, unsigned short remote_port)<br/>A convenience function that takes a remote address IP string and creates the appropriate type of socket, and uses it to connect to a remote host.  |
| int | **[zts_tcp_server](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_tcp_server)**(const char * local_ipstr, unsigned short local_port, char * remote_ipstr, int len, unsigned short * remote_port)<br/>A convenience function that takes a remote address IP string and creates the appropriate type of socket, binds, listens, and then accepts on it.  |
| int | **[zts_udp_server](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_udp_server)**(const char * local_ipstr, unsigned short local_port)<br/>A convenience function that takes a remote address IP string and creates the appropriate type of socket, and binds to it.  |
| int | **[zts_udp_client](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_udp_client)**(const char * remote_ipstr)<br/>This function doesn't really do anything other than be a namespace counterpart to <code>zts\_udp\_server            </code>. All this function does is create a <code>ZTS\_SOCK\_DGRAM            </code> socket and return its file descriptor.  |
| int | **[zts_set_no_delay](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_no_delay)**(int fd, int enabled)<br/>Enable or disable <code>TCP\_NODELAY          </code>. Enabling this is equivalent to turning off Nagle's algorithm.  |
| int | **[zts_get_last_socket_error](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_last_socket_error)**(int fd)<br/>Get the last error for the given socket.  |
| size_t | **[zts_get_data_available](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_data_available)**(int fd)<br/>Return amount of data available to read from socket.  |
| int | **[zts_get_no_delay](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_no_delay)**(int fd)<br/>Return whether <code>TCP\_NODELAY          </code> is enabled.  |
| int | **[zts_set_linger](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_linger)**(int fd, int enabled, int value)<br/>Enable or disable <code>SO\_LINGER        </code> while also setting its value.  |
| int | **[zts_get_linger_enabled](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_linger_enabled)**(int fd)<br/>Return whether <code>SO\_LINGER        </code> is enabled.  |
| int | **[zts_get_linger_value](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_linger_value)**(int fd)<br/>Return the value of <code>SO\_LINGER        </code> |
| int | **[zts_get_pending_data_size](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_pending_data_size)**(int fd)<br/>Return the number of bytes available to read from the network buffer.  |
| int | **[zts_set_reuse_addr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_reuse_addr)**(int fd, int enabled)<br/>Enable or disable <code>SO\_REUSEADDR           </code> |
| int | **[zts_get_reuse_addr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_reuse_addr)**(int fd)<br/>Return whether <code>SO\_REUSEADDR           </code> is enabled.  |
| int | **[zts_set_recv_timeout](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_recv_timeout)**(int fd, int seconds, int microseconds)<br/>Set the value of <code>SO\_RCVTIMEO          </code> |
| int | **[zts_get_recv_timeout](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_recv_timeout)**(int fd)<br/>Return the value of <code>SO\_RCVTIMEO          </code> |
| int | **[zts_set_send_timeout](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_send_timeout)**(int fd, int seconds, int microseconds)<br/>Set the value of <code>SO\_SNDTIMEO          </code> |
| int | **[zts_get_send_timeout](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_send_timeout)**(int fd)<br/>Return the value of <code>SO\_SNDTIMEO          </code> |
| int | **[zts_set_send_buf_size](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_send_buf_size)**(int fd, int size)<br/>Set the value of <code>SO\_SNDBUF        </code> |
| int | **[zts_get_send_buf_size](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_send_buf_size)**(int fd)<br/>Return the value of <code>SO\_SNDBUF        </code> |
| int | **[zts_set_recv_buf_size](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_recv_buf_size)**(int fd, int size)<br/>Set the value of <code>SO\_RCVBUF        </code> |
| int | **[zts_get_recv_buf_size](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_recv_buf_size)**(int fd)<br/>Return the value of <code>SO\_RCVBUF        </code> |
| int | **[zts_set_ttl](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_ttl)**(int fd, int ttl)<br/>Set the value of <code>IP\_TTL     </code> |
| int | **[zts_get_ttl](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_ttl)**(int fd)<br/>Return the value of <code>IP\_TTL     </code> |
| int | **[zts_set_blocking](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_blocking)**(int fd, int enabled)<br/>Change blocking behavior <code>O\_NONBLOCK         </code> |
| int | **[zts_get_blocking](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_blocking)**(int fd)<br/>Return whether blocking mode <code>O\_NONBLOCK         </code> is enabled.  |
| int | **[zts_set_keepalive](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_set_keepalive)**(int fd, int enabled)<br/>Enable or disable <code>SO\_KEEPALIVE           </code> |
| int | **[zts_get_keepalive](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_get_keepalive)**(int fd)<br/>Return whether <code>SO\_KEEPALIVE           </code> is enabled.  |
| struct zts_hostent * | **[zts_bsd_gethostbyname](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_bsd_gethostbyname)**(const char * name)<br/>Resolve a host-name.  |
| int | **[zts_dns_set_server](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_dns_set_server)**(uint8_t index, const <a href="/autogen/libzt/classes/structzts__ip__addr.md">zts_ip_addr</a> * addr) |
| const <a href="/autogen/libzt/classes/structzts__ip__addr.md">zts_ip_addr</a> * | **[zts_dns_get_server](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_dns_get_server)**(uint8_t index) |
| int | **[zts_core_lock_obtain](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain)**()<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_lock_release](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release)**()<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_addr_count](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_addr_count)**(uint64_t net_id)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_addr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_addr)**(uint64_t net_id, unsigned int idx, char * addr, unsigned int len)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_route_count](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_route_count)**(uint64_t net_id)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_route](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_route)**(uint64_t net_id, unsigned int idx, char * target, char * via, unsigned int len, uint16_t * flags, uint16_t * metric)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_path_count](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_path_count)**(uint64_t peer_id)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_path](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_path)**(uint64_t peer_id, unsigned int idx, char * dst, unsigned int len)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_mc_count](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_mc_count)**(uint64_t net_id)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_core_query_mc](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_query_mc)**(uint64_t net_id, unsigned int idx, uint64_t * mac, uint32_t * adi)<br/>Lock the core service so that queries about addresses, routes, paths, etc. can be performed.  |
| int | **[zts_util_sign_root_set](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_util_sign_root_set)**(char * roots_out, unsigned int * roots_len, char * prev_key, unsigned int * prev_key_len, char * curr_key, unsigned int * curr_key_len, uint64_t id, uint64_t ts, <a href="/autogen/libzt/classes/structzts__root__set__t.md">zts_root_set_t</a> * roots_spec)<br/>Generates a new root set definition.  |
| void | **[zts_util_delay](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_util_delay)**(unsigned long milliseconds)<br/>Platform-agnostic delay.  |
| int | **[zts_util_get_ip_family](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_util_get_ip_family)**(const char * ipstr)<br/>Return the family type of the IP string.  |
| int | **[zts_util_ipstr_to_saddr](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_util_ipstr_to_saddr)**(const char * src_ipstr, unsigned short port, struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * dstaddr, zts_socklen_t * addrlen) |
| int | **[zts_util_ntop](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_util_ntop)**(struct <a href="/autogen/libzt/classes/structzts__sockaddr.md">zts_sockaddr</a> * addr, zts_socklen_t addrlen, char * dst_str, int len, unsigned short * port)<br/>Similar to <code>inet\_ntop        </code> but determines family automatically and returns port as a value result parameter.  |
| char * | **[zts_ipaddr_ntoa](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_ipaddr_ntoa)**(const <a href="/autogen/libzt/classes/structzts__ip__addr.md">zts_ip_addr</a> * addr) |
| int | **[zts_ipaddr_aton](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_ipaddr_aton)**(const char * cp, <a href="/autogen/libzt/classes/structzts__ip__addr.md">zts_ip_addr</a> * addr) |
| const char * | **[zts_inet_ntop](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_inet_ntop)**(int family, const void * src, char * dst, zts_socklen_t size) |
| int | **[zts_inet_pton](/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_inet_pton)**(int family, const char * src, void * dst) |

## Attributes

|                | Name           |
| -------------- | -------------- |
| int | **[zts_errno](/autogen/libzt/files/_zero_tier_sockets_8h.md#variable-zts_errno)**  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ZTS_MAC_ADDRSTRLEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_mac_addrstrlen)**  |
|  | **[ZTS_INET_ADDRSTRLEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inet_addrstrlen)**  |
|  | **[ZTS_INET6_ADDRSTRLEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inet6_addrstrlen)**  |
|  | **[ZTS_IP_MAX_STR_LEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_max_str_len)**  |
|  | **[ZTS_STORE_DATA_LEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_store_data_len)**  |
|  | **[ZTS_MAX_NETWORK_SHORT_NAME_LENGTH](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_network_short_name_length)**  |
|  | **[ZTS_MAX_NETWORK_ROUTES](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_network_routes)**  |
|  | **[ZTS_MAX_ASSIGNED_ADDRESSES](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_assigned_addresses)**  |
|  | **[ZTS_MAX_PEER_NETWORK_PATHS](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_peer_network_paths)**  |
|  | **[ZTS_MAX_MULTICAST_SUBSCRIPTIONS](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_multicast_subscriptions)**  |
|  | **[ZTS_MAX_ENDPOINT_STR_LEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_endpoint_str_len)**  |
|  | **[ZTS_C_API_ONLY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_c_api_only)**  |
|  | **[ZTS_IPADDR_NONE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_none)**  |
|  | **[ZTS_IPADDR_LOOPBACK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_loopback)**  |
|  | **[ZTS_IPADDR_ANY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_any)**  |
|  | **[ZTS_IPADDR_BROADCAST](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_broadcast)**  |
|  | **[ZTS_INADDR_NONE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inaddr_none)**  |
|  | **[ZTS_INADDR_LOOPBACK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inaddr_loopback)**  |
|  | **[ZTS_INADDR_ANY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inaddr_any)**  |
|  | **[ZTS_INADDR_BROADCAST](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inaddr_broadcast)**  |
|  | **[ZTS_SOCK_STREAM](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_sock_stream)**  |
|  | **[ZTS_SOCK_DGRAM](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_sock_dgram)**  |
|  | **[ZTS_SOCK_RAW](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_sock_raw)**  |
|  | **[ZTS_AF_UNSPEC](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_af_unspec)**  |
|  | **[ZTS_AF_INET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_af_inet)**  |
|  | **[ZTS_AF_INET6](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_af_inet6)**  |
|  | **[ZTS_PF_INET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pf_inet)**  |
|  | **[ZTS_PF_INET6](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pf_inet6)**  |
|  | **[ZTS_PF_UNSPEC](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pf_unspec)**  |
|  | **[ZTS_IPPROTO_IP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_ip)**  |
|  | **[ZTS_IPPROTO_ICMP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_icmp)**  |
|  | **[ZTS_IPPROTO_TCP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_tcp)**  |
|  | **[ZTS_IPPROTO_UDP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_udp)**  |
|  | **[ZTS_IPPROTO_IPV6](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_ipv6)**  |
|  | **[ZTS_IPPROTO_ICMPV6](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_icmpv6)**  |
|  | **[ZTS_IPPROTO_UDPLITE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_udplite)**  |
|  | **[ZTS_IPPROTO_RAW](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipproto_raw)**  |
|  | **[ZTS_MSG_PEEK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_peek)**  |
|  | **[ZTS_MSG_WAITALL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_waitall)**  |
|  | **[ZTS_MSG_OOB](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_oob)**  |
|  | **[ZTS_MSG_DONTWAIT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_dontwait)**  |
|  | **[ZTS_MSG_MORE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_more)**  |
|  | **[ZTS_IOCPARM_MASK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iocparm_mask)**  |
|  | **[ZTS_IOC_VOID](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ioc_void)**  |
|  | **[ZTS_IOC_OUT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ioc_out)**  |
|  | **[ZTS_IOC_IN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ioc_in)**  |
|  | **[ZTS_IOC_INOUT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ioc_inout)**  |
|  | **[ZTS_IO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_io)**(x, y)  |
|  | **[ZTS_IOR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ior)**(x, y, t)  |
|  | **[ZTS_IOW](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iow)**(x, y, t)  |
|  | **[ZTS_FIONREAD](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fionread)**  |
|  | **[ZTS_FIONBIO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fionbio)**  |
|  | **[SIN_ZERO_LEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-sin_zero_len)**  |
|  | **[ZTS_MAX_NUM_ROOTS](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_num_roots)**  |
|  | **[ZTS_MAX_ENDPOINTS_PER_ROOT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_max_endpoints_per_root)**  |
|  | **[ZTS_API](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_api)**  |
|  | **[ZTCALL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-ztcall)**  |
|  | **[ZTS_DISABLE_CENTRAL_API](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_disable_central_api)**  |
|  | **[ZTS_ID_STR_BUF_LEN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_id_str_buf_len)**  |
|  | **[ZTS_SOL_SOCKET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_sol_socket)**  |
|  | **[ZTS_SO_DEBUG](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_debug)**  |
|  | **[ZTS_SO_ACCEPTCONN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_acceptconn)**  |
|  | **[ZTS_SO_REUSEADDR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_reuseaddr)**  |
|  | **[ZTS_SO_KEEPALIVE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_keepalive)**  |
|  | **[ZTS_SO_DONTROUTE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_dontroute)**  |
|  | **[ZTS_SO_BROADCAST](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_broadcast)**  |
|  | **[ZTS_SO_USELOOPBACK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_useloopback)**  |
|  | **[ZTS_SO_LINGER](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_linger)**  |
|  | **[ZTS_SO_DONTLINGER](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_dontlinger)**  |
|  | **[ZTS_SO_OOBINLINE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_oobinline)**  |
|  | **[ZTS_SO_REUSEPORT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_reuseport)**  |
|  | **[ZTS_SO_SNDBUF](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_sndbuf)**  |
|  | **[ZTS_SO_RCVBUF](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_rcvbuf)**  |
|  | **[ZTS_SO_SNDLOWAT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_sndlowat)**  |
|  | **[ZTS_SO_RCVLOWAT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_rcvlowat)**  |
|  | **[ZTS_SO_SNDTIMEO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_sndtimeo)**  |
|  | **[ZTS_SO_RCVTIMEO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_rcvtimeo)**  |
|  | **[ZTS_SO_ERROR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_error)**  |
|  | **[ZTS_SO_TYPE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_type)**  |
|  | **[ZTS_SO_CONTIMEO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_contimeo)**  |
|  | **[ZTS_SO_NO_CHECK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_no_check)**  |
|  | **[ZTS_SO_BINDTODEVICE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_so_bindtodevice)**  |
|  | **[ZTS_IP_TOS](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_tos)**  |
|  | **[ZTS_IP_TTL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_ttl)**  |
|  | **[ZTS_IP_PKTINFO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_pktinfo)**  |
|  | **[ZTS_TCP_NODELAY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_tcp_nodelay)**  |
|  | **[ZTS_TCP_KEEPALIVE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_tcp_keepalive)**  |
|  | **[ZTS_TCP_KEEPIDLE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_tcp_keepidle)**  |
|  | **[ZTS_TCP_KEEPINTVL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_tcp_keepintvl)**  |
|  | **[ZTS_TCP_KEEPCNT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_tcp_keepcnt)**  |
|  | **[ZTS_IPV6_CHECKSUM](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_checksum)**  |
|  | **[ZTS_IPV6_V6ONLY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_v6only)**  |
|  | **[ZTS_UDPLITE_SEND_CSCOV](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_udplite_send_cscov)**  |
|  | **[ZTS_UDPLITE_RECV_CSCOV](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_udplite_recv_cscov)**  |
|  | **[ZTS_IP_MULTICAST_TTL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_multicast_ttl)**  |
|  | **[ZTS_IP_MULTICAST_IF](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_multicast_if)**  |
|  | **[ZTS_IP_MULTICAST_LOOP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_multicast_loop)**  |
|  | **[ZTS_IP_ADD_MEMBERSHIP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_add_membership)**  |
|  | **[ZTS_IP_DROP_MEMBERSHIP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ip_drop_membership)**  |
|  | **[ZTS_IPV6_JOIN_GROUP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_join_group)**  |
|  | **[ZTS_IPV6_ADD_MEMBERSHIP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_add_membership)**  |
|  | **[ZTS_IPV6_LEAVE_GROUP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_leave_group)**  |
|  | **[ZTS_IPV6_DROP_MEMBERSHIP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipv6_drop_membership)**  |
|  | **[ZTS_IPTOS_TOS_MASK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_tos_mask)**  |
|  | **[ZTS_IPTOS_TOS](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_tos)**(tos)  |
|  | **[ZTS_IPTOS_LOWDELAY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_lowdelay)**  |
|  | **[ZTS_IPTOS_THROUGHPUT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_throughput)**  |
|  | **[ZTS_IPTOS_RELIABILITY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_reliability)**  |
|  | **[ZTS_IPTOS_LOWCOST](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_lowcost)**  |
|  | **[ZTS_IPTOS_MINCOST](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_mincost)**  |
|  | **[ZTS_IPTOS_PREC_MASK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_mask)**  |
|  | **[ZTS_IPTOS_PREC](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec)**(tos)  |
|  | **[ZTS_IPTOS_PREC_NETCONTROL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_netcontrol)**  |
|  | **[ZTS_IPTOS_PREC_INTERNETCONTROL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_internetcontrol)**  |
|  | **[ZTS_IPTOS_PREC_CRITIC_ECP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_critic_ecp)**  |
|  | **[ZTS_IPTOS_PREC_FLASHOVERRIDE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_flashoverride)**  |
|  | **[ZTS_IPTOS_PREC_FLASH](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_flash)**  |
|  | **[ZTS_IPTOS_PREC_IMMEDIATE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_immediate)**  |
|  | **[ZTS_IPTOS_PREC_PRIORITY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_priority)**  |
|  | **[ZTS_IPTOS_PREC_ROUTINE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_iptos_prec_routine)**  |
|  | **[LWIP_SOCKET_OFFSET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-lwip_socket_offset)**  |
|  | **[MEMP_NUM_NETCONN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-memp_num_netconn)**  |
|  | **[ZTS_FD_SETSIZE](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fd_setsize)**  |
|  | **[ZTS_FDSETSAFESET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fdsetsafeset)**(n, code)  |
|  | **[ZTS_FDSETSAFEGET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fdsetsafeget)**(n, code)  |
|  | **[ZTS_FD_SET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fd_set)**(n, p)  |
|  | **[ZTS_FD_CLR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fd_clr)**(n, p)  |
|  | **[ZTS_FD_ISSET](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fd_isset)**(n, p)  |
|  | **[ZTS_FD_ZERO](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_fd_zero)**(p)  |
|  | **[ZTS_F_GETFL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_f_getfl)**  |
|  | **[ZTS_F_SETFL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_f_setfl)**  |
|  | **[ZTS_O_NONBLOCK](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_o_nonblock)**  |
|  | **[ZTS_O_NDELAY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_o_ndelay)**  |
|  | **[ZTS_O_RDONLY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_o_rdonly)**  |
|  | **[ZTS_O_WRONLY](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_o_wronly)**  |
|  | **[ZTS_O_RDWR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_o_rdwr)**  |
|  | **[ZTS_POLLIN](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollin)**  |
|  | **[ZTS_POLLOUT](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollout)**  |
|  | **[ZTS_POLLERR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollerr)**  |
|  | **[ZTS_POLLNVAL](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollnval)**  |
|  | **[ZTS_POLLRDNORM](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollrdnorm)**  |
|  | **[ZTS_POLLRDBAND](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollrdband)**  |
|  | **[ZTS_POLLPRI](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollpri)**  |
|  | **[ZTS_POLLWRNORM](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollwrnorm)**  |
|  | **[ZTS_POLLWRBAND](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollwrband)**  |
|  | **[ZTS_POLLHUP](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_pollhup)**  |
|  | **[ZTS_MSG_TRUNC](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_trunc)**  |
|  | **[ZTS_MSG_CTRUNC](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_msg_ctrunc)**  |
|  | **[ZTS_SHUT_RD](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_shut_rd)**  |
|  | **[ZTS_SHUT_WR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_shut_wr)**  |
|  | **[ZTS_SHUT_RDWR](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_shut_rdwr)**  |
|  | **[h_addr](/autogen/libzt/files/_zero_tier_sockets_8h.md#define-h_addr)**  |

## Detailed Description


This defines the external C API for ZeroTier Sockets 

## Types Documentation

### enum zts_error_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_ERR_OK | 0|  No error  |
| ZTS_ERR_SOCKET | -1|  Socket error, see <code>zts\_errno        </code> |
| ZTS_ERR_SERVICE | -2|  This operation is not allowed at this time. Or possibly the node hasn't been started  |
| ZTS_ERR_ARG | -3|  Invalid argument  |
| ZTS_ERR_NO_RESULT | -4|  No result (not necessarily an error)  |
| ZTS_ERR_GENERAL | -5|  Consider filing a bug report  |




Common error return values 


### enum zts_event_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_EVENT_NODE_UP | 200|  Node has been initialized

This is the first event generated, and is always sent. It may occur before node's constructor returns.  |
| ZTS_EVENT_NODE_ONLINE | 201|  Node is online &ndash; at least one upstream node appears reachable  |
| ZTS_EVENT_NODE_OFFLINE | 202|  Node is offline &ndash; network does not seem to be reachable by any available strategy  |
| ZTS_EVENT_NODE_DOWN | 203|  Node is shutting down

This is generated within Node's destructor when it is being shut down. It's done for convenience, since cleaning up other state in the event handler may appear more idiomatic.  |
| ZTS_EVENT_NODE_FATAL_ERROR | 204|  A fatal error has occurred. One possible reason is:

Your identity has collided with another node's ZeroTier address

This happens if two different public keys both hash (via the algorithm in Identity::generate()) to the same 40-bit ZeroTier address.

This is something you should "never" see, where "never" is defined as once per 2^39 new node initializations / identity creations. If you do see it, you're going to see it very soon after a node is first initialized.

This is reported as an event rather than a return code since it's detected asynchronously via error messages from authoritative nodes.

If this occurs, you must shut down and delete the node, delete the identity.secret record/file from the data store, and restart to generate a new identity. If you don't do this, you will not be able to communicate with other nodes.

We'd automate this process, but we don't think silently deleting private keys or changing our address without telling the calling code is good form. It violates the principle of least surprise.

You can technically get away with not handling this, but we recommend doing so in a mature reliable application. Besides, handling this condition is a good way to make sure it never arises. It's like how umbrellas prevent rain and smoke detectors prevent fires. They do, right?

Meta-data: none  |
| ZTS_EVENT_NETWORK_NOT_FOUND | 210|  Network ID does not correspond to a known network  |
| ZTS_EVENT_NETWORK_CLIENT_TOO_OLD | 211|  The version of ZeroTier inside libzt is too old  |
| ZTS_EVENT_NETWORK_REQ_CONFIG | 212|  The configuration for a network has been requested (no action needed)  |
| ZTS_EVENT_NETWORK_OK | 213|  The node joined the network successfully (no action needed)  |
| ZTS_EVENT_NETWORK_ACCESS_DENIED | 214|  The node is not allowed to join the network (you must authorize node)  |
| ZTS_EVENT_NETWORK_READY_IP4 | 215|  The node has received an IPv4 address from the network controller  |
| ZTS_EVENT_NETWORK_READY_IP6 | 216|  The node has received an IPv6 address from the network controller  |
| ZTS_EVENT_NETWORK_READY_IP4_IP6 | 217|  Deprecated  |
| ZTS_EVENT_NETWORK_DOWN | 218|  Network controller is unreachable  |
| ZTS_EVENT_NETWORK_UPDATE | 219|  Network change received from controller  |
| ZTS_EVENT_STACK_UP | 220|  TCP/IP stack (lwIP) is up (for debug purposes)  |
| ZTS_EVENT_STACK_DOWN | 221|  TCP/IP stack (lwIP) id down (for debug purposes)  |
| ZTS_EVENT_NETIF_UP | 230|  lwIP netif up (for debug purposes)  |
| ZTS_EVENT_NETIF_DOWN | 231|  lwIP netif down (for debug purposes)  |
| ZTS_EVENT_NETIF_REMOVED | 232|  lwIP netif removed (for debug purposes)  |
| ZTS_EVENT_NETIF_LINK_UP | 233|  lwIP netif link up (for debug purposes)  |
| ZTS_EVENT_NETIF_LINK_DOWN | 234|  lwIP netif link down (for debug purposes)  |
| ZTS_EVENT_PEER_DIRECT | 240|  A direct P2P path to peer is known  |
| ZTS_EVENT_PEER_RELAY | 241|  A direct P2P path to peer is NOT known. Traffic is now relayed  |
| ZTS_EVENT_PEER_UNREACHABLE | 242|  A peer is unreachable. Check NAT/Firewall settings  |
| ZTS_EVENT_PEER_PATH_DISCOVERED | 243|  A new path to a peer was discovered  |
| ZTS_EVENT_PEER_PATH_DEAD | 244|  A known path to a peer is now considered dead  |
| ZTS_EVENT_ROUTE_ADDED | 250|  A new managed network route was added  |
| ZTS_EVENT_ROUTE_REMOVED | 251|  A managed network route was removed  |
| ZTS_EVENT_ADDR_ADDED_IP4 | 260|  A new managed IPv4 address was assigned to this peer  |
| ZTS_EVENT_ADDR_REMOVED_IP4 | 261|  A managed IPv4 address assignment was removed from this peer  |
| ZTS_EVENT_ADDR_ADDED_IP6 | 262|  A new managed IPv4 address was assigned to this peer  |
| ZTS_EVENT_ADDR_REMOVED_IP6 | 263|  A managed IPv6 address assignment was removed from this peer  |
| ZTS_EVENT_STORE_IDENTITY_SECRET | 270|  The node's secret key (identity)  |
| ZTS_EVENT_STORE_IDENTITY_PUBLIC | 271|  The node's public key (identity)  |
| ZTS_EVENT_STORE_PLANET | 272|  The node has received an updated planet config  |
| ZTS_EVENT_STORE_PEER | 273|  New reachability hints and peer configuration  |
| ZTS_EVENT_STORE_NETWORK | 274|  New network config  |




Event codes used by the (optional) callback API 


### enum zts_errno_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_EPERM | 1|  Operation not permitted (<code>zts\_errno        </code> value)  |
| ZTS_ENOENT | 2|  No such file or directory  |
| ZTS_ESRCH | 3|  No such process  |
| ZTS_EINTR | 4|  Interrupted system call  |
| ZTS_EIO | 5|  I/O error  |
| ZTS_ENXIO | 6|  No such device or address  |
| ZTS_EBADF | 9|  Bad file number  |
| ZTS_EAGAIN | 11|  Try again  |
| ZTS_EWOULDBLOCK | ZTS_EAGAIN|  Operation would block  |
| ZTS_ENOMEM | 12|  Out of memory  |
| ZTS_EACCES | 13|  Permission denied  |
| ZTS_EFAULT | 14|  Bad address  |
| ZTS_EBUSY | 16|  Device or resource busy  |
| ZTS_EEXIST | 17|  File exists  |
| ZTS_ENODEV | 19|  No such device  |
| ZTS_EINVAL | 22|  Invalid argument  |
| ZTS_ENFILE | 23|  File table overflow  |
| ZTS_EMFILE | 24|  Too many open files  |
| ZTS_ENOSYS | 38|  Function not implemented  |
| ZTS_ENOTSOCK | 88|  Socket operation on non-socket  |
| ZTS_EDESTADDRREQ | 89|  Destination address required  |
| ZTS_EMSGSIZE | 90|  Message too long  |
| ZTS_EPROTOTYPE | 91|  Protocol wrong type for socket  |
| ZTS_ENOPROTOOPT | 92|  Protocol not available  |
| ZTS_EPROTONOSUPPORT | 93|  Protocol not supported  |
| ZTS_ESOCKTNOSUPPORT | 94|  Socket type not supported  |
| ZTS_EOPNOTSUPP | 95|  Operation not supported on transport endpoint  |
| ZTS_EPFNOSUPPORT | 96|  Protocol family not supported  |
| ZTS_EAFNOSUPPORT | 97|  Address family not supported by protocol  |
| ZTS_EADDRINUSE | 98|  Address already in use  |
| ZTS_EADDRNOTAVAIL | 99|  Cannot assign requested address  |
| ZTS_ENETDOWN | 100|  Network is down  |
| ZTS_ENETUNREACH | 101|  Network is unreachable  |
| ZTS_ECONNABORTED | 103|  Software caused connection abort  |
| ZTS_ECONNRESET | 104|  Connection reset by peer  |
| ZTS_ENOBUFS | 105|  No buffer space available  |
| ZTS_EISCONN | 106|  Transport endpoint is already connected  |
| ZTS_ENOTCONN | 107|  Transport endpoint is not connected  |
| ZTS_ETIMEDOUT | 110|  Connection timed out  |
| ZTS_EHOSTUNREACH | 113|  No route to host  |
| ZTS_EALREADY | 114|  Operation already in progress  |
| ZTS_EINPROGRESS | 115|  Operation now in progress  |




### enum zts_network_status_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_NETWORK_STATUS_REQUESTING_CONFIGURATION | 0|  Waiting for network configuration (also means revision == 0)  |
| ZTS_NETWORK_STATUS_OK | 1|  Configuration received and we are authorized  |
| ZTS_NETWORK_STATUS_ACCESS_DENIED | 2|  Netconf master told us 'nope'  |
| ZTS_NETWORK_STATUS_NOT_FOUND | 3|  Netconf master exists, but this virtual network does not  |
| ZTS_NETWORK_STATUS_PORT_ERROR | 4|  Initialization of network failed or other internal error  |
| ZTS_NETWORK_STATUS_CLIENT_TOO_OLD | 5|  ZeroTier core version too old  |




Virtual network status codes 


### enum zts_net_info_type_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_NETWORK_TYPE_PRIVATE | 0|  Private networks are authorized via certificates of membership  |
| ZTS_NETWORK_TYPE_PUBLIC | 1|  Public networks have no access control &ndash; they'll always be AUTHORIZED  |




Virtual network type codes 


### enum zts_peer_role_t

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZTS_PEER_ROLE_LEAF | 0|  Ordinary node  |
| ZTS_PEER_ROLE_MOON | 1|  Moon root  |
| ZTS_PEER_ROLE_PLANET | 2|  Planetary root  |




The peer's trust hierarchy role 


### typedef zts_socklen_t

```cpp
typedef uint32_t zts_socklen_t;
```


### typedef zts_in_addr_t

```cpp
typedef uint32_t zts_in_addr_t;
```


### typedef zts_in_port_t

```cpp
typedef uint16_t zts_in_port_t;
```


### typedef zts_sa_family_t

```cpp
typedef uint8_t zts_sa_family_t;
```


### typedef zts_ip_mreq

```cpp
typedef struct zts_ip_mreq zts_ip_mreq;
```


### typedef zts_ipv6_mreq

```cpp
typedef struct zts_ipv6_mreq zts_ipv6_mreq;
```


### typedef zts_fd_set

```cpp
typedef struct zts_fd_set zts_fd_set;
```


### typedef zts_timeval

```cpp
typedef struct zts_timeval zts_timeval;
```


### typedef zts_nfds_t

```cpp
typedef unsigned int zts_nfds_t;
```


### typedef zts_ip_addr

```cpp
typedef struct zts_ip_addr zts_ip_addr;
```


A union struct for both IP version's addresses. ATTENTION: watch out for its size when adding IPv6 address scope! 



## Functions Documentation

### function zts_id_new

```cpp
int zts_id_new(
    char * key,
    unsigned int * key_buf_len
)
```

Generates a node identity (public/secret key-pair) and stores it in a user-provided buffer. 

**Parameters**: 

  * **key** User-provided destination buffer 
  * **key_buf_len** Length of user-provided destination buffer. Will be set to the number of bytes copied. 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_id_pair_is_valid

```cpp
int zts_id_pair_is_valid(
    const char * key,
    unsigned int len
)
```

Verifies that a key-pair is valid. Checks formatting and pairing of key to address. 

**Parameters**: 

  * **key** Buffer containing key-pair 
  * **len** Length of key-pair buffer 


**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_init_from_storage

```cpp
int zts_init_from_storage(
    const char * path
)
```

Instruct ZeroTier to look for node identity files at the given location. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **port** Path Null-terminated file-system path string 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

Note that calling this function is not mandatory and if it is not called the node's keys will be kept in memory and retrievable via <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_id_pair">zts\_node\_get\_id\_pair()                  </a></code>.

See also: <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_memory">zts\_init\_from\_memory()                   </a></code>


### function zts_init_from_memory

```cpp
int zts_init_from_memory(
    const char * key,
    unsigned int len
)
```

Instruct ZeroTier to use the identity provided in <code>key</code>. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **key** Path Null-terminated file-system path string 
  * **len** Length of <code>key</code> buffer 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

Note that calling this function is not mandatory and if it is not called the node's keys will be kept in memory and retrievable via <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_id_pair">zts\_node\_get\_id\_pair()                  </a></code>.

See also: <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code>


### function zts_init_set_event_handler

```cpp
int zts_init_set_event_handler(
    void(*)(void *) callback
)
```

Set the event handler function. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **callback** A function pointer to the event handler function 
  * **family** <code>ZTS\_AF\_INET         </code>, or <code>ZTS\_AF\_INET6          </code>


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_blacklist_if

```cpp
int zts_init_blacklist_if(
    const char * prefix,
    unsigned int len
)
```

Blacklist an interface prefix (or name). This prevents ZeroTier from sending traffic over matching interfaces. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **prefix** Null-terminated interface prefix string 
  * **len** Length of prefix string 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_set_roots

```cpp
int zts_init_set_roots(
    const void * roots_data,
    unsigned int len
)
```

Present a root set definition for ZeroTier to use instead of the default. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **roots_data** Array of roots definition data (binary) 
  * **len** Length of binary data 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_set_port

```cpp
int zts_init_set_port(
    unsigned short port
)
```

Set the port to which the node should bind. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **port** Port number 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_set_random_port_range

```cpp
int zts_init_set_random_port_range(
    unsigned short start_port,
    unsigned short end_port
)
```

Set range that random ports will be selected from. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **start_port** Start of port range 
  * **end_port** End of port range 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_allow_secondary_port

```cpp
int zts_init_allow_secondary_port(
    unsigned int allowed
)
```

Allow or disallow ZeroTier from automatically selecting a backup port to help get through buggy NAT. This is enabled by default. This port is randomly chosen and should be disabled if you want to control exactly which ports ZeroTier talks on and (iff) you know with absolute certainty that traffic on your chosen primary port is allowed. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **port** Port number 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_allow_port_mapping

```cpp
int zts_init_allow_port_mapping(
    unsigned int allowed
)
```

Allow or disallow the use of port-mapping. This is enabled by default. This is an initialization function that can only be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **port** Port number 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_allow_net_cache

```cpp
int zts_init_allow_net_cache(
    unsigned int allowed
)
```

Enable or disable whether the node will cache network details (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **enabled** Whether or not this feature is enabled 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

This can potentially shorten (startup) times between node restarts. This allows the service to nearly instantly inform the network stack of an address to use for this peer so that it can create a transport service. This can be disabled for cases where one may not want network config details to be written to storage. This is especially useful for situations where address assignments do not change often.

See also: <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_peer_cache">zts\_init\_allow\_peer\_cache()                       </a></code>


### function zts_init_allow_peer_cache

```cpp
int zts_init_allow_peer_cache(
    unsigned int allowed
)
```

Enable or disable whether the node will cache peer details (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **enabled** Whether or not this feature is enabled 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

This can potentially shorten (connection) times between node restarts. This allows the service to re-use previously discovered paths to a peer, this prevents the service from having to go through the entire transport-triggered link provisioning process. This is especially useful for situations where paths to peers do not change often. This is enabled by default and can be disabled for cases where one may not want peer details to be written to storage.

See also: <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_allow_net_cache">zts\_init\_allow\_net\_cache()                      </a></code>


### function zts_init_allow_roots_cache

```cpp
int zts_init_allow_roots_cache(
    unsigned int allowed
)
```

Enable or disable whether the node will cache root definitions (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **enabled** Whether or not this feature is enabled 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_init_allow_id_cache

```cpp
int zts_init_allow_id_cache(
    unsigned int allowed
)
```

Enable or disable whether the node will cache identities (enabled by default when <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> is used.) Must be called before <code><a href="">zts\_node\_start()              </a></code>. 

**Parameters**: 

  * **enabled** Whether or not this feature is enabled 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_addr_is_assigned

```cpp
int zts_addr_is_assigned(
    uint64_t net_id,
    unsigned int family
)
```

Return whether an address of the given family has been assigned by the network. 

**Parameters**: 

  * **net_id** Network ID 
  * **family** <code>ZTS\_AF\_INET         </code>, or <code>ZTS\_AF\_INET6          </code>


**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_addr_get

```cpp
int zts_addr_get(
    uint64_t net_id,
    unsigned int family,
    struct zts_sockaddr_storage * addr
)
```

Get the first-assigned IP on the given network. 

**Parameters**: 

  * **net_id** Network ID 
  * **family** <code>ZTS\_AF\_INET         </code>, or <code>ZTS\_AF\_INET6          </code>
  * **addr** Destination buffer to hold address 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

To get _all_ assigned addresses on a given network, use <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_get_all">zts\_addr\_get\_all()               </a></code>.


### function zts_addr_get_str

```cpp
int zts_addr_get_str(
    uint64_t net_id,
    unsigned int family,
    char * dst,
    unsigned int len
)
```

Get the first-assigned IP on the given network as a null-terminated human-readable string. 

**Parameters**: 

  * **net_id** Network ID 
  * **family** <code>ZTS\_AF\_INET         </code>, or <code>ZTS\_AF\_INET6          </code>
  * **dst** Destination buffer 
  * **len** Length of destination buffer (must be exactly <code>ZTS\_IP\_MAX\_STR\_LEN              </code>) 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

To get _all_ assigned addresses on a given network, use <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_addr_get_all">zts\_addr\_get\_all()               </a></code>.


### function zts_addr_get_all

```cpp
int zts_addr_get_all(
    uint64_t net_id,
    struct zts_sockaddr_storage * addr,
    unsigned int * count
)
```

Get all IP addresses assigned to this node by the given network. 

**Parameters**: 

  * **net_id** Network ID 
  * **addr** Destination buffer to hold address 
  * **count** Number of addresses returned 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_addr_compute_6plane

```cpp
int zts_addr_compute_6plane(
    const uint64_t net_id,
    const uint64_t node_id,
    struct zts_sockaddr_storage * addr
)
```

Compute a <code>6PLANE</code> IPv6 address for the given Network ID and Node ID. 

**Parameters**: 

  * **net_id** Network ID 
  * **node_id** Node ID 
  * **addr** Destination structure for address 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_addr_compute_rfc4193

```cpp
int zts_addr_compute_rfc4193(
    const uint64_t net_id,
    const uint64_t node_id,
    struct zts_sockaddr_storage * addr
)
```

Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID. 

**Parameters**: 

  * **net_id** Network ID 
  * **node_id** Node ID 
  * **addr** Destination structure for address 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_addr_compute_rfc4193_str

```cpp
int zts_addr_compute_rfc4193_str(
    uint64_t net_id,
    uint64_t node_id,
    char * dst,
    unsigned int len
)
```

Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID and copy its null-terminated human-readable string representation into destination buffer. 

**Parameters**: 

  * **net_id** Network ID 
  * **node_id** Node ID 
  * **dst** Destination string buffer 
  * **len** Length of destination string buffer (must be exactly <code>ZTS\_IP\_MAX\_STR\_LEN              </code>) 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_addr_compute_6plane_str

```cpp
int zts_addr_compute_6plane_str(
    uint64_t net_id,
    uint64_t node_id,
    char * dst,
    unsigned int len
)
```

Compute <code>6PLANE</code> IPv6 address for the given Network ID and Node ID and copy its null-terminated human-readable string representation into destination buffer. 

**Parameters**: 

  * **net_id** Network ID 
  * **node_id** Node ID 
  * **dst** Destination string buffer 
  * **len** Length of destination string buffer (must be exactly <code>ZTS\_IP\_MAX\_STR\_LEN              </code>) 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_net_compute_adhoc_id

```cpp
uint64_t zts_net_compute_adhoc_id(
    uint16_t start_port,
    uint16_t end_port
)
```

Compute <code>RFC4193</code> IPv6 address for the given Network ID and Node ID. 

**Parameters**: 

  * **start_port** Start of port allowed port range 
  * **end_port** End of allowed port range 


**Return**: An Ad-hoc network ID 

Ad-hoc Network: 

```cpp
ffSSSSEEEE000000
| |   |   |
| |   |   Reserved for future use, must be 0
| |   End of port range (hex)
| Start of port range (hex)
Reserved ZeroTier address prefix indicating a controller-less network.
```

 Ad-hoc networks are public (no access control) networks that have no network controller. Instead their configuration and other credentials are generated locally. Ad-hoc networks permit only IPv6 UDP and TCP unicast traffic (no multicast or broadcast) using 6plane format NDP-emulated IPv6 addresses. In addition an ad-hoc network ID encodes an IP port range. UDP packets and TCP SYN (connection open) packets are only allowed to destination ports within the encoded range.

For example <code>ff00160016000000</code> is an ad-hoc network allowing only SSH, while <code>ff0000ffff000000</code> is an ad-hoc network allowing any UDP or TCP port.

Keep in mind that these networks are public and anyone in the entire world can join them. Care must be taken to avoid exposing vulnerable services or sharing unwanted files or other resources.


### function zts_net_join

```cpp
int zts_net_join(
    uint64_t net_id
)
```

Join a network. 

**Parameters**: 

  * **net_id** Network ID 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_net_leave

```cpp
int zts_net_leave(
    uint64_t net_id
)
```

Leave a network. 

**Parameters**: 

  * **net_id** Network ID 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_net_transport_is_ready

```cpp
int zts_net_transport_is_ready(
    const uint64_t net_id
)
```

Return whether this network is ready to send and receive traffic. 

**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_net_get_mac

```cpp
uint64_t zts_net_get_mac(
    uint64_t net_id
)
```

Get the MAC Address for this node on the given network. 

**Parameters**: 

  * **net_id** Network ID


**Return**: MAC address in numerical format 

### function zts_net_get_mac_str

```cpp
int zts_net_get_mac_str(
    uint64_t net_id,
    char * dst,
    unsigned int len
)
```

Get the MAC Address for this node on the given network. 

**Parameters**: 

  * **net_id** Network ID 
  * **dst** Destination string buffer 
  * **len** Length of destination string buffer. Must be exactly <code>ZTS\_MAC\_ADDRSTRLEN                </code>


**Return**: MAC address in string format 

### function zts_net_get_broadcast

```cpp
int zts_net_get_broadcast(
    uint64_t net_id
)
```

Return whether broadcast is enabled on this network. 

**Parameters**: 

  * **net_id** Network ID


**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_net_get_mtu

```cpp
int zts_net_get_mtu(
    uint64_t net_id
)
```

Get the MTU of the given network. 

**Parameters**: 

  * **net_id** Network ID


**Return**: MTU 

### function zts_net_get_name

```cpp
int zts_net_get_name(
    uint64_t net_id,
    char * dst,
    unsigned int len
)
```

Get the nickname of the network. 

**Parameters**: 

  * **net_id** Network ID 
  * **dst** Destination string buffer 
  * **len** Length of destination string buffer


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_net_get_status

```cpp
int zts_net_get_status(
    uint64_t net_id
)
```

Get the status of the network. 

**Parameters**: 

  * **net_id** Network ID


**Return**: Status 

### function zts_net_get_type

```cpp
int zts_net_get_type(
    uint64_t net_id
)
```

Get the type of network (public or private.) 

**Parameters**: 

  * **net_id** Network ID


**Return**: Type 

### function zts_route_is_assigned

```cpp
int zts_route_is_assigned(
    uint64_t net_id,
    unsigned int family
)
```

Return whether a managed route of the given address family has been assigned by the network. 

**Parameters**: 

  * **net_id** Network ID 
  * **family** <code>ZTS\_AF\_INET         </code>, or <code>ZTS\_AF\_INET6          </code>


**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_node_start

```cpp
int zts_node_start()
```

Start the ZeroTier node. Should be called after calling the relevant <code>zts\_init\_\*       </code> functions for your application. To enable storage call <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> before this function. To enable event callbacks call <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_set_event_handler">zts\_init\_set\_event\_handler()                        </a></code> before this function. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem. 

Note: If neither <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_storage">zts\_init\_from\_storage()                    </a></code> or <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_init_from_memory">zts\_init\_from\_memory()                   </a></code> are called a new identity will be generated and will be retrievable via <code><a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_node_get_id_pair">zts\_node\_get\_id\_pair()                  </a></code>_after_ the node has started.


### function zts_node_is_online

```cpp
int zts_node_is_online()
```

Return whether the node is online (Can reach the Internet) 

**Return**: <code>1</code> if true, <code>0</code> if false. 

### function zts_node_get_id

```cpp
uint64_t zts_node_get_id()
```

Get the public node identity (aka <code>node\_id      </code>). Callable only after the node has been started. 

**Return**: Identity in numerical form 

### function zts_node_get_id_pair

```cpp
int zts_node_get_id_pair(
    char * key,
    unsigned int * key_dst_len
)
```

Copy the current node's public (and secret!) identity into a buffer. 

**Parameters**: 

  * **key** User-provided destination buffer 
  * **key_dst_len** Length of user-provided destination buffer. Will be set to number of bytes copied. 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

<code>WARNING</code>: This function exports your secret key and should be used carefully.


### function zts_node_get_port

```cpp
int zts_node_get_port()
```

Get the primary port to which the node is bound. Callable only after the node has been started. 

**Return**: Port number 

### function zts_node_stop

```cpp
int zts_node_stop()
```

Stop the ZeroTier node and bring down all virtual network transport services. Callable only after the node has been started. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem. 

While the ZeroTier will stop, the stack driver (with associated timers) will remain active in case future traffic processing is required. To stop all activity and free all resources use <code>zts\_free()         </code> instead.


### function zts_node_free

```cpp
int zts_node_free()
```

Stop all background threads, bring down all transport services, free all resources. After calling this function an application restart will be required before the library can be used again. Callable only after the node has been started. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem. 

This should be called at the end of your program or when you do not anticipate communicating over ZeroTier again.


### function zts_moon_orbit

```cpp
int zts_moon_orbit(
    uint64_t moon_roots_id,
    uint64_t moon_seed
)
```

Orbit a given moon (user-defined root server) 

**Parameters**: 

  * **moon_roots_id** World ID 
  * **moon_seed** Seed ID 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_moon_deorbit

```cpp
int zts_moon_deorbit(
    uint64_t moon_roots_id
)
```

De-orbit a given moon (user-defined root server) 

**Parameters**: 

  * **moon_roots_id** World ID 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. 

### function zts_stats_get_all

```cpp
int zts_stats_get_all(
    zts_stats_counter_t * dst
)
```

Get all statistical counters for all protocols and levels. See also: lwip/stats.h. 

**Parameters**: 

  * **dst** Pointer to structure that will be populated with statistics


**Return**: ZTS_ERR_OK on success. ZTS_ERR_ARG or ZTS_ERR_NO_RESULT on failure. 

This function can only be used in debug builds.


### function zts_bsd_socket

```cpp
int zts_bsd_socket(
    int family,
    int type,
    int protocol
)
```

Create a socket. 

**Parameters**: 

  * **family** <code>ZTS\_AF\_INET         </code> or <code>ZTS\_AF\_INET6          </code>
  * **type** <code>ZTS\_SOCK\_STREAM             </code> or <code>ZTS\_SOCK\_DGRAM            </code>
  * **protocol** Protocols supported on this socket 


**Return**: Numbered file descriptor on success, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_connect

```cpp
int zts_bsd_connect(
    int fd,
    const struct zts_sockaddr * addr,
    zts_socklen_t addrlen
)
```

Connect a socket to a remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **addr** Remote host address to connect to 
  * **addrlen** Length of address 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_bind

```cpp
int zts_bsd_bind(
    int fd,
    const struct zts_sockaddr * addr,
    zts_socklen_t addrlen
)
```

Bind a socket to a local address. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **addr** Local interface address to bind to 
  * **addrlen** Length of address 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_listen

```cpp
int zts_bsd_listen(
    int fd,
    int backlog
)
```

Listen for incoming connections on socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **backlog** Number of backlogged connections allowed 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_accept

```cpp
int zts_bsd_accept(
    int fd,
    struct zts_sockaddr * addr,
    zts_socklen_t * addrlen
)
```

Accept an incoming connection. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **addr** Address of remote host for accepted connection 
  * **addrlen** Length of address 


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_setsockopt

```cpp
int zts_bsd_setsockopt(
    int fd,
    int level,
    int optname,
    const void * optval,
    zts_socklen_t optlen
)
```

Set socket options. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **level** Protocol level to which option name should apply 
  * **optname** Option name to set 
  * **optval** Source of option value to set 
  * **optlen** Length of option value 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_getsockopt

```cpp
int zts_bsd_getsockopt(
    int fd,
    int level,
    int optname,
    void * optval,
    zts_socklen_t * optlen
)
```

Get socket options. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **level** Protocol level to which option name should apply 
  * **optname** Option name to get 
  * **optval** Where option value will be stored 
  * **optlen** Length of value 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_getsockname

```cpp
int zts_bsd_getsockname(
    int fd,
    struct zts_sockaddr * addr,
    zts_socklen_t * addrlen
)
```

Get the name (address) of the local end of the socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **addr** Name associated with this socket 
  * **addrlen** Length of name 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_getpeername

```cpp
int zts_bsd_getpeername(
    int fd,
    struct zts_sockaddr * addr,
    zts_socklen_t * addrlen
)
```

Get the name (address) of the remote end of the socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **addr** Name associated with remote end of this socket 
  * **addrlen** Length of name 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_close

```cpp
int zts_bsd_close(
    int fd
)
```

Close socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_select

```cpp
int zts_bsd_select(
    int nfds,
    zts_fd_set * readfds,
    zts_fd_set * writefds,
    zts_fd_set * exceptfds,
    struct zts_timeval * timeout
)
```

Monitor multiple file descriptors for "readiness". 

**Parameters**: 

  * **nfds** Set to the highest numbered file descriptor in any of the given sets 
  * **readfds** Set of file descriptors to monitor for READ readiness 
  * **writefds** Set of file descriptors to monitor for WRITE readiness 
  * **exceptfds** Set of file descriptors to monitor for exceptional conditions 
  * **timeout** How long this call should block 


**Return**: Number of ready file descriptors on success. <code>ZTS\_ERR\_SOCKET            </code>, <code>ZTS\_ERR\_SERVICE             </code> on failure. Sets <code>zts\_errno        </code>

### function zts_bsd_fcntl

```cpp
int zts_bsd_fcntl(
    int fd,
    int cmd,
    int flags
)
```

Issue file control commands on a socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **cmd** Operation to be performed 
  * **flags** Flags 


**Return**: 

### function zts_bsd_poll

```cpp
int zts_bsd_poll(
    struct zts_pollfd * fds,
    zts_nfds_t nfds,
    int timeout
)
```

Wait for some event on a file descriptor. 

**Parameters**: 

  * **fds** Set of file descriptors to monitor 
  * **nfds** Number of elements in the fds array 
  * **timeout** How long this call should block 


**Return**: Number of ready file descriptors if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_ioctl

```cpp
int zts_bsd_ioctl(
    int fd,
    unsigned long request,
    void * argp
)
```

Control a device. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **request** Selects the control function to be performed 
  * **argp** Additional information 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_send

```cpp
ssize_t zts_bsd_send(
    int fd,
    const void * buf,
    size_t len,
    int flags
)
```

Send data to remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data to write 
  * **flags** (e.g. <code>ZTS\_MSG\_DONTWAIT              </code>, <code>ZTS\_MSG\_MORE          </code>) 


**Return**: Number of bytes sent if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_sendto

```cpp
ssize_t zts_bsd_sendto(
    int fd,
    const void * buf,
    size_t len,
    int flags,
    const struct zts_sockaddr * addr,
    zts_socklen_t addrlen
)
```

Send data to remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data to write 
  * **flags** Specifies type of message transmission 
  * **addr** Destination address 
  * **addrlen** Length of destination address 


**Return**: Number of bytes sent if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_sendmsg

```cpp
ssize_t zts_bsd_sendmsg(
    int fd,
    const struct zts_msghdr * msg,
    int flags
)
```

Send message to remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **msg** Message to send 
  * **flags** Specifies type of message transmission 


**Return**: Number of bytes sent if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_recv

```cpp
ssize_t zts_bsd_recv(
    int fd,
    void * buf,
    size_t len,
    int flags
)
```

Receive data from remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data buffer 
  * **flags** Specifies the type of message receipt 


**Return**: Number of bytes received if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_recvfrom

```cpp
ssize_t zts_bsd_recvfrom(
    int fd,
    void * buf,
    size_t len,
    int flags,
    struct zts_sockaddr * addr,
    zts_socklen_t * addrlen
)
```

Receive data from remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data buffer 
  * **flags** Specifies the type of message receipt 
  * **addr** Destination address buffer 
  * **addrlen** Length of destination address buffer 


**Return**: Number of bytes received if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_recvmsg

```cpp
ssize_t zts_bsd_recvmsg(
    int fd,
    struct zts_msghdr * msg,
    int flags
)
```

Receive a message from remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **msg** Message that was received 
  * **flags** Specifies the type of message receipt 


**Return**: Number of bytes received if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_read

```cpp
ssize_t zts_bsd_read(
    int fd,
    void * buf,
    size_t len
)
```

Read data from socket onto buffer. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data buffer to receive data 


**Return**: Number of bytes read if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_readv

```cpp
ssize_t zts_bsd_readv(
    int fd,
    const struct zts_iovec * iov,
    int iovcnt
)
```

Read data from socket into multiple buffers. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **iov** Array of destination buffers 
  * **iovcnt** Number of buffers to read into 


**Return**: Number of bytes read if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_write

```cpp
ssize_t zts_bsd_write(
    int fd,
    const void * buf,
    size_t len
)
```

Write data from buffer to socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of buffer to write 


**Return**: Number of bytes written if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_writev

```cpp
ssize_t zts_bsd_writev(
    int fd,
    const struct zts_iovec * iov,
    int iovcnt
)
```

Write data from multiple buffers to socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **iov** Array of source buffers 
  * **iovcnt** Number of buffers to read from 


**Return**: Number of bytes written if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_shutdown

```cpp
int zts_bsd_shutdown(
    int fd,
    int how
)
```

Shut down some aspect of a socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **how** Which aspects of the socket should be shut down. Options are <code>ZTS\_SHUT\_RD         </code>, <code>ZTS\_SHUT\_WR         </code>, or <code>ZTS\_SHUT\_RDWR           </code>. 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_socket

```cpp
int zts_socket(
    int family,
    int type,
    int protocol
)
```

Create a socket. 

**Parameters**: 

  * **family** <code>ZTS\_AF\_INET         </code> or <code>ZTS\_AF\_INET6          </code>
  * **type** <code>ZTS\_SOCK\_STREAM             </code> or <code>ZTS\_SOCK\_DGRAM            </code>
  * **protocol** Protocols supported on this socket 


**Return**: Numbered file descriptor on success, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

A subset (and) extension of the traditional BSD-style socket API that simplifies API wrapper generation and usage in other non-C-like languages. Uses simple integer types instead of bit flags, limit the number of operations each function performs, prevent the user from needing to manipulate the contents of structures in a non-native language.


### function zts_connect

```cpp
int zts_connect(
    int fd,
    const char * ipstr,
    unsigned short port,
    int timeout_ms
)
```

Connect a socket to a remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **ipstr** Human-readable IP string 
  * **port** Port 
  * **timeout_ms** (Approximate) amount of time in milliseconds before connection attempt is aborted. Will block for <code>30 seconds</code> if timeout is set to <code>0</code>.


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SOCKET            </code> if the function times out with no connection made, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

This convenience function exists because ZeroTier uses transport-triggered links. This means that links between peers do not exist until peers try to talk to each other. This can be a problem during connection procedures since some of the initial packets are lost. To alleviate the need to try <code>zts\_bsd\_connect             </code> many times, this function will keep re-trying for you, even if no known routes exist. However, if the socket is set to <code>non-blocking</code> mode it will behave identically to <code>zts\_bsd\_connect             </code> and return immediately upon failure.


### function zts_bind

```cpp
int zts_bind(
    int fd,
    const char * ipstr,
    unsigned short port
)
```

Bind a socket to a local address. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **ipstr** Human-readable IP string 
  * **port** Port 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_listen

```cpp
int zts_listen(
    int fd,
    int backlog
)
```

Listen for incoming connections on socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **backlog** Number of backlogged connections allowed 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_accept

```cpp
int zts_accept(
    int fd,
    char * remote_addr,
    int len,
    unsigned short * port
)
```

Accept an incoming connection. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **remote_addr** Buffer that will receive remote host IP string 
  * **len** Size of buffer that will receive remote host IP string (must be exactly <code>ZTS\_IP\_MAX\_STR\_LEN              </code>) 
  * **port** Port number of the newly connected remote host (value-result) 


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_send

```cpp
ssize_t zts_send(
    int fd,
    const void * buf,
    size_t len,
    int flags
)
```

Send data to remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data to write 
  * **flags** (e.g. <code>ZTS\_MSG\_DONTWAIT              </code>, <code>ZTS\_MSG\_MORE          </code>) 


**Return**: Number of bytes sent if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_recv

```cpp
ssize_t zts_recv(
    int fd,
    void * buf,
    size_t len,
    int flags
)
```

Receive data from remote host. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data buffer 
  * **flags** Specifies the type of message receipt 


**Return**: Number of bytes received if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_read

```cpp
ssize_t zts_read(
    int fd,
    void * buf,
    size_t len
)
```

Read data from socket onto buffer. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of data buffer to receive data 


**Return**: Number of bytes read if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_write

```cpp
ssize_t zts_write(
    int fd,
    const void * buf,
    size_t len
)
```

Write data from buffer to socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **buf** Pointer to data buffer 
  * **len** Length of buffer to write 


**Return**: Number of bytes written if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_shutdown_rd

```cpp
int zts_shutdown_rd(
    int fd
)
```

Shut down <code>read</code> aspect of a socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_shutdown_wr

```cpp
int zts_shutdown_wr(
    int fd
)
```

Shut down <code>write</code> aspect of a socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_shutdown_rdwr

```cpp
int zts_shutdown_rdwr(
    int fd
)
```

Shut down both <code>read</code> and <code>write</code> aspect of a socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_close

```cpp
int zts_close(
    int fd
)
```

Close socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_getpeername

```cpp
int zts_getpeername(
    int fd,
    char * remote_addr_str,
    int len,
    unsigned short * port
)
```

Get the name (address) of the remote end of the socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **remote_addr_str** Destination buffer to contain name (address) of the remote end of the socket 
  * **len** Length of destination buffer 
  * **port** Value-result parameter that will contain resultant port number 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_getsockname

```cpp
int zts_getsockname(
    int fd,
    char * local_addr_str,
    int len,
    unsigned short * port
)
```

Get the name (address) of the local end of the socket. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **local_addr_str** Destination buffer to contain name (address) of the local end of the socket 
  * **len** Length of destination buffer 
  * **port** Value-result parameter that will contain resultant port number 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_tcp_client

```cpp
int zts_tcp_client(
    const char * remote_ipstr,
    unsigned short remote_port
)
```

A convenience function that takes a remote address IP string and creates the appropriate type of socket, and uses it to connect to a remote host. 

**Parameters**: 

  * **remote_ipstr** Remote address string. IPv4 or IPv6 
  * **remote_port** Port to


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_tcp_server

```cpp
int zts_tcp_server(
    const char * local_ipstr,
    unsigned short local_port,
    char * remote_ipstr,
    int len,
    unsigned short * remote_port
)
```

A convenience function that takes a remote address IP string and creates the appropriate type of socket, binds, listens, and then accepts on it. 

**Parameters**: 

  * **local_ipstr** Local address to bind 
  * **local_port** Local port to bind 
  * **remote_ipstr** String-format IP address of newly connected remote host 
  * **len** Length of <code>remote\_ipstr           </code>
  * **remote_port** Port of remote host


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_udp_server

```cpp
int zts_udp_server(
    const char * local_ipstr,
    unsigned short local_port
)
```

A convenience function that takes a remote address IP string and creates the appropriate type of socket, and binds to it. 

**Parameters**: 

  * **local_ipstr** Local address to bind 
  * **local_port** Local port to bind


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_udp_client

```cpp
int zts_udp_client(
    const char * remote_ipstr
)
```

This function doesn't really do anything other than be a namespace counterpart to <code>zts\_udp\_server            </code>. All this function does is create a <code>ZTS\_SOCK\_DGRAM            </code> socket and return its file descriptor. 

**Parameters**: 

  * **remote_ipstr** Remote address string. IPv4 or IPv6


**Return**: New file descriptor if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_no_delay

```cpp
int zts_set_no_delay(
    int fd,
    int enabled
)
```

Enable or disable <code>TCP\_NODELAY          </code>. Enabling this is equivalent to turning off Nagle's algorithm. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **enabled** <code>[0, 1]</code> integer value 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_last_socket_error

```cpp
int zts_get_last_socket_error(
    int fd
)
```

Get the last error for the given socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Error number defined in <code>zts\_errno\_t         </code>. <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_data_available

```cpp
size_t zts_get_data_available(
    int fd
)
```

Return amount of data available to read from socket. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Number of bytes available to read. <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_no_delay

```cpp
int zts_get_no_delay(
    int fd
)
```

Return whether <code>TCP\_NODELAY          </code> is enabled. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>1</code> if enabled, <code>0</code> if disabled, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_linger

```cpp
int zts_set_linger(
    int fd,
    int enabled,
    int value
)
```

Enable or disable <code>SO\_LINGER        </code> while also setting its value. 

**Parameters**: 

  * **fd** Socket file descriptor 
  * **enabled** <code>[0, 1]</code> integer value 
  * **value** How long socket should linger 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_linger_enabled

```cpp
int zts_get_linger_enabled(
    int fd
)
```

Return whether <code>SO\_LINGER        </code> is enabled. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>1</code> if enabled, <code>0</code> if disabled, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_linger_value

```cpp
int zts_get_linger_value(
    int fd
)
```

Return the value of <code>SO\_LINGER        </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>SO\_LINGER        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_pending_data_size

```cpp
int zts_get_pending_data_size(
    int fd
)
```

Return the number of bytes available to read from the network buffer. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Number of bytes to read if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_reuse_addr

```cpp
int zts_set_reuse_addr(
    int fd,
    int enabled
)
```

Enable or disable <code>SO\_REUSEADDR           </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **enabled** <code>[0, 1]</code> integer value 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_reuse_addr

```cpp
int zts_get_reuse_addr(
    int fd
)
```

Return whether <code>SO\_REUSEADDR           </code> is enabled. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>1</code> if enabled, <code>0</code> if disabled, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_recv_timeout

```cpp
int zts_set_recv_timeout(
    int fd,
    int seconds,
    int microseconds
)
```

Set the value of <code>SO\_RCVTIMEO          </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **seconds** Number of seconds for timeout 
  * **microseconds** Number of microseconds for timeout 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_recv_timeout

```cpp
int zts_get_recv_timeout(
    int fd
)
```

Return the value of <code>SO\_RCVTIMEO          </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>SO\_RCVTIMEO          </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_send_timeout

```cpp
int zts_set_send_timeout(
    int fd,
    int seconds,
    int microseconds
)
```

Set the value of <code>SO\_SNDTIMEO          </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **seconds** Number of seconds for timeout 
  * **microseconds** Number of microseconds for timeout 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_send_timeout

```cpp
int zts_get_send_timeout(
    int fd
)
```

Return the value of <code>SO\_SNDTIMEO          </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>SO\_SNDTIMEO          </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_send_buf_size

```cpp
int zts_set_send_buf_size(
    int fd,
    int size
)
```

Set the value of <code>SO\_SNDBUF        </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **size** Size of buffer 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_send_buf_size

```cpp
int zts_get_send_buf_size(
    int fd
)
```

Return the value of <code>SO\_SNDBUF        </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>SO\_SNDBUF        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_recv_buf_size

```cpp
int zts_set_recv_buf_size(
    int fd,
    int size
)
```

Set the value of <code>SO\_RCVBUF        </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **size** Size of buffer 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_recv_buf_size

```cpp
int zts_get_recv_buf_size(
    int fd
)
```

Return the value of <code>SO\_RCVBUF        </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>SO\_RCVBUF        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_ttl

```cpp
int zts_set_ttl(
    int fd,
    int ttl
)
```

Set the value of <code>IP\_TTL     </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **ttl** Value of <code>IP\_TTL     </code>


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_ttl

```cpp
int zts_get_ttl(
    int fd
)
```

Return the value of <code>IP\_TTL     </code>

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: Value of <code>IP\_TTL     </code><code>[0,255]</code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_blocking

```cpp
int zts_set_blocking(
    int fd,
    int enabled
)
```

Change blocking behavior <code>O\_NONBLOCK         </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **enabled** <code>[0, 1]</code> integer value, <code>1</code> maintains default behavior, <code>0</code> sets to non-blocking mode 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_blocking

```cpp
int zts_get_blocking(
    int fd
)
```

Return whether blocking mode <code>O\_NONBLOCK         </code> is enabled. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>1</code> if enabled, <code>0</code> if disabled, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_set_keepalive

```cpp
int zts_set_keepalive(
    int fd,
    int enabled
)
```

Enable or disable <code>SO\_KEEPALIVE           </code>

**Parameters**: 

  * **fd** Socket file descriptor 
  * **enabled** <code>[0, 1]</code> integer value 


**Return**: <code>ZTS\_ERR\_OK        </code> if successful, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_get_keepalive

```cpp
int zts_get_keepalive(
    int fd
)
```

Return whether <code>SO\_KEEPALIVE           </code> is enabled. 

**Parameters**: 

  * **fd** Socket file descriptor 


**Return**: <code>1</code> if enabled, <code>0</code> if disabled, <code>ZTS\_ERR\_SERVICE             </code> if the node experiences a problem, <code>ZTS\_ERR\_ARG         </code> if invalid argument. Sets <code>zts\_errno        </code>

### function zts_bsd_gethostbyname

```cpp
struct zts_hostent * zts_bsd_gethostbyname(
    const char * name
)
```

Resolve a host-name. 

**Parameters**: 

  * **name** A null-terminated string representing the name of the host 


**Return**: Pointer to struct zts_hostent if successful, NULL otherwise 

### function zts_dns_set_server

```cpp
int zts_dns_set_server(
    uint8_t index,
    const zts_ip_addr * addr
)
```


**Parameters**: 

  * **index** the index of the DNS server to set must be <code>&lt; DNS\_MAX\_SERVERS               </code>
  * **addr** IP address of the DNS server to set 


Initialize one of the DNS servers.


### function zts_dns_get_server

```cpp
const zts_ip_addr * zts_dns_get_server(
    uint8_t index
)
```


**Parameters**: 

  * **index** the index of the DNS server 


**Return**: IP address of the indexed DNS server or <code>ip\_addr\_any         </code> if the DNS server has not been configured. 

Obtain one of the currently configured DNS server.


### function zts_core_lock_obtain

```cpp
int zts_core_lock_obtain()
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing.


### function zts_core_lock_release

```cpp
int zts_core_lock_release()
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing.


### function zts_core_query_addr_count

```cpp
int zts_core_query_addr_count(
    uint64_t net_id
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_addr

```cpp
int zts_core_query_addr(
    uint64_t net_id,
    unsigned int idx,
    char * addr,
    unsigned int len
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_route_count

```cpp
int zts_core_query_route_count(
    uint64_t net_id
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_route

```cpp
int zts_core_query_route(
    uint64_t net_id,
    unsigned int idx,
    char * target,
    char * via,
    unsigned int len,
    uint16_t * flags,
    uint16_t * metric
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_path_count

```cpp
int zts_core_query_path_count(
    uint64_t peer_id
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_path

```cpp
int zts_core_query_path(
    uint64_t peer_id,
    unsigned int idx,
    char * dst,
    unsigned int len
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_mc_count

```cpp
int zts_core_query_mc_count(
    uint64_t net_id
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_core_query_mc

```cpp
int zts_core_query_mc(
    uint64_t net_id,
    unsigned int idx,
    uint64_t * mac,
    uint32_t * adi
)
```

Lock the core service so that queries about addresses, routes, paths, etc. can be performed. 

**Return**: <code>ZTS\_ERR\_OK        </code> if successful. <code>ZTS\_ERR\_SERVICE             </code> if the core service is unavailable. 

Notice: Core locking functions are intended to be used by high-level language wrappers. Only lock the core if you know _exactly_ what you are doing. <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_obtain">zts_core_lock_obtain()</a> and <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#function-zts_core_lock_release">zts_core_lock_release()</a> must be called before and after this function.


### function zts_util_sign_root_set

```cpp
int zts_util_sign_root_set(
    char * roots_out,
    unsigned int * roots_len,
    char * prev_key,
    unsigned int * prev_key_len,
    char * curr_key,
    unsigned int * curr_key_len,
    uint64_t id,
    uint64_t ts,
    zts_root_set_t * roots_spec
)
```

Generates a new root set definition. 

**Parameters**: 

  * **roots_id** The desired World ID (arbitrary) 
  * **ts** Timestamp indicating when this generation took place 


### function zts_util_delay

```cpp
void zts_util_delay(
    unsigned long milliseconds
)
```

Platform-agnostic delay. 

**Parameters**: 

  * **milliseconds** How long to delay 


### function zts_util_get_ip_family

```cpp
int zts_util_get_ip_family(
    const char * ipstr
)
```

Return the family type of the IP string. 

**Parameters**: 

  * **ipstr** Either IPv4 or IPv6 string 


**Return**: Either <code>ZTS\_AF\_INET         </code> or <code>ZTS\_AF\_INET6          </code>

### function zts_util_ipstr_to_saddr

```cpp
int zts_util_ipstr_to_saddr(
    const char * src_ipstr,
    unsigned short port,
    struct zts_sockaddr * dstaddr,
    zts_socklen_t * addrlen
)
```


**Parameters**: 

  * **src_ipstr** Source IP string 
  * **port** Port 
  * **dstaddr** Pointer to destination structure <code><a href="/autogen/libzt/classes/structzts__sockaddr__in.md">zts\_sockaddr\_in             </a></code> or <code><a href="/autogen/libzt/classes/structzts__sockaddr__in6.md">zts\_sockaddr\_in6              </a></code>
  * **addrlen** Size of destination structure. Value-result: Will be set to actual size of data available 


**Return**: return <code>ZTS\_ERR\_OK        </code> on success, <code>ZTS\_ERR\_ARG         </code> if invalid argument 

Convert human-friendly IP string to <code><a href="/autogen/libzt/classes/structzts__sockaddr__in.md">zts\_sockaddr\_in             </a></code> or <code><a href="/autogen/libzt/classes/structzts__sockaddr__in6.md">zts\_sockaddr\_in6              </a></code>.


### function zts_util_ntop

```cpp
int zts_util_ntop(
    struct zts_sockaddr * addr,
    zts_socklen_t addrlen,
    char * dst_str,
    int len,
    unsigned short * port
)
```

Similar to <code>inet\_ntop        </code> but determines family automatically and returns port as a value result parameter. 

**Parameters**: 

  * **addr** Pointer to address structure 
  * **addrlen** Length of address structure 
  * **dst_str** Destination buffer 
  * **len** Length of destination buffer 
  * **port** Value-result parameter that will contain resultant port number


**Return**: return <code>ZTS\_ERR\_OK        </code> on success, <code>ZTS\_ERR\_ARG         </code> if invalid argument 

### function zts_ipaddr_ntoa

```cpp
char * zts_ipaddr_ntoa(
    const zts_ip_addr * addr
)
```


**Parameters**: 

  * **addr** IP address in network order to convert 


**Return**: Pointer to a global static (!) buffer that holds the <code>ASCII</code> representation of addr 

Convert numeric IP address (both versions) into <code>ASCII</code> representation. returns ptr to static buffer. Not reentrant.


### function zts_ipaddr_aton

```cpp
int zts_ipaddr_aton(
    const char * cp,
    zts_ip_addr * addr
)
```


**Parameters**: 

  * **cp** IP address string to convert 
  * **addr** conversion result is stored here 


**Return**: <code>1</code> on success, <code>0</code> on error 

Convert IP address string (both versions) to numeric. The version is auto-detected from the string.


### function zts_inet_ntop

```cpp
const char * zts_inet_ntop(
    int family,
    const void * src,
    char * dst,
    zts_socklen_t size
)
```


**Parameters**: 

  * **family** Address family: <code>ZTS\_AF\_INET         </code> or <code>ZTS\_AF\_INET6          </code>
  * **src** Pointer to source address structure 
  * **dst** Pointer to destination character array 
  * **size** Size of the destination buffer 


**Return**: On success, returns a non-null pointer to the destination character array 

Convert IPv4 and IPv6 address structures to human-readable text form.


### function zts_inet_pton

```cpp
int zts_inet_pton(
    int family,
    const char * src,
    void * dst
)
```


**Parameters**: 

  * **family** Address family: <code>ZTS\_AF\_INET         </code> or <code>ZTS\_AF\_INET6          </code>
  * **src** Pointer to source character array 
  * **dst** Pointer to destination address structure 


**Return**: return <code>1</code> on success. <code>0</code> or <code>-1</code> on failure. (Does not follow regular <code>zts\_\*   </code> conventions) 

Convert C-string IPv4 and IPv6 addresses to binary form.



## Attributes Documentation

### variable zts_errno

```cpp
int zts_errno;
```


Error variable set after each <code>zts\_\*   </code> socket call. Provides additional error context. 



## Macro Documentation

### define ZTS_MAC_ADDRSTRLEN

```cpp
#define ZTS_MAC_ADDRSTRLEN 18
```


Length of human-readable MAC address string 


### define ZTS_INET_ADDRSTRLEN

```cpp
#define ZTS_INET_ADDRSTRLEN 16
```


Max length of human-readable IPv4 string 


### define ZTS_INET6_ADDRSTRLEN

```cpp
#define ZTS_INET6_ADDRSTRLEN 46
```


Max length of human-readable IPv6 string 


### define ZTS_IP_MAX_STR_LEN

```cpp
#define ZTS_IP_MAX_STR_LEN <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inet6_addrstrlen">ZTS_INET6_ADDRSTRLEN</a>
```


Maximum (and required) length of string buffers used to receive string-format IP addresses from the API. This is set to <code>ZTS\_INET6\_ADDRSTRLEN                  </code> to handle all cases: <code>ZTS\_AF\_INET         </code> and <code>ZTS\_AF\_INET6          </code>


### define ZTS_STORE_DATA_LEN

```cpp
#define ZTS_STORE_DATA_LEN 4096
```


Required buffer length to safely receive data store items 


### define ZTS_MAX_NETWORK_SHORT_NAME_LENGTH

```cpp
#define ZTS_MAX_NETWORK_SHORT_NAME_LENGTH 127
```


Maximum length of network short name 


### define ZTS_MAX_NETWORK_ROUTES

```cpp
#define ZTS_MAX_NETWORK_ROUTES 32
```


Maximum number of pushed routes on a network 


### define ZTS_MAX_ASSIGNED_ADDRESSES

```cpp
#define ZTS_MAX_ASSIGNED_ADDRESSES 16
```


Maximum number of statically assigned IP addresses per network endpoint using ZT address management (not DHCP) 


### define ZTS_MAX_PEER_NETWORK_PATHS

```cpp
#define ZTS_MAX_PEER_NETWORK_PATHS 16
```


Maximum number of direct network paths to a given peer 


### define ZTS_MAX_MULTICAST_SUBSCRIPTIONS

```cpp
#define ZTS_MAX_MULTICAST_SUBSCRIPTIONS 1024
```


Maximum number of multicast groups a device / network interface can be subscribed to at once 


### define ZTS_MAX_ENDPOINT_STR_LEN

```cpp
#define ZTS_MAX_ENDPOINT_STR_LEN <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_inet6_addrstrlen">ZTS_INET6_ADDRSTRLEN</a> + 6
```


### define ZTS_C_API_ONLY

```cpp
#define ZTS_C_API_ONLY 1
```


### define ZTS_IPADDR_NONE

```cpp
#define ZTS_IPADDR_NONE ((uint32_t)0xffffffffUL)
```


255.255.255.255 


### define ZTS_IPADDR_LOOPBACK

```cpp
#define ZTS_IPADDR_LOOPBACK ((uint32_t)0x7f000001UL)
```


127.0.0.1 


### define ZTS_IPADDR_ANY

```cpp
#define ZTS_IPADDR_ANY ((uint32_t)0x00000000UL)
```


0.0.0.0 


### define ZTS_IPADDR_BROADCAST

```cpp
#define ZTS_IPADDR_BROADCAST ((uint32_t)0xffffffffUL)
```


255.255.255.255 


### define ZTS_INADDR_NONE

```cpp
#define ZTS_INADDR_NONE <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_none">ZTS_IPADDR_NONE</a>
```


255.255.255.255 


### define ZTS_INADDR_LOOPBACK

```cpp
#define ZTS_INADDR_LOOPBACK <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_loopback">ZTS_IPADDR_LOOPBACK</a>
```


127.0.0.1 


### define ZTS_INADDR_ANY

```cpp
#define ZTS_INADDR_ANY <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_any">ZTS_IPADDR_ANY</a>
```


0.0.0.0 


### define ZTS_INADDR_BROADCAST

```cpp
#define ZTS_INADDR_BROADCAST <a href="/autogen/libzt/files/_zero_tier_sockets_8h.md#define-zts_ipaddr_broadcast">ZTS_IPADDR_BROADCAST</a>
```


255.255.255.255 


### define ZTS_SOCK_STREAM

```cpp
#define ZTS_SOCK_STREAM 0x0001
```


### define ZTS_SOCK_DGRAM

```cpp
#define ZTS_SOCK_DGRAM 0x0002
```


### define ZTS_SOCK_RAW

```cpp
#define ZTS_SOCK_RAW 0x0003
```


### define ZTS_AF_UNSPEC

```cpp
#define ZTS_AF_UNSPEC 0x0000
```


### define ZTS_AF_INET

```cpp
#define ZTS_AF_INET 0x0002
```


### define ZTS_AF_INET6

```cpp
#define ZTS_AF_INET6 0x000a
```


### define ZTS_PF_INET

```cpp
#define ZTS_PF_INET ZTS_AF_INET
```


### define ZTS_PF_INET6

```cpp
#define ZTS_PF_INET6 ZTS_AF_INET6
```


### define ZTS_PF_UNSPEC

```cpp
#define ZTS_PF_UNSPEC ZTS_AF_UNSPEC
```


### define ZTS_IPPROTO_IP

```cpp
#define ZTS_IPPROTO_IP 0x0000
```


### define ZTS_IPPROTO_ICMP

```cpp
#define ZTS_IPPROTO_ICMP 0x0001
```


### define ZTS_IPPROTO_TCP

```cpp
#define ZTS_IPPROTO_TCP 0x0006
```


### define ZTS_IPPROTO_UDP

```cpp
#define ZTS_IPPROTO_UDP 0x0011
```


### define ZTS_IPPROTO_IPV6

```cpp
#define ZTS_IPPROTO_IPV6 0x0029
```


### define ZTS_IPPROTO_ICMPV6

```cpp
#define ZTS_IPPROTO_ICMPV6 0x003a
```


### define ZTS_IPPROTO_UDPLITE

```cpp
#define ZTS_IPPROTO_UDPLITE 0x0088
```


### define ZTS_IPPROTO_RAW

```cpp
#define ZTS_IPPROTO_RAW 0x00ff
```


### define ZTS_MSG_PEEK

```cpp
#define ZTS_MSG_PEEK 0x0001
```


### define ZTS_MSG_WAITALL

```cpp
#define ZTS_MSG_WAITALL 0x0002
```


### define ZTS_MSG_OOB

```cpp
#define ZTS_MSG_OOB 0x0004
```


### define ZTS_MSG_DONTWAIT

```cpp
#define ZTS_MSG_DONTWAIT 0x0008
```


### define ZTS_MSG_MORE

```cpp
#define ZTS_MSG_MORE 0x0010
```


### define ZTS_IOCPARM_MASK

```cpp
#define ZTS_IOCPARM_MASK 0x7fU
```


### define ZTS_IOC_VOID

```cpp
#define ZTS_IOC_VOID 0x20000000UL
```


### define ZTS_IOC_OUT

```cpp
#define ZTS_IOC_OUT 0x40000000UL
```


### define ZTS_IOC_IN

```cpp
#define ZTS_IOC_IN 0x80000000UL
```


### define ZTS_IOC_INOUT

```cpp
#define ZTS_IOC_INOUT (ZTS_IOC_IN | ZTS_IOC_OUT)
```


### define ZTS_IO

```cpp
#define ZTS_IO(
    x,
    y
)
(ZTS_IOC_VOID | ((x) << 8) | (y))
```


### define ZTS_IOR

```cpp
#define ZTS_IOR(
    x,
    y,
    t
)
(ZTS_IOC_OUT | (((long)sizeof(t) & ZTS_IOCPARM_MASK) << 16) | ((x) << 8) | (y))
```


### define ZTS_IOW

```cpp
#define ZTS_IOW(
    x,
    y,
    t
)
(ZTS_IOC_IN | (((long)sizeof(t) & ZTS_IOCPARM_MASK) << 16) | ((x) << 8) | (y))
```


### define ZTS_FIONREAD

```cpp
#define ZTS_FIONREAD ZTS_IOR('f', 127, unsigned long)
```


### define ZTS_FIONBIO

```cpp
#define ZTS_FIONBIO ZTS_IOW('f', 126, unsigned long)
```


### define SIN_ZERO_LEN

```cpp
#define SIN_ZERO_LEN 8
```


### define ZTS_MAX_NUM_ROOTS

```cpp
#define ZTS_MAX_NUM_ROOTS 16
```


### define ZTS_MAX_ENDPOINTS_PER_ROOT

```cpp
#define ZTS_MAX_ENDPOINTS_PER_ROOT 32
```


### define ZTS_API

```cpp
#define ZTS_API 
```


### define ZTCALL

```cpp
#define ZTCALL 
```


### define ZTS_DISABLE_CENTRAL_API

```cpp
#define ZTS_DISABLE_CENTRAL_API 1
```


### define ZTS_ID_STR_BUF_LEN

```cpp
#define ZTS_ID_STR_BUF_LEN 384
```


The length of a human-friendly identity key pair string 


### define ZTS_SOL_SOCKET

```cpp
#define ZTS_SOL_SOCKET 0x0fff
```


### define ZTS_SO_DEBUG

```cpp
#define ZTS_SO_DEBUG 0x0001
```


### define ZTS_SO_ACCEPTCONN

```cpp
#define ZTS_SO_ACCEPTCONN 0x0002
```


### define ZTS_SO_REUSEADDR

```cpp
#define ZTS_SO_REUSEADDR 0x0004
```


### define ZTS_SO_KEEPALIVE

```cpp
#define ZTS_SO_KEEPALIVE 0x0008
```


### define ZTS_SO_DONTROUTE

```cpp
#define ZTS_SO_DONTROUTE 0x0010
```


### define ZTS_SO_BROADCAST

```cpp
#define ZTS_SO_BROADCAST 0x0020
```


### define ZTS_SO_USELOOPBACK

```cpp
#define ZTS_SO_USELOOPBACK 0x0040
```


### define ZTS_SO_LINGER

```cpp
#define ZTS_SO_LINGER 0x0080
```


### define ZTS_SO_DONTLINGER

```cpp
#define ZTS_SO_DONTLINGER ((int)(~ZTS_SO_LINGER))
```


### define ZTS_SO_OOBINLINE

```cpp
#define ZTS_SO_OOBINLINE 0x0100
```


### define ZTS_SO_REUSEPORT

```cpp
#define ZTS_SO_REUSEPORT 0x0200
```


### define ZTS_SO_SNDBUF

```cpp
#define ZTS_SO_SNDBUF 0x1001
```


### define ZTS_SO_RCVBUF

```cpp
#define ZTS_SO_RCVBUF 0x1002
```


### define ZTS_SO_SNDLOWAT

```cpp
#define ZTS_SO_SNDLOWAT 0x1003
```


### define ZTS_SO_RCVLOWAT

```cpp
#define ZTS_SO_RCVLOWAT 0x1004
```


### define ZTS_SO_SNDTIMEO

```cpp
#define ZTS_SO_SNDTIMEO 0x1005
```


### define ZTS_SO_RCVTIMEO

```cpp
#define ZTS_SO_RCVTIMEO 0x1006
```


### define ZTS_SO_ERROR

```cpp
#define ZTS_SO_ERROR 0x1007
```


### define ZTS_SO_TYPE

```cpp
#define ZTS_SO_TYPE 0x1008
```


### define ZTS_SO_CONTIMEO

```cpp
#define ZTS_SO_CONTIMEO 0x1009
```


### define ZTS_SO_NO_CHECK

```cpp
#define ZTS_SO_NO_CHECK 0x100a
```


### define ZTS_SO_BINDTODEVICE

```cpp
#define ZTS_SO_BINDTODEVICE 0x100b
```


### define ZTS_IP_TOS

```cpp
#define ZTS_IP_TOS 0x0001
```


### define ZTS_IP_TTL

```cpp
#define ZTS_IP_TTL 0x0002
```


### define ZTS_IP_PKTINFO

```cpp
#define ZTS_IP_PKTINFO 0x0008
```


### define ZTS_TCP_NODELAY

```cpp
#define ZTS_TCP_NODELAY 0x0001
```


### define ZTS_TCP_KEEPALIVE

```cpp
#define ZTS_TCP_KEEPALIVE 0x0002
```


### define ZTS_TCP_KEEPIDLE

```cpp
#define ZTS_TCP_KEEPIDLE 0x0003
```


### define ZTS_TCP_KEEPINTVL

```cpp
#define ZTS_TCP_KEEPINTVL 0x0004
```


### define ZTS_TCP_KEEPCNT

```cpp
#define ZTS_TCP_KEEPCNT 0x0005
```


### define ZTS_IPV6_CHECKSUM

```cpp
#define ZTS_IPV6_CHECKSUM     0x0007 /* RFC3542: calculate and insert the ICMPv6 checksum for raw                                                \
              sockets. */
```


### define ZTS_IPV6_V6ONLY

```cpp
#define ZTS_IPV6_V6ONLY     0x001b /* RFC3493: boolean control to restrict ZTS_AF_INET6 sockets to                                             \
              IPv6 communications only. */
```


### define ZTS_UDPLITE_SEND_CSCOV

```cpp
#define ZTS_UDPLITE_SEND_CSCOV 0x01 /* sender checksum coverage */
```


### define ZTS_UDPLITE_RECV_CSCOV

```cpp
#define ZTS_UDPLITE_RECV_CSCOV 0x02 /* minimal receiver checksum coverage */
```


### define ZTS_IP_MULTICAST_TTL

```cpp
#define ZTS_IP_MULTICAST_TTL 5
```


### define ZTS_IP_MULTICAST_IF

```cpp
#define ZTS_IP_MULTICAST_IF 6
```


### define ZTS_IP_MULTICAST_LOOP

```cpp
#define ZTS_IP_MULTICAST_LOOP 7
```


### define ZTS_IP_ADD_MEMBERSHIP

```cpp
#define ZTS_IP_ADD_MEMBERSHIP 3
```


### define ZTS_IP_DROP_MEMBERSHIP

```cpp
#define ZTS_IP_DROP_MEMBERSHIP 4
```


### define ZTS_IPV6_JOIN_GROUP

```cpp
#define ZTS_IPV6_JOIN_GROUP 12
```


### define ZTS_IPV6_ADD_MEMBERSHIP

```cpp
#define ZTS_IPV6_ADD_MEMBERSHIP ZTS_IPV6_JOIN_GROUP
```


### define ZTS_IPV6_LEAVE_GROUP

```cpp
#define ZTS_IPV6_LEAVE_GROUP 13
```


### define ZTS_IPV6_DROP_MEMBERSHIP

```cpp
#define ZTS_IPV6_DROP_MEMBERSHIP ZTS_IPV6_LEAVE_GROUP
```


### define ZTS_IPTOS_TOS_MASK

```cpp
#define ZTS_IPTOS_TOS_MASK 0x1E
```


### define ZTS_IPTOS_TOS

```cpp
#define ZTS_IPTOS_TOS(
    tos
)
((tos)&ZTS_IPTOS_TOS_MASK)
```


### define ZTS_IPTOS_LOWDELAY

```cpp
#define ZTS_IPTOS_LOWDELAY 0x10
```


### define ZTS_IPTOS_THROUGHPUT

```cpp
#define ZTS_IPTOS_THROUGHPUT 0x08
```


### define ZTS_IPTOS_RELIABILITY

```cpp
#define ZTS_IPTOS_RELIABILITY 0x04
```


### define ZTS_IPTOS_LOWCOST

```cpp
#define ZTS_IPTOS_LOWCOST 0x02
```


### define ZTS_IPTOS_MINCOST

```cpp
#define ZTS_IPTOS_MINCOST ZTS_IPTOS_LOWCOST
```


### define ZTS_IPTOS_PREC_MASK

```cpp
#define ZTS_IPTOS_PREC_MASK 0xe0
```


### define ZTS_IPTOS_PREC

```cpp
#define ZTS_IPTOS_PREC(
    tos
)
((tos)&ZTS_IPTOS_PREC_MASK)
```


### define ZTS_IPTOS_PREC_NETCONTROL

```cpp
#define ZTS_IPTOS_PREC_NETCONTROL 0xe0
```


### define ZTS_IPTOS_PREC_INTERNETCONTROL

```cpp
#define ZTS_IPTOS_PREC_INTERNETCONTROL 0xc0
```


### define ZTS_IPTOS_PREC_CRITIC_ECP

```cpp
#define ZTS_IPTOS_PREC_CRITIC_ECP 0xa0
```


### define ZTS_IPTOS_PREC_FLASHOVERRIDE

```cpp
#define ZTS_IPTOS_PREC_FLASHOVERRIDE 0x80
```


### define ZTS_IPTOS_PREC_FLASH

```cpp
#define ZTS_IPTOS_PREC_FLASH 0x60
```


### define ZTS_IPTOS_PREC_IMMEDIATE

```cpp
#define ZTS_IPTOS_PREC_IMMEDIATE 0x40
```


### define ZTS_IPTOS_PREC_PRIORITY

```cpp
#define ZTS_IPTOS_PREC_PRIORITY 0x20
```


### define ZTS_IPTOS_PREC_ROUTINE

```cpp
#define ZTS_IPTOS_PREC_ROUTINE 0x00
```


### define LWIP_SOCKET_OFFSET

```cpp
#define LWIP_SOCKET_OFFSET 0
```


### define MEMP_NUM_NETCONN

```cpp
#define MEMP_NUM_NETCONN 1024
```


### define ZTS_FD_SETSIZE

```cpp
#define ZTS_FD_SETSIZE MEMP_NUM_NETCONN
```


### define ZTS_FDSETSAFESET

```cpp
#define ZTS_FDSETSAFESET(
    n,
    code
)
    do {                                                                                                               \
        if (((n)-LWIP_SOCKET_OFFSET < MEMP_NUM_NETCONN) && (((int)(n)-LWIP_SOCKET_OFFSET) >= 0)) {                     \
            code;                                                                                                      \
        }                                                                                                              \
    } while (0)
```


### define ZTS_FDSETSAFEGET

```cpp
#define ZTS_FDSETSAFEGET(
    n,
    code
)
    (((n)-LWIP_SOCKET_OFFSET < MEMP_NUM_NETCONN) && (((int)(n)-LWIP_SOCKET_OFFSET) >= 0) ? (code) : 0)
```


### define ZTS_FD_SET

```cpp
#define ZTS_FD_SET(
    n,
    p
)
    ZTS_FDSETSAFESET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] |= (1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
```


### define ZTS_FD_CLR

```cpp
#define ZTS_FD_CLR(
    n,
    p
)
    ZTS_FDSETSAFESET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] &= ~(1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
```


### define ZTS_FD_ISSET

```cpp
#define ZTS_FD_ISSET(
    n,
    p
)
    ZTS_FDSETSAFEGET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] & (1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
```


### define ZTS_FD_ZERO

```cpp
#define ZTS_FD_ZERO(
    p
)
memset((void*)(p), 0, sizeof(*(p)))
```


### define ZTS_F_GETFL

```cpp
#define ZTS_F_GETFL 0x0003
```


### define ZTS_F_SETFL

```cpp
#define ZTS_F_SETFL 0x0004
```


### define ZTS_O_NONBLOCK

```cpp
#define ZTS_O_NONBLOCK 1
```


### define ZTS_O_NDELAY

```cpp
#define ZTS_O_NDELAY ZTS_O_NONBLOCK
```


### define ZTS_O_RDONLY

```cpp
#define ZTS_O_RDONLY 2
```


### define ZTS_O_WRONLY

```cpp
#define ZTS_O_WRONLY 4
```


### define ZTS_O_RDWR

```cpp
#define ZTS_O_RDWR (ZTS_O_RDONLY | ZTS_O_WRONLY)
```


### define ZTS_POLLIN

```cpp
#define ZTS_POLLIN 0x001
```


### define ZTS_POLLOUT

```cpp
#define ZTS_POLLOUT 0x002
```


### define ZTS_POLLERR

```cpp
#define ZTS_POLLERR 0x004
```


### define ZTS_POLLNVAL

```cpp
#define ZTS_POLLNVAL 0x008
```


### define ZTS_POLLRDNORM

```cpp
#define ZTS_POLLRDNORM 0x010
```


### define ZTS_POLLRDBAND

```cpp
#define ZTS_POLLRDBAND 0x020
```


### define ZTS_POLLPRI

```cpp
#define ZTS_POLLPRI 0x040
```


### define ZTS_POLLWRNORM

```cpp
#define ZTS_POLLWRNORM 0x080
```


### define ZTS_POLLWRBAND

```cpp
#define ZTS_POLLWRBAND 0x100
```


### define ZTS_POLLHUP

```cpp
#define ZTS_POLLHUP 0x200
```


### define ZTS_MSG_TRUNC

```cpp
#define ZTS_MSG_TRUNC 0x04
```


### define ZTS_MSG_CTRUNC

```cpp
#define ZTS_MSG_CTRUNC 0x08
```


### define ZTS_SHUT_RD

```cpp
#define ZTS_SHUT_RD 0x0
```


### define ZTS_SHUT_WR

```cpp
#define ZTS_SHUT_WR 0x1
```


### define ZTS_SHUT_RDWR

```cpp
#define ZTS_SHUT_RDWR 0x2
```


### define h_addr

```cpp
#define h_addr h_addr_list[0] /* for backward compatibility */
```


## Source code

```cpp
/*
 * Copyright (c)2013-2021 ZeroTier, Inc.
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file in the project's root directory.
 *
 * Change Date: 2026-01-01
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2.0 of the Apache License.
 */
/****/

#ifndef ZTS_SOCKETS_H
#define ZTS_SOCKETS_H

#ifdef __cplusplus
extern "C" {
#endif

//----------------------------------------------------------------------------//
// Error codes                                                                //
//----------------------------------------------------------------------------//

typedef enum {
    ZTS_ERR_OK = 0,
    ZTS_ERR_SOCKET = -1,
    ZTS_ERR_SERVICE = -2,
    ZTS_ERR_ARG = -3,
    ZTS_ERR_NO_RESULT = -4,
    ZTS_ERR_GENERAL = -5
} zts_error_t;

//----------------------------------------------------------------------------//
// Event codes                                                                //
//----------------------------------------------------------------------------//

typedef enum {
    ZTS_EVENT_NODE_UP = 200,

    ZTS_EVENT_NODE_ONLINE = 201,

    ZTS_EVENT_NODE_OFFLINE = 202,

    ZTS_EVENT_NODE_DOWN = 203,

    ZTS_EVENT_NODE_FATAL_ERROR = 204,

    ZTS_EVENT_NETWORK_NOT_FOUND = 210,
    ZTS_EVENT_NETWORK_CLIENT_TOO_OLD = 211,
    ZTS_EVENT_NETWORK_REQ_CONFIG = 212,
    ZTS_EVENT_NETWORK_OK = 213,
    ZTS_EVENT_NETWORK_ACCESS_DENIED = 214,
    ZTS_EVENT_NETWORK_READY_IP4 = 215,
    ZTS_EVENT_NETWORK_READY_IP6 = 216,
    ZTS_EVENT_NETWORK_READY_IP4_IP6 = 217,
    ZTS_EVENT_NETWORK_DOWN = 218,
    ZTS_EVENT_NETWORK_UPDATE = 219,

    ZTS_EVENT_STACK_UP = 220,
    ZTS_EVENT_STACK_DOWN = 221,

    ZTS_EVENT_NETIF_UP = 230,
    ZTS_EVENT_NETIF_DOWN = 231,
    ZTS_EVENT_NETIF_REMOVED = 232,
    ZTS_EVENT_NETIF_LINK_UP = 233,
    ZTS_EVENT_NETIF_LINK_DOWN = 234,

    ZTS_EVENT_PEER_DIRECT = 240,
    ZTS_EVENT_PEER_RELAY = 241,
    ZTS_EVENT_PEER_UNREACHABLE = 242,
    ZTS_EVENT_PEER_PATH_DISCOVERED = 243,
    ZTS_EVENT_PEER_PATH_DEAD = 244,

    ZTS_EVENT_ROUTE_ADDED = 250,
    ZTS_EVENT_ROUTE_REMOVED = 251,

    ZTS_EVENT_ADDR_ADDED_IP4 = 260,
    ZTS_EVENT_ADDR_REMOVED_IP4 = 261,
    ZTS_EVENT_ADDR_ADDED_IP6 = 262,
    ZTS_EVENT_ADDR_REMOVED_IP6 = 263,

    ZTS_EVENT_STORE_IDENTITY_SECRET = 270,
    ZTS_EVENT_STORE_IDENTITY_PUBLIC = 271,
    ZTS_EVENT_STORE_PLANET = 272,
    ZTS_EVENT_STORE_PEER = 273,
    ZTS_EVENT_STORE_NETWORK = 274
} zts_event_t;

//----------------------------------------------------------------------------//
// zts_errno Error codes                                                      //
//----------------------------------------------------------------------------//

extern int zts_errno;

typedef enum {
    ZTS_EPERM = 1,
    ZTS_ENOENT = 2,
    ZTS_ESRCH = 3,
    ZTS_EINTR = 4,
    ZTS_EIO = 5,
    ZTS_ENXIO = 6,
    ZTS_EBADF = 9,
    ZTS_EAGAIN = 11,
    ZTS_EWOULDBLOCK = ZTS_EAGAIN,
    ZTS_ENOMEM = 12,
    ZTS_EACCES = 13,
    ZTS_EFAULT = 14,
    ZTS_EBUSY = 16,
    ZTS_EEXIST = 17,
    ZTS_ENODEV = 19,
    ZTS_EINVAL = 22,
    ZTS_ENFILE = 23,
    ZTS_EMFILE = 24,
    ZTS_ENOSYS = 38,
    ZTS_ENOTSOCK = 88,
    ZTS_EDESTADDRREQ = 89,
    ZTS_EMSGSIZE = 90,
    ZTS_EPROTOTYPE = 91,
    ZTS_ENOPROTOOPT = 92,
    ZTS_EPROTONOSUPPORT = 93,
    ZTS_ESOCKTNOSUPPORT = 94,
    ZTS_EOPNOTSUPP = 95,
    ZTS_EPFNOSUPPORT = 96,
    ZTS_EAFNOSUPPORT = 97,
    ZTS_EADDRINUSE = 98,
    ZTS_EADDRNOTAVAIL = 99,
    ZTS_ENETDOWN = 100,
    ZTS_ENETUNREACH = 101,
    ZTS_ECONNABORTED = 103,
    ZTS_ECONNRESET = 104,
    ZTS_ENOBUFS = 105,
    ZTS_EISCONN = 106,
    ZTS_ENOTCONN = 107,
    ZTS_ETIMEDOUT = 110,
    ZTS_EHOSTUNREACH = 113,
    ZTS_EALREADY = 114,
    ZTS_EINPROGRESS = 115
} zts_errno_t;

//----------------------------------------------------------------------------//
// Misc definitions                                                           //
//----------------------------------------------------------------------------//

#define ZTS_MAC_ADDRSTRLEN 18

#define ZTS_INET_ADDRSTRLEN 16

#define ZTS_INET6_ADDRSTRLEN 46

#define ZTS_IP_MAX_STR_LEN ZTS_INET6_ADDRSTRLEN

#define ZTS_STORE_DATA_LEN 4096

#define ZTS_MAX_NETWORK_SHORT_NAME_LENGTH 127

#define ZTS_MAX_NETWORK_ROUTES 32

#define ZTS_MAX_ASSIGNED_ADDRESSES 16

#define ZTS_MAX_PEER_NETWORK_PATHS 16

#define ZTS_MAX_MULTICAST_SUBSCRIPTIONS 1024

#define ZTS_MAX_ENDPOINT_STR_LEN ZTS_INET6_ADDRSTRLEN + 6

//----------------------------------------------------------------------------//
// Misc                                                                       //
//----------------------------------------------------------------------------//

#if ! defined(ZTS_ENABLE_PYTHON) && ! defined(ZTS_ENABLE_PINVOKE) && ! defined(ZTS_ENABLE_JAVA)
#define ZTS_C_API_ONLY 1
#endif

#if ! ZTS_NO_STDINT_H
#include <stdint.h>
#endif

#if defined(_MSC_VER)
#ifndef ssize_t
// TODO: Should be SSIZE_T, would require lwIP patch
// #include <BaseTsd.h>
// typedef SSIZE_T ssize_t;
typedef int ssize_t;
#endif
#else
#include <unistd.h>
#endif

#ifdef ZTS_ENABLE_PINVOKE
// Used by P/INVOKE wrappers
typedef void (*CppCallback)(void* msg);
#endif

//----------------------------------------------------------------------------//
// Common definitions and structures for interoperability between zts_* and   //
// lwIP functions. Some of the code in the following section is a borrowed    //
// from the lwIP codebase so that the user doesn't need to include headers    //
// from that project in addition to the ZeroTier SDK headers. The license     //
// applying to this code borrowed from lwIP is produced below and only        //
// applies to the portions of code which are merely renamed versions of       //
// their lwIP counterparts. The rest of the code in this C API file is        //
// governed by the license text provided at the beginning of this file.       //
//----------------------------------------------------------------------------//

/*
 * Copyright (c) 2001-2004 Swedish Institute of Computer Science.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 * 3. The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * This file is part of the lwIP TCP/IP stack.
 *
 * Author: Adam Dunkels <adam@sics.se>
 *
 */

#define ZTS_IPADDR_NONE ((uint32_t)0xffffffffUL)
#define ZTS_IPADDR_LOOPBACK ((uint32_t)0x7f000001UL)
#define ZTS_IPADDR_ANY ((uint32_t)0x00000000UL)
#define ZTS_IPADDR_BROADCAST ((uint32_t)0xffffffffUL)

#define ZTS_INADDR_NONE ZTS_IPADDR_NONE
#define ZTS_INADDR_LOOPBACK ZTS_IPADDR_LOOPBACK
#define ZTS_INADDR_ANY ZTS_IPADDR_ANY
#define ZTS_INADDR_BROADCAST ZTS_IPADDR_BROADCAST

// Socket protocol types
#define ZTS_SOCK_STREAM 0x0001
#define ZTS_SOCK_DGRAM  0x0002
#define ZTS_SOCK_RAW    0x0003
// Socket family types
#define ZTS_AF_UNSPEC 0x0000
#define ZTS_AF_INET   0x0002
#define ZTS_AF_INET6  0x000a
#define ZTS_PF_INET   ZTS_AF_INET
#define ZTS_PF_INET6  ZTS_AF_INET6
#define ZTS_PF_UNSPEC ZTS_AF_UNSPEC
// Protocol command types
#define ZTS_IPPROTO_IP      0x0000
#define ZTS_IPPROTO_ICMP    0x0001
#define ZTS_IPPROTO_TCP     0x0006
#define ZTS_IPPROTO_UDP     0x0011
#define ZTS_IPPROTO_IPV6    0x0029
#define ZTS_IPPROTO_ICMPV6  0x003a
#define ZTS_IPPROTO_UDPLITE 0x0088
#define ZTS_IPPROTO_RAW     0x00ff
// send() and recv() flags
#define ZTS_MSG_PEEK     0x0001
#define ZTS_MSG_WAITALL  0x0002   // NOT YET SUPPORTED
#define ZTS_MSG_OOB      0x0004   // NOT YET SUPPORTED
#define ZTS_MSG_DONTWAIT 0x0008
#define ZTS_MSG_MORE     0x0010

// Macro's for defining ioctl() command values
#define ZTS_IOCPARM_MASK 0x7fU
#define ZTS_IOC_VOID     0x20000000UL
#define ZTS_IOC_OUT      0x40000000UL
#define ZTS_IOC_IN       0x80000000UL
#define ZTS_IOC_INOUT    (ZTS_IOC_IN | ZTS_IOC_OUT)
#define ZTS_IO(x, y)     (ZTS_IOC_VOID | ((x) << 8) | (y))
#define ZTS_IOR(x, y, t) (ZTS_IOC_OUT | (((long)sizeof(t) & ZTS_IOCPARM_MASK) << 16) | ((x) << 8) | (y))
#define ZTS_IOW(x, y, t) (ZTS_IOC_IN | (((long)sizeof(t) & ZTS_IOCPARM_MASK) << 16) | ((x) << 8) | (y))
// ioctl() commands
#define ZTS_FIONREAD ZTS_IOR('f', 127, unsigned long)
#define ZTS_FIONBIO  ZTS_IOW('f', 126, unsigned long)

//----------------------------------------------------------------------------//
// Custom but still mostly standard socket interface structures               //
//----------------------------------------------------------------------------//

typedef uint32_t zts_socklen_t;
typedef uint32_t zts_in_addr_t;
typedef uint16_t zts_in_port_t;
typedef uint8_t zts_sa_family_t;

struct zts_in_addr {
#if defined(_WIN32)
    zts_in_addr_t S_addr;
#else
    // A definition in winsock may conflict with s_addr
    zts_in_addr_t s_addr;
#endif
};

struct zts_in6_addr {
    union un {
        uint32_t u32_addr[4];
        uint8_t u8_addr[16];
    } un;
    //#define s6_addr  un.u8_addr
};

struct zts_sockaddr_in {
    uint8_t sin_len;
    zts_sa_family_t sin_family;
    zts_in_port_t sin_port;
    struct zts_in_addr sin_addr;
#define SIN_ZERO_LEN 8
    char sin_zero[SIN_ZERO_LEN];
};

struct zts_sockaddr_in6 {
    uint8_t sin6_len;                // length of this structure
    zts_sa_family_t sin6_family;     // ZTS_AF_INET6
    zts_in_port_t sin6_port;         // Transport layer port #
    uint32_t sin6_flowinfo;          // IPv6 flow information
    struct zts_in6_addr sin6_addr;   // IPv6 address
    uint32_t sin6_scope_id;          // Set of interfaces for scope
};

struct zts_sockaddr {
    uint8_t sa_len;
    zts_sa_family_t sa_family;
    char sa_data[14];
};

struct zts_sockaddr_storage {
    uint8_t s2_len;
    zts_sa_family_t ss_family;
    char s2_data1[2];
    uint32_t s2_data2[3];
    uint32_t s2_data3[3];
};

//----------------------------------------------------------------------------//
// Callback Structures                                                        //
//----------------------------------------------------------------------------//

typedef struct {
    uint64_t node_id;

    uint16_t port_primary;

    uint16_t port_secondary;

    uint16_t port_tertiary;

    uint8_t ver_major;

    uint8_t ver_minor;

    uint8_t ver_rev;
} zts_node_info_t;

typedef struct {
    uint64_t net_id;
    struct zts_sockaddr_storage addr;
} zts_addr_info_t;

typedef enum {
    ZTS_NETWORK_STATUS_REQUESTING_CONFIGURATION = 0,

    ZTS_NETWORK_STATUS_OK = 1,

    ZTS_NETWORK_STATUS_ACCESS_DENIED = 2,

    ZTS_NETWORK_STATUS_NOT_FOUND = 3,

    ZTS_NETWORK_STATUS_PORT_ERROR = 4,

    ZTS_NETWORK_STATUS_CLIENT_TOO_OLD = 5
} zts_network_status_t;

typedef enum {
    ZTS_NETWORK_TYPE_PRIVATE = 0,

    ZTS_NETWORK_TYPE_PUBLIC = 1
} zts_net_info_type_t;

typedef struct {
    struct zts_sockaddr_storage target;

    struct zts_sockaddr_storage via;

    uint16_t flags;

    uint16_t metric;
} zts_route_info_t;

typedef struct {
    uint64_t mac;

    unsigned long adi;
} zts_multicast_group_t;

typedef enum {
    ZTS_PEER_ROLE_LEAF = 0,
    ZTS_PEER_ROLE_MOON = 1,
    ZTS_PEER_ROLE_PLANET = 2
} zts_peer_role_t;

typedef struct {
    uint64_t net_id;

    uint64_t mac;

    char name[ZTS_MAX_NETWORK_SHORT_NAME_LENGTH + 1];

    zts_network_status_t status;

    zts_net_info_type_t type;

    unsigned int mtu;

    int dhcp;

    int bridge;

    int broadcast_enabled;

    int port_error;

    unsigned long netconf_rev;

    unsigned int assigned_addr_count;

    struct zts_sockaddr_storage assigned_addrs[ZTS_MAX_ASSIGNED_ADDRESSES];

    unsigned int route_count;

    zts_route_info_t routes[ZTS_MAX_NETWORK_ROUTES];

    unsigned int multicast_sub_count;

    struct {
        uint64_t mac; /* MAC in lower 48 bits */
        uint32_t adi; /* Additional distinguishing information, usually zero
                         except for IPv4 ARP groups */
    } multicast_subs[ZTS_MAX_MULTICAST_SUBSCRIPTIONS];
} zts_net_info_t;

typedef struct {
    struct zts_sockaddr_storage address;

    uint64_t last_tx;

    uint64_t last_rx;

    uint64_t trusted_path_id;

    float latency;

    float unused_0;
    float unused_1;
    float unused_2;
    float unused_3;
    float unused_4;
    uint64_t unused_5;
    uint64_t unused_6;
    float unused_7;

    char* ifname;

    int expired;

    int preferred;
} zts_path_t;

typedef struct {
    uint64_t peer_id;

    int ver_major;

    int ver_minor;

    int ver_rev;

    int latency;

    zts_peer_role_t role;

    unsigned int path_count;

    int unused_0;

    zts_path_t paths[ZTS_MAX_PEER_NETWORK_PATHS];
} zts_peer_info_t;

#define ZTS_MAX_NUM_ROOTS          16
#define ZTS_MAX_ENDPOINTS_PER_ROOT 32

typedef struct {
    char* public_id_str[ZTS_MAX_NUM_ROOTS];
    char* endpoint_ip_str[ZTS_MAX_NUM_ROOTS][ZTS_MAX_ENDPOINTS_PER_ROOT];
} zts_root_set_t;

typedef struct {
    uint64_t net_id;

    uint64_t mac;

    int mtu;
} zts_netif_info_t;

typedef struct {
    int16_t event_code;
    zts_node_info_t* node;
    zts_net_info_t* network;
    zts_netif_info_t* netif;
    zts_route_info_t* route;
    zts_peer_info_t* peer;
    zts_addr_info_t* addr;
    void* cache;
    int len;
} zts_event_msg_t;

//----------------------------------------------------------------------------//
// Python Bindings (Subset of regular socket API)                             //
//----------------------------------------------------------------------------//

#ifdef ZTS_ENABLE_PYTHON
#include "Python.h"

class PythonDirectorCallbackClass {
  public:
    virtual void on_zerotier_event(zts_event_msg_t* msg);
    virtual ~PythonDirectorCallbackClass() {};
};

extern PythonDirectorCallbackClass* _userEventCallback;

int zts_py_bind(int fd, int family, int type, PyObject* addro);

int zts_py_connect(int fd, int family, int type, PyObject* addro);

PyObject* zts_py_accept(int fd);

int zts_py_listen(int fd, int backlog);

PyObject* zts_py_recv(int fd, int len, int flags);

int zts_py_send(int fd, PyObject* buf, int flags);

int zts_py_close(int fd);

int zts_py_setblocking(int fd, int flag);

int zts_py_getblocking(int fd);

#endif   // ZTS_ENABLE_PYTHON

//----------------------------------------------------------------------------//
// ZeroTier Service and Network Controls                                      //
//----------------------------------------------------------------------------//

#if defined(_WIN32)
#ifdef ADD_EXPORTS
#define ZTS_API __declspec(dllexport)
#else
#define ZTS_API __declspec(dllimport)
#endif
#define ZTCALL __cdecl
#else
#define ZTS_API
#define ZTCALL
#endif

//----------------------------------------------------------------------------//
// Central API                                                                //
//----------------------------------------------------------------------------//

#define ZTS_DISABLE_CENTRAL_API 1

#ifndef ZTS_DISABLE_CENTRAL_API

#define ZTS_CENTRAL_DEFAULT_URL         "https://my.zerotier.com"
#define ZTS_CENRTAL_MAX_URL_LEN         128
#define ZTS_CENTRAL_TOKEN_LEN           32
#define ZTS_CENTRAL_RESP_BUF_DEFAULT_SZ (128 * 1024)

#define ZTS_HTTP_GET    0
#define ZTS_HTTP_POST   1
#define ZTS_HTTP_DELETE 2

#define ZTS_CENTRAL_NODE_AUTH_FALSE 0
#define ZTS_CENTRAL_NODE_AUTH_TRUE  1

#define ZTS_CENTRAL_READ  1
#define ZTS_CENTRAL_WRITE 2

ZTS_API int ZTCALL zts_central_set_access_mode(int8_t modes);

ZTS_API int ZTCALL zts_central_set_verbose(int8_t is_verbose);

ZTS_API void ZTCALL zts_central_clear_resp_buf();

ZTS_API int ZTCALL zts_central_init(const char* url_str, const char* token_str, char* resp_buf, uint32_t buf_len);

ZTS_API void ZTCALL zts_central_cleanup();

ZTS_API int ZTCALL zts_central_get_last_resp_buf(char* dst, int len);

ZTS_API int ZTCALL zts_central_status_get(int* http_resp_code);

ZTS_API int ZTCALL zts_central_self_get(int* http_resp_code);

ZTS_API int ZTCALL zts_central_net_get(int* http_resp_code, uint64_t net_id);

ZTS_API int ZTCALL zts_central_net_update(int* http_resp_code, uint64_t net_id);

ZTS_API int ZTCALL zts_central_net_delete(int* http_resp_code, uint64_t net_id);

ZTS_API int ZTCALL zts_central_net_get_all(int* http_resp_code);
ZTS_API int ZTCALL zts_central_member_get(int* http_resp_code, uint64_t net_id, uint64_t node_id);

ZTS_API int ZTCALL zts_central_member_update(int* http_resp_code, uint64_t net_id, uint64_t node_id, char* post_data);

ZTS_API int ZTCALL zts_central_node_auth(int* http_resp_code, uint64_t net_id, uint64_t node_id, uint8_t is_authed);

ZTS_API int ZTCALL zts_central_net_get_members(int* http_resp_code, uint64_t net_id);

#endif   // ZTS_DISABLE_CENTRAL_API

//----------------------------------------------------------------------------//
// Identity Management                                                        //
//----------------------------------------------------------------------------//

#define ZTS_ID_STR_BUF_LEN 384

ZTS_API int ZTCALL zts_id_new(char* key, unsigned int* key_buf_len);

ZTS_API int ZTCALL zts_id_pair_is_valid(const char* key, unsigned int len);

ZTS_API int ZTCALL zts_init_from_storage(const char* path);

ZTS_API int ZTCALL zts_init_from_memory(const char* key, unsigned int len);

#ifdef ZTS_ENABLE_PYTHON
ZTS_API int ZTCALL zts_init_set_event_handler(PythonDirectorCallbackClass* callback);
#endif
#ifdef ZTS_ENABLE_PINVOKE
ZTS_API int ZTCALL zts_init_set_event_handler(CppCallback callback);
#endif
#ifdef ZTS_ENABLE_JAVA
#include <jni.h>
int zts_init_set_event_handler(jobject obj_ref, jmethodID id);
#endif
#ifdef ZTS_C_API_ONLY
ZTS_API int ZTCALL zts_init_set_event_handler(void (*callback)(void*));
#endif

ZTS_API int ZTCALL zts_init_blacklist_if(const char* prefix, unsigned int len);

ZTS_API int ZTCALL zts_init_set_roots(const void* roots_data, unsigned int len);

ZTS_API int ZTCALL zts_init_set_port(unsigned short port);

ZTS_API int ZTCALL zts_init_set_random_port_range(unsigned short start_port, unsigned short end_port);

ZTS_API int ZTCALL zts_init_allow_secondary_port(unsigned int allowed);

ZTS_API int ZTCALL zts_init_allow_port_mapping(unsigned int allowed);

ZTS_API int ZTCALL zts_init_allow_net_cache(unsigned int allowed);

ZTS_API int ZTCALL zts_init_allow_peer_cache(unsigned int allowed);

ZTS_API int ZTCALL zts_init_allow_roots_cache(unsigned int allowed);

ZTS_API int ZTCALL zts_init_allow_id_cache(unsigned int allowed);

ZTS_API int ZTCALL zts_addr_is_assigned(uint64_t net_id, unsigned int family);

ZTS_API int ZTCALL zts_addr_get(uint64_t net_id, unsigned int family, struct zts_sockaddr_storage* addr);

ZTS_API int ZTCALL zts_addr_get_str(uint64_t net_id, unsigned int family, char* dst, unsigned int len);

ZTS_API int ZTCALL zts_addr_get_all(uint64_t net_id, struct zts_sockaddr_storage* addr, unsigned int* count);

ZTS_API int ZTCALL
zts_addr_compute_6plane(const uint64_t net_id, const uint64_t node_id, struct zts_sockaddr_storage* addr);

ZTS_API int ZTCALL
zts_addr_compute_rfc4193(const uint64_t net_id, const uint64_t node_id, struct zts_sockaddr_storage* addr);

ZTS_API int ZTCALL zts_addr_compute_rfc4193_str(uint64_t net_id, uint64_t node_id, char* dst, unsigned int len);

ZTS_API int ZTCALL zts_addr_compute_6plane_str(uint64_t net_id, uint64_t node_id, char* dst, unsigned int len);

ZTS_API uint64_t ZTCALL zts_net_compute_adhoc_id(uint16_t start_port, uint16_t end_port);

ZTS_API int ZTCALL zts_net_join(uint64_t net_id);

ZTS_API int ZTCALL zts_net_leave(uint64_t net_id);

ZTS_API int ZTCALL zts_net_transport_is_ready(const uint64_t net_id);

ZTS_API uint64_t ZTCALL zts_net_get_mac(uint64_t net_id);

ZTS_API int ZTCALL zts_net_get_mac_str(uint64_t net_id, char* dst, unsigned int len);

ZTS_API int ZTCALL zts_net_get_broadcast(uint64_t net_id);

ZTS_API int ZTCALL zts_net_get_mtu(uint64_t net_id);

ZTS_API int ZTCALL zts_net_get_name(uint64_t net_id, char* dst, unsigned int len);

ZTS_API int ZTCALL zts_net_get_status(uint64_t net_id);

ZTS_API int ZTCALL zts_net_get_type(uint64_t net_id);

ZTS_API int ZTCALL zts_route_is_assigned(uint64_t net_id, unsigned int family);

ZTS_API int ZTCALL zts_node_start();

ZTS_API int ZTCALL zts_node_is_online();

ZTS_API uint64_t ZTCALL zts_node_get_id();

ZTS_API int ZTCALL zts_node_get_id_pair(char* key, unsigned int* key_dst_len);

ZTS_API int ZTCALL zts_node_get_port();

ZTS_API int ZTCALL zts_node_stop();

ZTS_API int ZTCALL zts_node_free();

ZTS_API int ZTCALL zts_moon_orbit(uint64_t moon_roots_id, uint64_t moon_seed);

ZTS_API int ZTCALL zts_moon_deorbit(uint64_t moon_roots_id);

//----------------------------------------------------------------------------//
// Statistics                                                                 //
//----------------------------------------------------------------------------//

typedef struct {
    uint32_t link_tx;
    uint32_t link_rx;
    uint32_t link_drop;
    uint32_t link_err;

    uint32_t etharp_tx;
    uint32_t etharp_rx;
    uint32_t etharp_drop;
    uint32_t etharp_err;

    uint32_t ip4_tx;
    uint32_t ip4_rx;
    uint32_t ip4_drop;
    uint32_t ip4_err;

    uint32_t ip6_tx;
    uint32_t ip6_rx;
    uint32_t ip6_drop;
    uint32_t ip6_err;

    uint32_t icmp4_tx;
    uint32_t icmp4_rx;
    uint32_t icmp4_drop;
    uint32_t icmp4_err;

    uint32_t icmp6_tx;
    uint32_t icmp6_rx;
    uint32_t icmp6_drop;
    uint32_t icmp6_err;

    uint32_t udp_tx;
    uint32_t udp_rx;
    uint32_t udp_drop;
    uint32_t udp_err;

    uint32_t tcp_tx;
    uint32_t tcp_rx;
    uint32_t tcp_drop;
    uint32_t tcp_err;

    uint32_t nd6_tx;
    uint32_t nd6_rx;
    uint32_t nd6_drop;
    uint32_t nd6_err;
} zts_stats_counter_t;

ZTS_API int ZTCALL zts_stats_get_all(zts_stats_counter_t* dst);

//----------------------------------------------------------------------------//
// Socket API                                                                 //
//----------------------------------------------------------------------------//

ZTS_API int ZTCALL zts_bsd_socket(int family, int type, int protocol);

ZTS_API int ZTCALL zts_bsd_connect(int fd, const struct zts_sockaddr* addr, zts_socklen_t addrlen);

ZTS_API int ZTCALL zts_bsd_bind(int fd, const struct zts_sockaddr* addr, zts_socklen_t addrlen);

ZTS_API int ZTCALL zts_bsd_listen(int fd, int backlog);

ZTS_API int ZTCALL zts_bsd_accept(int fd, struct zts_sockaddr* addr, zts_socklen_t* addrlen);

// Socket level option number
#define ZTS_SOL_SOCKET 0x0fff
// Socket options
#define ZTS_SO_DEBUG       0x0001   // NOT YET SUPPORTED
#define ZTS_SO_ACCEPTCONN  0x0002
#define ZTS_SO_REUSEADDR   0x0004
#define ZTS_SO_KEEPALIVE   0x0008
#define ZTS_SO_DONTROUTE   0x0010   // NOT YET SUPPORTED
#define ZTS_SO_BROADCAST   0x0020
#define ZTS_SO_USELOOPBACK 0x0040   // NOT YET SUPPORTED
#define ZTS_SO_LINGER      0x0080

/*
 * Structure used for manipulating linger option.
 */
struct zts_linger {
    int l_onoff;    // option on/off
    int l_linger;   // linger time in seconds
};

#define ZTS_SO_DONTLINGER   ((int)(~ZTS_SO_LINGER))
#define ZTS_SO_OOBINLINE    0x0100   // NOT YET SUPPORTED
#define ZTS_SO_REUSEPORT    0x0200   // NOT YET SUPPORTED
#define ZTS_SO_SNDBUF       0x1001   // NOT YET SUPPORTED
#define ZTS_SO_RCVBUF       0x1002
#define ZTS_SO_SNDLOWAT     0x1003   // NOT YET SUPPORTED
#define ZTS_SO_RCVLOWAT     0x1004   // NOT YET SUPPORTED
#define ZTS_SO_SNDTIMEO     0x1005
#define ZTS_SO_RCVTIMEO     0x1006
#define ZTS_SO_ERROR        0x1007
#define ZTS_SO_TYPE         0x1008
#define ZTS_SO_CONTIMEO     0x1009
#define ZTS_SO_NO_CHECK     0x100a
#define ZTS_SO_BINDTODEVICE 0x100b
// IPPROTO_IP options
#define ZTS_IP_TOS     0x0001
#define ZTS_IP_TTL     0x0002
#define ZTS_IP_PKTINFO 0x0008
// IPPROTO_TCP options
#define ZTS_TCP_NODELAY   0x0001
#define ZTS_TCP_KEEPALIVE 0x0002
#define ZTS_TCP_KEEPIDLE  0x0003
#define ZTS_TCP_KEEPINTVL 0x0004
#define ZTS_TCP_KEEPCNT   0x0005
// IPPROTO_IPV6 options
#define ZTS_IPV6_CHECKSUM                                                                                              \
    0x0007 /* RFC3542: calculate and insert the ICMPv6 checksum for raw                                                \
              sockets. */
#define ZTS_IPV6_V6ONLY                                                                                                \
    0x001b /* RFC3493: boolean control to restrict ZTS_AF_INET6 sockets to                                             \
              IPv6 communications only. */
// UDPLITE options
#define ZTS_UDPLITE_SEND_CSCOV 0x01 /* sender checksum coverage */
#define ZTS_UDPLITE_RECV_CSCOV 0x02 /* minimal receiver checksum coverage */
// UDPLITE options
#define ZTS_IP_MULTICAST_TTL  5
#define ZTS_IP_MULTICAST_IF   6
#define ZTS_IP_MULTICAST_LOOP 7

// Multicast options
#define ZTS_IP_ADD_MEMBERSHIP  3
#define ZTS_IP_DROP_MEMBERSHIP 4

typedef struct zts_ip_mreq {
    struct zts_in_addr imr_multiaddr; /* IP multicast address of group */
    struct zts_in_addr imr_interface; /* local IP address of interface */
} zts_ip_mreq;

struct zts_in_pktinfo {
    unsigned int ipi_ifindex;    /* Interface index */
    struct zts_in_addr ipi_addr; /* Destination (from header) address */
};

#define ZTS_IPV6_JOIN_GROUP      12
#define ZTS_IPV6_ADD_MEMBERSHIP  ZTS_IPV6_JOIN_GROUP
#define ZTS_IPV6_LEAVE_GROUP     13
#define ZTS_IPV6_DROP_MEMBERSHIP ZTS_IPV6_LEAVE_GROUP

typedef struct zts_ipv6_mreq {
    struct zts_in6_addr ipv6mr_multiaddr; /*  IPv6 multicast addr */
    unsigned int ipv6mr_interface;        /*  interface index, or 0 */
} zts_ipv6_mreq;

/*
 * The Type of Service provides an indication of the abstract
 * parameters of the quality of service desired.  These parameters are
 * to be used to guide the selection of the actual service parameters
 * when transmitting a datagram through a particular network.  Several
 * networks offer service precedence, which somehow treats high
 * precedence traffic as more important than other traffic (generally
 * by accepting only traffic above a certain precedence at time of high
 * load).  The major choice is a three way tradeoff between low-delay,
 * high-reliability, and high-throughput.
 * The use of the Delay, Throughput, and Reliability indications may
 * increase the cost (in some sense) of the service.  In many networks
 * better performance for one of these parameters is coupled with worse
 * performance on another.  Except for very unusual cases at most two
 * of these three indications should be set.
 */
#define ZTS_IPTOS_TOS_MASK    0x1E
#define ZTS_IPTOS_TOS(tos)    ((tos)&ZTS_IPTOS_TOS_MASK)
#define ZTS_IPTOS_LOWDELAY    0x10
#define ZTS_IPTOS_THROUGHPUT  0x08
#define ZTS_IPTOS_RELIABILITY 0x04
#define ZTS_IPTOS_LOWCOST     0x02
#define ZTS_IPTOS_MINCOST     ZTS_IPTOS_LOWCOST

/*
 * The Network Control precedence designation is intended to be used
 * within a network only.  The actual use and control of that
 * designation is up to each network. The Internetwork Control
 * designation is intended for use by gateway control originators only.
 * If the actual use of these precedence designations is of concern to
 * a particular network, it is the responsibility of that network to
 * control the access to, and use of, those precedence designations.
 */
#define ZTS_IPTOS_PREC_MASK            0xe0
#define ZTS_IPTOS_PREC(tos)            ((tos)&ZTS_IPTOS_PREC_MASK)
#define ZTS_IPTOS_PREC_NETCONTROL      0xe0
#define ZTS_IPTOS_PREC_INTERNETCONTROL 0xc0
#define ZTS_IPTOS_PREC_CRITIC_ECP      0xa0
#define ZTS_IPTOS_PREC_FLASHOVERRIDE   0x80
#define ZTS_IPTOS_PREC_FLASH           0x60
#define ZTS_IPTOS_PREC_IMMEDIATE       0x40
#define ZTS_IPTOS_PREC_PRIORITY        0x20
#define ZTS_IPTOS_PREC_ROUTINE         0x00

ZTS_API int ZTCALL zts_bsd_setsockopt(int fd, int level, int optname, const void* optval, zts_socklen_t optlen);

ZTS_API int ZTCALL zts_bsd_getsockopt(int fd, int level, int optname, void* optval, zts_socklen_t* optlen);

ZTS_API int ZTCALL zts_bsd_getsockname(int fd, struct zts_sockaddr* addr, zts_socklen_t* addrlen);

ZTS_API int ZTCALL zts_bsd_getpeername(int fd, struct zts_sockaddr* addr, zts_socklen_t* addrlen);

ZTS_API int ZTCALL zts_bsd_close(int fd);

/* FD_SET used for lwip_select */

#define LWIP_SOCKET_OFFSET 0
#define MEMP_NUM_NETCONN   1024

#ifndef ZTS_FD_SET
#undef ZTS_FD_SETSIZE
// Make FD_SETSIZE match NUM_SOCKETS in socket.c
#define ZTS_FD_SETSIZE MEMP_NUM_NETCONN
#define ZTS_FDSETSAFESET(n, code)                                                                                      \
    do {                                                                                                               \
        if (((n)-LWIP_SOCKET_OFFSET < MEMP_NUM_NETCONN) && (((int)(n)-LWIP_SOCKET_OFFSET) >= 0)) {                     \
            code;                                                                                                      \
        }                                                                                                              \
    } while (0)
#define ZTS_FDSETSAFEGET(n, code)                                                                                      \
    (((n)-LWIP_SOCKET_OFFSET < MEMP_NUM_NETCONN) && (((int)(n)-LWIP_SOCKET_OFFSET) >= 0) ? (code) : 0)
#define ZTS_FD_SET(n, p)                                                                                               \
    ZTS_FDSETSAFESET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] |= (1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
#define ZTS_FD_CLR(n, p)                                                                                               \
    ZTS_FDSETSAFESET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] &= ~(1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
#define ZTS_FD_ISSET(n, p)                                                                                             \
    ZTS_FDSETSAFEGET(n, (p)->fd_bits[((n)-LWIP_SOCKET_OFFSET) / 8] & (1 << (((n)-LWIP_SOCKET_OFFSET) & 7)))
#define ZTS_FD_ZERO(p) memset((void*)(p), 0, sizeof(*(p)))

#elif LWIP_SOCKET_OFFSET
#error LWIP_SOCKET_OFFSET does not work with external FD_SET!
#elif ZTS_FD_SETSIZE < MEMP_NUM_NETCONN
#error "external ZTS_FD_SETSIZE too small for number of sockets"
#endif   // FD_SET

typedef struct zts_fd_set {
    unsigned char fd_bits[(ZTS_FD_SETSIZE + 7) / 8];
} zts_fd_set;

typedef struct zts_timeval {
    long tv_sec;  /* seconds */
    long tv_usec; /* and microseconds */
} zts_timeval;

ZTS_API int ZTCALL
zts_bsd_select(int nfds, zts_fd_set* readfds, zts_fd_set* writefds, zts_fd_set* exceptfds, struct zts_timeval* timeout);

// fnctl() commands
#define ZTS_F_GETFL 0x0003
#define ZTS_F_SETFL 0x0004
/* File status flags and file access modes for fnctl,
   these are bits in an int. */
#define ZTS_O_NONBLOCK 1
#define ZTS_O_NDELAY   ZTS_O_NONBLOCK
#define ZTS_O_RDONLY   2
#define ZTS_O_WRONLY   4
#define ZTS_O_RDWR     (ZTS_O_RDONLY | ZTS_O_WRONLY)

ZTS_API int ZTCALL zts_bsd_fcntl(int fd, int cmd, int flags);

#define ZTS_POLLIN   0x001
#define ZTS_POLLOUT  0x002
#define ZTS_POLLERR  0x004
#define ZTS_POLLNVAL 0x008
/* Below values are unimplemented */
#define ZTS_POLLRDNORM 0x010
#define ZTS_POLLRDBAND 0x020
#define ZTS_POLLPRI    0x040
#define ZTS_POLLWRNORM 0x080
#define ZTS_POLLWRBAND 0x100
#define ZTS_POLLHUP    0x200

typedef unsigned int zts_nfds_t;

struct zts_pollfd {
    int fd;
    short events;
    short revents;
};

ZTS_API int ZTCALL zts_bsd_poll(struct zts_pollfd* fds, zts_nfds_t nfds, int timeout);

ZTS_API int ZTCALL zts_bsd_ioctl(int fd, unsigned long request, void* argp);

ZTS_API ssize_t ZTCALL zts_bsd_send(int fd, const void* buf, size_t len, int flags);

ZTS_API ssize_t ZTCALL
zts_bsd_sendto(int fd, const void* buf, size_t len, int flags, const struct zts_sockaddr* addr, zts_socklen_t addrlen);

struct zts_iovec {
    void* iov_base;
    size_t iov_len;
};

/* */
struct zts_msghdr {
    void* msg_name;
    zts_socklen_t msg_namelen;
    struct zts_iovec* msg_iov;
    int msg_iovlen;
    void* msg_control;
    zts_socklen_t msg_controllen;
    int msg_flags;
};

/* struct msghdr->msg_flags bit field values */
#define ZTS_MSG_TRUNC  0x04
#define ZTS_MSG_CTRUNC 0x08

ZTS_API ssize_t ZTCALL zts_bsd_sendmsg(int fd, const struct zts_msghdr* msg, int flags);

ZTS_API ssize_t ZTCALL zts_bsd_recv(int fd, void* buf, size_t len, int flags);

ZTS_API ssize_t ZTCALL
zts_bsd_recvfrom(int fd, void* buf, size_t len, int flags, struct zts_sockaddr* addr, zts_socklen_t* addrlen);

ZTS_API ssize_t ZTCALL zts_bsd_recvmsg(int fd, struct zts_msghdr* msg, int flags);

ZTS_API ssize_t ZTCALL zts_bsd_read(int fd, void* buf, size_t len);

ZTS_API ssize_t ZTCALL zts_bsd_readv(int fd, const struct zts_iovec* iov, int iovcnt);

ZTS_API ssize_t ZTCALL zts_bsd_write(int fd, const void* buf, size_t len);

ZTS_API ssize_t ZTCALL zts_bsd_writev(int fd, const struct zts_iovec* iov, int iovcnt);

#define ZTS_SHUT_RD   0x0
#define ZTS_SHUT_WR   0x1
#define ZTS_SHUT_RDWR 0x2

ZTS_API int ZTCALL zts_bsd_shutdown(int fd, int how);

//----------------------------------------------------------------------------//
// Simplified socket API                                                      //
//----------------------------------------------------------------------------//

ZTS_API int ZTCALL zts_socket(int family, int type, int protocol);

ZTS_API int ZTCALL zts_connect(int fd, const char* ipstr, unsigned short port, int timeout_ms);

ZTS_API int ZTCALL zts_bind(int fd, const char* ipstr, unsigned short port);

ZTS_API int ZTCALL zts_listen(int fd, int backlog);

ZTS_API int ZTCALL zts_accept(int fd, char* remote_addr, int len, unsigned short* port);

ZTS_API ssize_t ZTCALL zts_send(int fd, const void* buf, size_t len, int flags);

ZTS_API ssize_t ZTCALL zts_recv(int fd, void* buf, size_t len, int flags);

ZTS_API ssize_t ZTCALL zts_read(int fd, void* buf, size_t len);

ZTS_API ssize_t ZTCALL zts_write(int fd, const void* buf, size_t len);

ZTS_API int ZTCALL zts_shutdown_rd(int fd);

ZTS_API int ZTCALL zts_shutdown_wr(int fd);

ZTS_API int ZTCALL zts_shutdown_rdwr(int fd);

ZTS_API int ZTCALL zts_close(int fd);

ZTS_API int ZTCALL zts_getpeername(int fd, char* remote_addr_str, int len, unsigned short* port);

ZTS_API int ZTCALL zts_getsockname(int fd, char* local_addr_str, int len, unsigned short* port);

ZTS_API int ZTCALL zts_tcp_client(const char* remote_ipstr, unsigned short remote_port);

ZTS_API int ZTCALL zts_tcp_server(
    const char* local_ipstr,
    unsigned short local_port,
    char* remote_ipstr,
    int len,
    unsigned short* remote_port);

ZTS_API int ZTCALL zts_udp_server(const char* local_ipstr, unsigned short local_port);

ZTS_API int ZTCALL zts_udp_client(const char* remote_ipstr);

ZTS_API int ZTCALL zts_set_no_delay(int fd, int enabled);

ZTS_API int ZTCALL zts_get_last_socket_error(int fd);

ZTS_API size_t ZTCALL zts_get_data_available(int fd);

ZTS_API int ZTCALL zts_get_no_delay(int fd);

ZTS_API int ZTCALL zts_set_linger(int fd, int enabled, int value);

ZTS_API int ZTCALL zts_get_linger_enabled(int fd);

ZTS_API int ZTCALL zts_get_linger_value(int fd);

ZTS_API int ZTCALL zts_get_pending_data_size(int fd);

ZTS_API int ZTCALL zts_set_reuse_addr(int fd, int enabled);

ZTS_API int ZTCALL zts_get_reuse_addr(int fd);

ZTS_API int ZTCALL zts_set_recv_timeout(int fd, int seconds, int microseconds);

ZTS_API int ZTCALL zts_get_recv_timeout(int fd);

ZTS_API int ZTCALL zts_set_send_timeout(int fd, int seconds, int microseconds);

ZTS_API int ZTCALL zts_get_send_timeout(int fd);

ZTS_API int ZTCALL zts_set_send_buf_size(int fd, int size);

ZTS_API int ZTCALL zts_get_send_buf_size(int fd);

ZTS_API int ZTCALL zts_set_recv_buf_size(int fd, int size);

ZTS_API int ZTCALL zts_get_recv_buf_size(int fd);

ZTS_API int ZTCALL zts_set_ttl(int fd, int ttl);

ZTS_API int ZTCALL zts_get_ttl(int fd);

ZTS_API int ZTCALL zts_set_blocking(int fd, int enabled);

ZTS_API int ZTCALL zts_get_blocking(int fd);

ZTS_API int ZTCALL zts_set_keepalive(int fd, int enabled);

ZTS_API int ZTCALL zts_get_keepalive(int fd);

//----------------------------------------------------------------------------//
// DNS                                                                        //
//----------------------------------------------------------------------------//

struct zts_hostent {
    char* h_name;             /* Official name of the host. */
    char** h_aliases;         /* A pointer to an array of pointers to alternative host
                                 names,   terminated by a null pointer. */
    int h_addrtype;           /* Address type. */
    int h_length;             /* The length, in bytes, of the address. */
    char** h_addr_list;       /* A pointer to an array of pointers to network
                                 addresses (in network byte order) for the host,
                                 terminated by a null pointer. */
#define h_addr h_addr_list[0] /* for backward compatibility */
};

struct zts_hostent* zts_bsd_gethostbyname(const char* name);

struct zts_ip4_addr {
    uint32_t addr;
};

struct zts_ip6_addr {
    uint32_t addr[4];
#if LWIP_IPV6_SCOPES
    uint8_t zone;
#endif /* LWIP_IPV6_SCOPES */
};

typedef struct zts_ip_addr {
    union {
        struct zts_ip6_addr ip6;
        struct zts_ip4_addr ip4;
    } u_addr;
    uint8_t type;   // ZTS_IPADDR_TYPE_V4, ZTS_IPADDR_TYPE_V6
} zts_ip_addr;

ZTS_API int ZTCALL zts_dns_set_server(uint8_t index, const zts_ip_addr* addr);

ZTS_API const zts_ip_addr* ZTCALL zts_dns_get_server(uint8_t index);

//----------------------------------------------------------------------------//
// Core query sub-API (Used for simplifying high-level language wrappers)     //
//----------------------------------------------------------------------------//

ZTS_API int ZTCALL zts_core_lock_obtain();

ZTS_API int ZTCALL zts_core_lock_release();

ZTS_API int ZTCALL zts_core_query_addr_count(uint64_t net_id);

ZTS_API int ZTCALL zts_core_query_addr(uint64_t net_id, unsigned int idx, char* addr, unsigned int len);

ZTS_API int ZTCALL zts_core_query_route_count(uint64_t net_id);

ZTS_API int ZTCALL zts_core_query_route(
    uint64_t net_id,
    unsigned int idx,
    char* target,
    char* via,
    unsigned int len,
    uint16_t* flags,
    uint16_t* metric);

ZTS_API int ZTCALL zts_core_query_path_count(uint64_t peer_id);

ZTS_API int ZTCALL zts_core_query_path(uint64_t peer_id, unsigned int idx, char* dst, unsigned int len);

ZTS_API int ZTCALL zts_core_query_mc_count(uint64_t net_id);

ZTS_API int ZTCALL zts_core_query_mc(uint64_t net_id, unsigned int idx, uint64_t* mac, uint32_t* adi);

//----------------------------------------------------------------------------//
// Utilities                                                                  //
//----------------------------------------------------------------------------//

ZTS_API int ZTCALL zts_util_sign_root_set(
    char* roots_out,
    unsigned int* roots_len,
    char* prev_key,
    unsigned int* prev_key_len,
    char* curr_key,
    unsigned int* curr_key_len,
    uint64_t id,
    uint64_t ts,
    zts_root_set_t* roots_spec);

ZTS_API void ZTCALL zts_util_delay(unsigned long milliseconds);

ZTS_API int ZTCALL zts_util_get_ip_family(const char* ipstr);

int zts_util_ipstr_to_saddr(
    const char* src_ipstr,
    unsigned short port,
    struct zts_sockaddr* dstaddr,
    zts_socklen_t* addrlen);

ZTS_API int ZTCALL
zts_util_ntop(struct zts_sockaddr* addr, zts_socklen_t addrlen, char* dst_str, int len, unsigned short* port);

//----------------------------------------------------------------------------//
// Convenience functions pulled from lwIP                                     //
//----------------------------------------------------------------------------//

char* zts_ipaddr_ntoa(const zts_ip_addr* addr);

int zts_ipaddr_aton(const char* cp, zts_ip_addr* addr);

ZTS_API const char* ZTCALL zts_inet_ntop(int family, const void* src, char* dst, zts_socklen_t size);

ZTS_API int ZTCALL zts_inet_pton(int family, const char* src, void* dst);

#ifdef __cplusplus
}   // extern "C"
#endif

#endif   // _H
```


-------------------------------

Updated on 19 May 2021 at 11:01:17 PDT
