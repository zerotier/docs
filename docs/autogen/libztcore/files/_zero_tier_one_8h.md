---
title: ZeroTierOne.h

custom_edit_url: null
---

# ZeroTierOne.h

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[ZT_RemoteTrace](/autogen/libztcore/classes/struct_z_t___remote_trace.md)**  |
| struct | **[ZT_UserMessage](/autogen/libztcore/classes/struct_z_t___user_message.md)**  |
| struct | **[ZT_NodeStatus](/autogen/libztcore/classes/struct_z_t___node_status.md)**  |
| struct | **[ZT_NodeStatistics](/autogen/libztcore/classes/struct_z_t___node_statistics.md)**  |
| struct | **[ZT_VirtualNetworkRule](/autogen/libztcore/classes/struct_z_t___virtual_network_rule.md)**  |
| struct | **[ZT_VirtualNetworkRoute](/autogen/libztcore/classes/struct_z_t___virtual_network_route.md)**  |
| struct | **[ZT_VirtualNetworkDNS](/autogen/libztcore/classes/struct_z_t___virtual_network_d_n_s.md)**  |
| struct | **[ZT_MulticastGroup](/autogen/libztcore/classes/struct_z_t___multicast_group.md)**  |
| struct | **[ZT_VirtualNetworkConfig](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md)**  |
| struct | **[ZT_VirtualNetworkList](/autogen/libztcore/classes/struct_z_t___virtual_network_list.md)**  |
| struct | **[ZT_PhysicalPathConfiguration](/autogen/libztcore/classes/struct_z_t___physical_path_configuration.md)**  |
| struct | **[ZT_PeerPhysicalPath](/autogen/libztcore/classes/struct_z_t___peer_physical_path.md)**  |
| struct | **[ZT_Peer](/autogen/libztcore/classes/struct_z_t___peer.md)**  |
| struct | **[ZT_PeerList](/autogen/libztcore/classes/struct_z_t___peer_list.md)**  |
| struct | **[ZT_Node_Callbacks](/autogen/libztcore/classes/struct_z_t___node___callbacks.md)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum| **[ZT_ResultCode](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_resultcode)** { ZT_RESULT_OK = 0, ZT_RESULT_OK_IGNORED = 1, ZT_RESULT_FATAL_ERROR_OUT_OF_MEMORY = 100, ZT_RESULT_FATAL_ERROR_DATA_STORE_FAILED = 101, ZT_RESULT_FATAL_ERROR_INTERNAL = 102, ZT_RESULT_ERROR_NETWORK_NOT_FOUND = 1000, ZT_RESULT_ERROR_UNSUPPORTED_OPERATION = 1001, ZT_RESULT_ERROR_BAD_PARAMETER = 1002} |
| enum| **[ZT_MultipathBondingPolicy](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathbondingpolicy)** { ZT_BONDING_POLICY_NONE = 0, ZT_BONDING_POLICY_ACTIVE_BACKUP = 1, ZT_BONDING_POLICY_BROADCAST = 2, ZT_BONDING_POLICY_BALANCE_RR = 3, ZT_BONDING_POLICY_BALANCE_XOR = 4, ZT_BONDING_POLICY_BALANCE_AWARE = 5} |
| enum| **[ZT_MultipathLinkSelectMethod](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathlinkselectmethod)** { ZT_MULTIPATH_RESELECTION_POLICY_ALWAYS = 0, ZT_MULTIPATH_RESELECTION_POLICY_BETTER = 1, ZT_MULTIPATH_RESELECTION_POLICY_FAILURE = 2, ZT_MULTIPATH_RESELECTION_POLICY_OPTIMIZE = 3} |
| enum| **[ZT_MultipathLinkMode](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathlinkmode)** { ZT_MULTIPATH_SLAVE_MODE_PRIMARY = 0, ZT_MULTIPATH_SLAVE_MODE_SPARE = 1} |
| enum| **[ZT_MultipathMonitorStrategy](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathmonitorstrategy)** { ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DEFAULT = 0, ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_PASSIVE = 1, ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_ACTIVE = 2, ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DYNAMIC = 3} |
| enum| **[ZT_MultipathFlowRebalanceStrategy](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathflowrebalancestrategy)** { ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_PASSIVE = 0, ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_OPPORTUNISTIC = 0, ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_AGGRESSIVE = 2} |
| enum| **[ZT_MultipathQualityWeightIndex](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_multipathqualityweightindex)** { ZT_QOS_LAT_IDX, ZT_QOS_LTM_IDX, ZT_QOS_PDV_IDX, ZT_QOS_PLR_IDX, ZT_QOS_PER_IDX, ZT_QOS_THR_IDX, ZT_QOS_THM_IDX, ZT_QOS_THV_IDX, ZT_QOS_AGE_IDX, ZT_QOS_SCP_IDX, ZT_QOS_WEIGHT_SIZE} |
| enum| **[ZT_Event](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_event)** { ZT_EVENT_UP = 0, ZT_EVENT_OFFLINE = 1, ZT_EVENT_ONLINE = 2, ZT_EVENT_DOWN = 3, ZT_EVENT_FATAL_ERROR_IDENTITY_COLLISION = 4, ZT_EVENT_TRACE = 5, ZT_EVENT_USER_MESSAGE = 6, ZT_EVENT_REMOTE_TRACE = 7} |
| enum| **[ZT_VirtualNetworkStatus](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_virtualnetworkstatus)** { ZT_NETWORK_STATUS_REQUESTING_CONFIGURATION = 0, ZT_NETWORK_STATUS_OK = 1, ZT_NETWORK_STATUS_ACCESS_DENIED = 2, ZT_NETWORK_STATUS_NOT_FOUND = 3, ZT_NETWORK_STATUS_PORT_ERROR = 4, ZT_NETWORK_STATUS_CLIENT_TOO_OLD = 5} |
| enum| **[ZT_VirtualNetworkType](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_virtualnetworktype)** { ZT_NETWORK_TYPE_PRIVATE = 0, ZT_NETWORK_TYPE_PUBLIC = 1} |
| enum| **[ZT_VirtualNetworkRuleType](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_virtualnetworkruletype)** { ZT_NETWORK_RULE_ACTION_DROP = 0, ZT_NETWORK_RULE_ACTION_ACCEPT = 1, ZT_NETWORK_RULE_ACTION_TEE = 2, ZT_NETWORK_RULE_ACTION_WATCH = 3, ZT_NETWORK_RULE_ACTION_REDIRECT = 4, ZT_NETWORK_RULE_ACTION_BREAK = 5, ZT_NETWORK_RULE_ACTION_PRIORITY = 6, ZT_NETWORK_RULE_ACTION__MAX_ID = 15, ZT_NETWORK_RULE_MATCH_SOURCE_ZEROTIER_ADDRESS = 24, ZT_NETWORK_RULE_MATCH_DEST_ZEROTIER_ADDRESS = 25, ZT_NETWORK_RULE_MATCH_VLAN_ID = 26, ZT_NETWORK_RULE_MATCH_VLAN_PCP = 27, ZT_NETWORK_RULE_MATCH_VLAN_DEI = 28, ZT_NETWORK_RULE_MATCH_MAC_SOURCE = 29, ZT_NETWORK_RULE_MATCH_MAC_DEST = 30, ZT_NETWORK_RULE_MATCH_IPV4_SOURCE = 31, ZT_NETWORK_RULE_MATCH_IPV4_DEST = 32, ZT_NETWORK_RULE_MATCH_IPV6_SOURCE = 33, ZT_NETWORK_RULE_MATCH_IPV6_DEST = 34, ZT_NETWORK_RULE_MATCH_IP_TOS = 35, ZT_NETWORK_RULE_MATCH_IP_PROTOCOL = 36, ZT_NETWORK_RULE_MATCH_ETHERTYPE = 37, ZT_NETWORK_RULE_MATCH_ICMP = 38, ZT_NETWORK_RULE_MATCH_IP_SOURCE_PORT_RANGE = 39, ZT_NETWORK_RULE_MATCH_IP_DEST_PORT_RANGE = 40, ZT_NETWORK_RULE_MATCH_CHARACTERISTICS = 41, ZT_NETWORK_RULE_MATCH_FRAME_SIZE_RANGE = 42, ZT_NETWORK_RULE_MATCH_RANDOM = 43, ZT_NETWORK_RULE_MATCH_TAGS_DIFFERENCE = 44, ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_AND = 45, ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_OR = 46, ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_XOR = 47, ZT_NETWORK_RULE_MATCH_TAGS_EQUAL = 48, ZT_NETWORK_RULE_MATCH_TAG_SENDER = 49, ZT_NETWORK_RULE_MATCH_TAG_RECEIVER = 50, ZT_NETWORK_RULE_MATCH_INTEGER_RANGE = 51, ZT_NETWORK_RULE_MATCH__MAX_ID = 63} |
| enum| **[ZT_VirtualNetworkConfigOperation](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_virtualnetworkconfigoperation)** { ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_UP = 1, ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_CONFIG_UPDATE = 2, ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DOWN = 3, ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DESTROY = 4} |
| enum| **[ZT_PeerRole](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_peerrole)** { ZT_PEER_ROLE_LEAF = 0, ZT_PEER_ROLE_MOON = 1, ZT_PEER_ROLE_PLANET = 2} |
| enum| **[ZT_Vendor](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_vendor)** { ZT_VENDOR_UNSPECIFIED = 0, ZT_VENDOR_ZEROTIER = 1} |
| enum| **[ZT_Platform](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_platform)** { ZT_PLATFORM_UNSPECIFIED = 0, ZT_PLATFORM_LINUX = 1, ZT_PLATFORM_WINDOWS = 2, ZT_PLATFORM_MACOS = 3, ZT_PLATFORM_ANDROID = 4, ZT_PLATFORM_IOS = 5, ZT_PLATFORM_SOLARIS_SMARTOS = 6, ZT_PLATFORM_FREEBSD = 7, ZT_PLATFORM_NETBSD = 8, ZT_PLATFORM_OPENBSD = 9, ZT_PLATFORM_RISCOS = 10, ZT_PLATFORM_VXWORKS = 11, ZT_PLATFORM_FREERTOS = 12, ZT_PLATFORM_SYSBIOS = 13, ZT_PLATFORM_HURD = 14, ZT_PLATFORM_WEB = 15} |
| enum| **[ZT_Architecture](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_architecture)** { ZT_ARCHITECTURE_UNSPECIFIED = 0, ZT_ARCHITECTURE_X86 = 1, ZT_ARCHITECTURE_X64 = 2, ZT_ARCHITECTURE_ARM32 = 3, ZT_ARCHITECTURE_ARM64 = 4, ZT_ARCHITECTURE_MIPS32 = 5, ZT_ARCHITECTURE_MIPS64 = 6, ZT_ARCHITECTURE_POWER32 = 7, ZT_ARCHITECTURE_POWER64 = 8, ZT_ARCHITECTURE_OPENRISC32 = 9, ZT_ARCHITECTURE_OPENRISC64 = 10, ZT_ARCHITECTURE_SPARC32 = 11, ZT_ARCHITECTURE_SPARC64 = 12, ZT_ARCHITECTURE_DOTNET_CLR = 13, ZT_ARCHITECTURE_JAVA_JVM = 14, ZT_ARCHITECTURE_WEB = 15, ZT_ARCHITECTURE_S390X = 16} |
| enum| **[ZT_StateObjectType](/autogen/libztcore/files/_zero_tier_one_8h.md#enum-zt_stateobjecttype)** { ZT_STATE_OBJECT_NULL = 0, ZT_STATE_OBJECT_IDENTITY_PUBLIC = 1, ZT_STATE_OBJECT_IDENTITY_SECRET = 2, ZT_STATE_OBJECT_PLANET = 3, ZT_STATE_OBJECT_MOON = 4, ZT_STATE_OBJECT_PEER = 5, ZT_STATE_OBJECT_NETWORK_CONFIG = 6} |
| typedef void | **[ZT_Node](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_node)**  |
| typedef int(*)(ZT_Node *, void *, void *, uint64_t, void **, enum ZT_VirtualNetworkConfigOperation, const ZT_VirtualNetworkConfig *) | **[ZT_VirtualNetworkConfigFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_virtualnetworkconfigfunction)**  |
| typedef void(*)(ZT_Node *, void *, void *, uint64_t, void **, uint64_t, uint64_t, unsigned int, unsigned int, const void *, unsigned int) | **[ZT_VirtualNetworkFrameFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_virtualnetworkframefunction)**  |
| typedef void(*)(ZT_Node *, void *, void *, enum ZT_Event, const void *) | **[ZT_EventCallback](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_eventcallback)**  |
| typedef void(*)(ZT_Node *, void *, void *, enum ZT_StateObjectType, const uint64_t[2], const void *, int) | **[ZT_StatePutFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_stateputfunction)**  |
| typedef int(*)(ZT_Node *, void *, void *, enum ZT_StateObjectType, const uint64_t[2], void *, unsigned int) | **[ZT_StateGetFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_stategetfunction)**  |
| typedef int(*)(ZT_Node *, void *, void *, int64_t, const struct sockaddr_storage *, const void *, unsigned int, unsigned int) | **[ZT_WirePacketSendFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_wirepacketsendfunction)**  |
| typedef int(*)(ZT_Node *, void *, void *, uint64_t, int64_t, const struct sockaddr_storage *) | **[ZT_PathCheckFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_pathcheckfunction)**  |
| typedef int(*)(ZT_Node *, void *, void *, uint64_t, int, struct sockaddr_storage *) | **[ZT_PathLookupFunction](/autogen/libztcore/files/_zero_tier_one_8h.md#typedef-zt_pathlookupfunction)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| enum ZT_ResultCode | **[ZT_Node_new](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_new)**(ZT_Node ** node, void * uptr, void * tptr, const struct [ZT_Node_Callbacks](/autogen/libztcore/classes/struct_z_t___node___callbacks.md) * callbacks, int64_t now) |
| void | **[ZT_Node_delete](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_delete)**(ZT_Node * node) |
| enum ZT_ResultCode | **[ZT_Node_processWirePacket](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_processwirepacket)**(ZT_Node * node, void * tptr, int64_t now, int64_t localSocket, const struct sockaddr_storage * remoteAddress, const void * packetData, unsigned int packetLength, volatile int64_t * nextBackgroundTaskDeadline) |
| enum ZT_ResultCode | **[ZT_Node_processVirtualNetworkFrame](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_processvirtualnetworkframe)**(ZT_Node * node, void * tptr, int64_t now, uint64_t nwid, uint64_t sourceMac, uint64_t destMac, unsigned int etherType, unsigned int vlanId, const void * frameData, unsigned int frameLength, volatile int64_t * nextBackgroundTaskDeadline) |
| enum ZT_ResultCode | **[ZT_Node_processBackgroundTasks](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_processbackgroundtasks)**(ZT_Node * node, void * tptr, int64_t now, volatile int64_t * nextBackgroundTaskDeadline) |
| enum ZT_ResultCode | **[ZT_Node_join](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_join)**(ZT_Node * node, uint64_t nwid, void * uptr, void * tptr) |
| enum ZT_ResultCode | **[ZT_Node_leave](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_leave)**(ZT_Node * node, uint64_t nwid, void ** uptr, void * tptr) |
| enum ZT_ResultCode | **[ZT_Node_multicastSubscribe](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_multicastsubscribe)**(ZT_Node * node, void * tptr, uint64_t nwid, uint64_t multicastGroup, unsigned long multicastAdi) |
| enum ZT_ResultCode | **[ZT_Node_multicastUnsubscribe](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_multicastunsubscribe)**(ZT_Node * node, uint64_t nwid, uint64_t multicastGroup, unsigned long multicastAdi) |
| enum ZT_ResultCode | **[ZT_Node_orbit](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_orbit)**(ZT_Node * node, void * tptr, uint64_t moonWorldId, uint64_t moonSeed) |
| enum ZT_ResultCode | **[ZT_Node_deorbit](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_deorbit)**(ZT_Node * node, void * tptr, uint64_t moonWorldId) |
| uint64_t | **[ZT_Node_address](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_address)**(ZT_Node * node) |
| void | **[ZT_Node_status](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_status)**(ZT_Node * node, [ZT_NodeStatus](/autogen/libztcore/classes/struct_z_t___node_status.md) * status) |
| [ZT_PeerList](/autogen/libztcore/classes/struct_z_t___peer_list.md) * | **[ZT_Node_peers](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_peers)**(ZT_Node * node) |
| [ZT_VirtualNetworkConfig](/autogen/libztcore/classes/struct_z_t___virtual_network_config.md) * | **[ZT_Node_networkConfig](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_networkconfig)**(ZT_Node * node, uint64_t nwid) |
| [ZT_VirtualNetworkList](/autogen/libztcore/classes/struct_z_t___virtual_network_list.md) * | **[ZT_Node_networks](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_networks)**(ZT_Node * node) |
| void | **[ZT_Node_freeQueryResult](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_freequeryresult)**(ZT_Node * node, void * qr) |
| int | **[ZT_Node_addLocalInterfaceAddress](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_addlocalinterfaceaddress)**(ZT_Node * node, const struct sockaddr_storage * addr) |
| void | **[ZT_Node_clearLocalInterfaceAddresses](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_clearlocalinterfaceaddresses)**(ZT_Node * node) |
| int | **[ZT_Node_sendUserMessage](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_sendusermessage)**(ZT_Node * node, void * tptr, uint64_t dest, uint64_t typeId, const void * data, unsigned int len) |
| void | **[ZT_Node_setNetconfMaster](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_setnetconfmaster)**(ZT_Node * node, void * networkConfigMasterInstance) |
| enum ZT_ResultCode | **[ZT_Node_setPhysicalPathConfiguration](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_node_setphysicalpathconfiguration)**(ZT_Node * node, const struct sockaddr_storage * pathNetwork, const [ZT_PhysicalPathConfiguration](/autogen/libztcore/classes/struct_z_t___physical_path_configuration.md) * pathConfig) |
| void | **[ZT_version](/autogen/libztcore/files/_zero_tier_one_8h.md#function-zt_version)**(int * major, int * minor, int * revision) |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[ZT_SDK_API](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_sdk_api)**  |
|  | **[ZT_DEFAULT_PORT](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_default_port)**  |
|  | **[ZT_MIN_MTU](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_min_mtu)**  |
|  | **[ZT_MAX_MTU](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_mtu)**  |
|  | **[ZT_MIN_PHYSMTU](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_min_physmtu)**  |
|  | **[ZT_DEFAULT_PHYSMTU](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_default_physmtu)**  |
|  | **[ZT_MAX_PHYSPAYLOAD](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_physpayload)**  |
|  | **[ZT_MAX_HEADROOM](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_headroom)**  |
|  | **[ZT_MAX_PHYSMTU](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_physmtu)**  |
|  | **[ZT_MAX_REMOTE_TRACE_SIZE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_remote_trace_size)**  |
|  | **[ZT_MAX_NETWORK_SHORT_NAME_LENGTH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_short_name_length)**  |
|  | **[ZT_MAX_NETWORK_ROUTES](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_routes)**  |
|  | **[ZT_MAX_ZT_ASSIGNED_ADDRESSES](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_zt_assigned_addresses)**  |
|  | **[ZT_MAX_NETWORK_SPECIALISTS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_specialists)**  |
|  | **[ZT_MAX_NETWORK_MULTICAST_SUBSCRIPTIONS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_multicast_subscriptions)**  |
|  | **[ZT_RULES_ENGINE_REVISION](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rules_engine_revision)**  |
|  | **[ZT_MAX_NETWORK_RULES](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_rules)**  |
|  | **[ZT_MAX_NETWORK_CAPABILITIES](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_capabilities)**  |
|  | **[ZT_MAX_NETWORK_TAGS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_network_tags)**  |
|  | **[ZT_MAX_PEER_NETWORK_PATHS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_peer_network_paths)**  |
|  | **[ZT_MAX_CONFIGURABLE_PATHS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_configurable_paths)**  |
|  | **[ZT_MAX_CAPABILITY_RULES](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_capability_rules)**  |
|  | **[ZT_MAX_CERTIFICATES_OF_OWNERSHIP](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_certificates_of_ownership)**  |
|  | **[ZT_MAX_CAPABILITY_CUSTODY_CHAIN_LENGTH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_capability_custody_chain_length)**  |
|  | **[ZT_MAX_MULTICAST_SUBSCRIPTIONS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_multicast_subscriptions)**  |
|  | **[ZT_PATH_LINK_QUALITY_MAX](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_path_link_quality_max)**  |
|  | **[ZT_MAX_DNS_SERVERS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_max_dns_servers)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_INBOUND](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_inbound)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_MULTICAST](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_multicast)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_BROADCAST](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_broadcast)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_SENDER_IP_AUTHENTICATED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_sender_ip_authenticated)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_SENDER_MAC_AUTHENTICATED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_sender_mac_authenticated)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_0](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_reserved_0)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_1](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_reserved_1)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_2](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_reserved_2)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_NS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_ns)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_CWR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_cwr)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_ECE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_ece)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_URG](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_urg)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_ACK](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_ack)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_PSH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_psh)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_RST](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_rst)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_SYN](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_syn)**  |
|  | **[ZT_RULE_PACKET_CHARACTERISTICS_TCP_FIN](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_rule_packet_characteristics_tcp_fin)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__EVENT](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__event)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__NODE_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__node_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__PACKET_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__packet_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__PACKET_VERB](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__packet_verb)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__packet_trusted_path_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_APPROVED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__packet_trusted_path_approved)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__PACKET_HOPS](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__packet_hops)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__REMOTE_ZTADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__remote_ztaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__REMOTE_PHYADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__remote_phyaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__LOCAL_ZTADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__local_ztaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__LOCAL_PHYADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__local_phyaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__LOCAL_SOCKET](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__local_socket)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__IP_SCOPE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__ip_scope)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__NETWORK_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__network_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__SOURCE_ZTADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__source_ztaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__DEST_ZTADDR](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__dest_ztaddr)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__SOURCE_MAC](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__source_mac)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__DEST_MAC](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__dest_mac)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__ETHERTYPE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__ethertype)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__VLAN_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__vlan_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FRAME_LENGTH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__frame_length)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FRAME_DATA](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__frame_data)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_NOTEE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_flag_notee)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_INBOUND](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_flag_inbound)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_RESULT](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_result)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_BASE_RULE_LOG](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_base_rule_log)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_CAP_RULE_LOG](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_cap_rule_log)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__FILTER_CAP_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__filter_cap_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TYPE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_type)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_id)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TIMESTAMP](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_timestamp)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_INFO](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_info)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ISSUED_TO](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_issued_to)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__CREDENTIAL_REVOCATION_TARGET](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__credential_revocation_target)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__REASON](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__reason)**  |
|  | **[ZT_REMOTE_TRACE_FIELD__NETWORK_CONTROLLER_ID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_field__network_controller_id)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__resetting_paths_in_scope)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_confirming_unknown_path)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_learned_new_path)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_redirected)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__packet_mac_failure)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PACKET_INVALID](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__packet_invalid)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__dropped_hello)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__outgoing_network_frame_dropped)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__incoming_network_access_denied)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__incoming_network_frame_dropped)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__credential_rejected)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__credential_accepted)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__network_config_request_sent)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__network_filter_trace)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__resetting_paths_in_scope_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_confirming_unknown_path_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_learned_new_path_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__peer_redirected_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__packet_mac_failure_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__PACKET_INVALID_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__packet_invalid_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__dropped_hello_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__outgoing_network_frame_dropped_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__incoming_network_access_denied_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__incoming_network_frame_dropped_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__credential_rejected_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__credential_accepted_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__network_config_request_sent_s)**  |
|  | **[ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE_S](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_remote_trace_event__network_filter_trace_s)**  |
|  | **[ZT_ResultCode_isFatal](/autogen/libztcore/files/_zero_tier_one_8h.md#define-zt_resultcode_isfatal)**(x)  |

## Types Documentation

### enum ZT_ResultCode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_RESULT_OK | 0|  Operation completed normally  |
| ZT_RESULT_OK_IGNORED | 1|  Call produced no error but no action was taken  |
| ZT_RESULT_FATAL_ERROR_OUT_OF_MEMORY | 100|  Ran out of memory  |
| ZT_RESULT_FATAL_ERROR_DATA_STORE_FAILED | 101|  Data store is not writable or has failed  |
| ZT_RESULT_FATAL_ERROR_INTERNAL | 102|  Internal error (e.g. unexpected exception indicating bug or build problem)  |
| ZT_RESULT_ERROR_NETWORK_NOT_FOUND | 1000|  Network ID not valid  |
| ZT_RESULT_ERROR_UNSUPPORTED_OPERATION | 1001|  The requested operation is not supported on this version or build  |
| ZT_RESULT_ERROR_BAD_PARAMETER | 1002|  The requested operation was given a bad parameter or was called in an invalid state  |




Function return code: OK (0) or error results

Use ZT_ResultCode_isFatal() to check for a fatal error. If a fatal error occurs, the node should be considered to not be working correctly. These indicate serious problems like an inaccessible data store or a compile problem. 


### enum ZT_MultipathBondingPolicy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_BONDING_POLICY_NONE | 0|  Normal operation. No fault tolerance, no load balancing  |
| ZT_BONDING_POLICY_ACTIVE_BACKUP | 1|  Sends traffic out on only one path at a time. Configurable immediate fail-over.  |
| ZT_BONDING_POLICY_BROADCAST | 2|  Sends traffic out on all paths  |
| ZT_BONDING_POLICY_BALANCE_RR | 3|  Stripes packets across all paths  |
| ZT_BONDING_POLICY_BALANCE_XOR | 4|  Packets destined for specific peers will always be sent over the same path.  |
| ZT_BONDING_POLICY_BALANCE_AWARE | 5|  Balances flows among all paths according to path performance  |




Multipath bonding policy 


### enum ZT_MultipathLinkSelectMethod

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_MULTIPATH_RESELECTION_POLICY_ALWAYS | 0|  Primary link regains status as active link whenever it comes back up (default when links are explicitly specified)  |
| ZT_MULTIPATH_RESELECTION_POLICY_BETTER | 1|  Primary link regains status as active link when it comes back up and (if) it is better than the currently-active link.  |
| ZT_MULTIPATH_RESELECTION_POLICY_FAILURE | 2|  Primary link regains status as active link only if the currently-active link fails.  |
| ZT_MULTIPATH_RESELECTION_POLICY_OPTIMIZE | 3|  The primary link can change if a superior path is detected. (default if user provides no fail-over guidance)  |




Multipath active re-selection policy (linkSelectMethod) 


### enum ZT_MultipathLinkMode

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_MULTIPATH_SLAVE_MODE_PRIMARY | 0|   |
| ZT_MULTIPATH_SLAVE_MODE_SPARE | 1|   |




Mode of multipath link interface 


### enum ZT_MultipathMonitorStrategy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DEFAULT | 0|  Use bonding policy's default strategy  |
| ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_PASSIVE | 1|  Does not actively send probes to judge aliveness, will rely on conventional traffic and summary statistics.  |
| ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_ACTIVE | 2|  Sends probes at a constant rate to judge aliveness.  |
| ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DYNAMIC | 3|  Sends probes at varying rates which correlate to native traffic loads to judge aliveness.  |




Strategy for path monitoring 


### enum ZT_MultipathFlowRebalanceStrategy

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_PASSIVE | 0|  Flows will only be re-balanced among links during assignment or failover. This minimizes the possibility of sequence reordering and is thus the default setting.  |
| ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_OPPORTUNISTIC | 0|  Flows that are active may be re-assigned to a new more suitable link if it can be done without disrupting the flow. This setting can sometimes cause sequence re-ordering.  |
| ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_AGGRESSIVE | 2|  Flows will be continuously re-assigned the most suitable link in order to maximize "balance". This can often cause sequence reordering and is thus only reccomended for protocols like UDP.  |




Strategy for re-balancing protocol flows 


### enum ZT_MultipathQualityWeightIndex

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_QOS_LAT_IDX | |   |
| ZT_QOS_LTM_IDX | |   |
| ZT_QOS_PDV_IDX | |   |
| ZT_QOS_PLR_IDX | |   |
| ZT_QOS_PER_IDX | |   |
| ZT_QOS_THR_IDX | |   |
| ZT_QOS_THM_IDX | |   |
| ZT_QOS_THV_IDX | |   |
| ZT_QOS_AGE_IDX | |   |
| ZT_QOS_SCP_IDX | |   |
| ZT_QOS_WEIGHT_SIZE | |   |




Indices for the path quality weight vector 


### enum ZT_Event

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_EVENT_UP | 0|  Node has been initialized

This is the first event generated, and is always sent. It may occur before Node's constructor returns.

Meta-data: none  |
| ZT_EVENT_OFFLINE | 1|  Node is offline &ndash; network does not seem to be reachable by any available strategy

Meta-data: none  |
| ZT_EVENT_ONLINE | 2|  Node is online &ndash; at least one upstream node appears reachable

Meta-data: none  |
| ZT_EVENT_DOWN | 3|  Node is shutting down

This is generated within Node's destructor when it is being shut down. It's done for convenience, since cleaning up other state in the event handler may appear more idiomatic.

Meta-data: none  |
| ZT_EVENT_FATAL_ERROR_IDENTITY_COLLISION | 4|  Your identity has collided with another node's ZeroTier address

This happens if two different public keys both hash (via the algorithm in Identity::generate()) to the same 40-bit ZeroTier address.

This is something you should "never" see, where "never" is defined as once per 2^39 new node initializations / identity creations. If you do see it, you're going to see it very soon after a node is first initialized.

This is reported as an event rather than a return code since it's detected asynchronously via error messages from authoritative nodes.

If this occurs, you must shut down and delete the node, delete the identity.secret record/file from the data store, and restart to generate a new identity. If you don't do this, you will not be able to communicate with other nodes.

We'd automate this process, but we don't think silently deleting private keys or changing our address without telling the calling code is good form. It violates the principle of least surprise.

You can technically get away with not handling this, but we recommend doing so in a mature reliable application. Besides, handling this condition is a good way to make sure it never arises. It's like how umbrellas prevent rain and smoke detectors prevent fires. They do, right?

Meta-data: none  |
| ZT_EVENT_TRACE | 5|  Trace (debugging) message

These events are only generated if this is a TRACE-enabled build.

Meta-data: C string, TRACE message  |
| ZT_EVENT_USER_MESSAGE | 6|  VERB_USER_MESSAGE received

These are generated when a VERB_USER_MESSAGE packet is received via ZeroTier VL1.

Meta-data: [ZT_UserMessage](/autogen/libztcore/classes/struct_z_t___user_message.md) structure  |
| ZT_EVENT_REMOTE_TRACE | 7|  Remote trace received

These are generated when a VERB_REMOTE_TRACE is received. Note that any node can fling one of these at us. It is your responsibility to filter and determine if it's worth paying attention to. If it's not just drop it. Most nodes that are not active controllers ignore these, and controllers only save them if they pertain to networks with remote tracing enabled.

Meta-data: [ZT_RemoteTrace](/autogen/libztcore/classes/struct_z_t___remote_trace.md) structure  |




Status codes sent to status update callback when things happen 


### enum ZT_VirtualNetworkStatus

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_NETWORK_STATUS_REQUESTING_CONFIGURATION | 0|  Waiting for network configuration (also means revision == 0)  |
| ZT_NETWORK_STATUS_OK | 1|  Configuration received and we are authorized  |
| ZT_NETWORK_STATUS_ACCESS_DENIED | 2|  Netconf master told us 'nope'  |
| ZT_NETWORK_STATUS_NOT_FOUND | 3|  Netconf master exists, but this virtual network does not  |
| ZT_NETWORK_STATUS_PORT_ERROR | 4|  Initialization of network failed or other internal error  |
| ZT_NETWORK_STATUS_CLIENT_TOO_OLD | 5|  ZeroTier core version too old  |




Virtual network status codes 


### enum ZT_VirtualNetworkType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_NETWORK_TYPE_PRIVATE | 0|  Private networks are authorized via certificates of membership  |
| ZT_NETWORK_TYPE_PUBLIC | 1|  Public networks have no access control &ndash; they'll always be AUTHORIZED  |




Virtual network type codes 


### enum ZT_VirtualNetworkRuleType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_NETWORK_RULE_ACTION_DROP | 0|  Drop frame  |
| ZT_NETWORK_RULE_ACTION_ACCEPT | 1|  Accept and pass frame  |
| ZT_NETWORK_RULE_ACTION_TEE | 2|  Forward a copy of this frame to an observer (by ZT address)  |
| ZT_NETWORK_RULE_ACTION_WATCH | 3|  Exactly like TEE but mandates ACKs from observer  |
| ZT_NETWORK_RULE_ACTION_REDIRECT | 4|  Drop and redirect this frame to another node (by ZT address)  |
| ZT_NETWORK_RULE_ACTION_BREAK | 5|  Stop evaluating rule set (drops unless there are capabilities, etc.)  |
| ZT_NETWORK_RULE_ACTION_PRIORITY | 6|  Place a matching frame in the specified QoS bucket  |
| ZT_NETWORK_RULE_ACTION__MAX_ID | 15|  Maximum ID for an ACTION, anything higher is a MATCH  |
| ZT_NETWORK_RULE_MATCH_SOURCE_ZEROTIER_ADDRESS | 24|   |
| ZT_NETWORK_RULE_MATCH_DEST_ZEROTIER_ADDRESS | 25|   |
| ZT_NETWORK_RULE_MATCH_VLAN_ID | 26|   |
| ZT_NETWORK_RULE_MATCH_VLAN_PCP | 27|   |
| ZT_NETWORK_RULE_MATCH_VLAN_DEI | 28|   |
| ZT_NETWORK_RULE_MATCH_MAC_SOURCE | 29|   |
| ZT_NETWORK_RULE_MATCH_MAC_DEST | 30|   |
| ZT_NETWORK_RULE_MATCH_IPV4_SOURCE | 31|   |
| ZT_NETWORK_RULE_MATCH_IPV4_DEST | 32|   |
| ZT_NETWORK_RULE_MATCH_IPV6_SOURCE | 33|   |
| ZT_NETWORK_RULE_MATCH_IPV6_DEST | 34|   |
| ZT_NETWORK_RULE_MATCH_IP_TOS | 35|   |
| ZT_NETWORK_RULE_MATCH_IP_PROTOCOL | 36|   |
| ZT_NETWORK_RULE_MATCH_ETHERTYPE | 37|   |
| ZT_NETWORK_RULE_MATCH_ICMP | 38|   |
| ZT_NETWORK_RULE_MATCH_IP_SOURCE_PORT_RANGE | 39|   |
| ZT_NETWORK_RULE_MATCH_IP_DEST_PORT_RANGE | 40|   |
| ZT_NETWORK_RULE_MATCH_CHARACTERISTICS | 41|   |
| ZT_NETWORK_RULE_MATCH_FRAME_SIZE_RANGE | 42|   |
| ZT_NETWORK_RULE_MATCH_RANDOM | 43|   |
| ZT_NETWORK_RULE_MATCH_TAGS_DIFFERENCE | 44|   |
| ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_AND | 45|   |
| ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_OR | 46|   |
| ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_XOR | 47|   |
| ZT_NETWORK_RULE_MATCH_TAGS_EQUAL | 48|   |
| ZT_NETWORK_RULE_MATCH_TAG_SENDER | 49|   |
| ZT_NETWORK_RULE_MATCH_TAG_RECEIVER | 50|   |
| ZT_NETWORK_RULE_MATCH_INTEGER_RANGE | 51|   |
| ZT_NETWORK_RULE_MATCH__MAX_ID | 63|  Maximum ID allowed for a MATCH entry in the rules table  |




The type of a virtual network rules table entry

These must be from 0 to 63 since the most significant two bits of each rule type are NOT (MSB) and AND/OR.

Each rule is composed of zero or more MATCHes followed by an ACTION. An ACTION with no MATCHes is always taken. 


### enum ZT_VirtualNetworkConfigOperation

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_UP | 1|  Network is coming up (either for the first time or after service restart)  |
| ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_CONFIG_UPDATE | 2|  Network configuration has been updated  |
| ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DOWN | 3|  Network is going down (not permanently)  |
| ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DESTROY | 4|  Network is going down permanently (leave/delete)  |




Virtual network configuration update type 


### enum ZT_PeerRole

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_PEER_ROLE_LEAF | 0|   |
| ZT_PEER_ROLE_MOON | 1|   |
| ZT_PEER_ROLE_PLANET | 2|   |




What trust hierarchy role does this peer have? 


### enum ZT_Vendor

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_VENDOR_UNSPECIFIED | 0|   |
| ZT_VENDOR_ZEROTIER | 1|   |




Vendor ID 


### enum ZT_Platform

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_PLATFORM_UNSPECIFIED | 0|   |
| ZT_PLATFORM_LINUX | 1|   |
| ZT_PLATFORM_WINDOWS | 2|   |
| ZT_PLATFORM_MACOS | 3|   |
| ZT_PLATFORM_ANDROID | 4|   |
| ZT_PLATFORM_IOS | 5|   |
| ZT_PLATFORM_SOLARIS_SMARTOS | 6|   |
| ZT_PLATFORM_FREEBSD | 7|   |
| ZT_PLATFORM_NETBSD | 8|   |
| ZT_PLATFORM_OPENBSD | 9|   |
| ZT_PLATFORM_RISCOS | 10|   |
| ZT_PLATFORM_VXWORKS | 11|   |
| ZT_PLATFORM_FREERTOS | 12|   |
| ZT_PLATFORM_SYSBIOS | 13|   |
| ZT_PLATFORM_HURD | 14|   |
| ZT_PLATFORM_WEB | 15|   |




Platform type 


### enum ZT_Architecture

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_ARCHITECTURE_UNSPECIFIED | 0|   |
| ZT_ARCHITECTURE_X86 | 1|   |
| ZT_ARCHITECTURE_X64 | 2|   |
| ZT_ARCHITECTURE_ARM32 | 3|   |
| ZT_ARCHITECTURE_ARM64 | 4|   |
| ZT_ARCHITECTURE_MIPS32 | 5|   |
| ZT_ARCHITECTURE_MIPS64 | 6|   |
| ZT_ARCHITECTURE_POWER32 | 7|   |
| ZT_ARCHITECTURE_POWER64 | 8|   |
| ZT_ARCHITECTURE_OPENRISC32 | 9|   |
| ZT_ARCHITECTURE_OPENRISC64 | 10|   |
| ZT_ARCHITECTURE_SPARC32 | 11|   |
| ZT_ARCHITECTURE_SPARC64 | 12|   |
| ZT_ARCHITECTURE_DOTNET_CLR | 13|   |
| ZT_ARCHITECTURE_JAVA_JVM | 14|   |
| ZT_ARCHITECTURE_WEB | 15|   |
| ZT_ARCHITECTURE_S390X | 16|   |




Architecture type 


### enum ZT_StateObjectType

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| ZT_STATE_OBJECT_NULL | 0|  Null object &ndash; ignored  |
| ZT_STATE_OBJECT_IDENTITY_PUBLIC | 1|  Public address and public key

Object ID: this node's address if known, or 0 if unknown (first query) Canonical path: $HOME/identity.public Persistence: required  |
| ZT_STATE_OBJECT_IDENTITY_SECRET | 2|  Full identity with secret key

Object ID: this node's address if known, or 0 if unknown (first query) Canonical path: $HOME/identity.secret Persistence: required, should be stored with restricted permissions e.g. mode 0600 on *nix  |
| ZT_STATE_OBJECT_PLANET | 3|  The planet (there is only one per... well... planet!)

Object ID: world ID of planet, or 0 if unknown (first query) Canonical path: $HOME/planet Persistence: recommended  |
| ZT_STATE_OBJECT_MOON | 4|  A moon (federated root set)

Object ID: world ID of moon Canonical path: $HOME/moons.d/$ID.moon (16-digit hex ID) Persistence: required if moon memberships should persist  |
| ZT_STATE_OBJECT_PEER | 5|  Peer and related state

Object ID: peer address Canonical path: $HOME/peers.d/$ID (10-digit address Persistence: optional, can be cleared at any time  |
| ZT_STATE_OBJECT_NETWORK_CONFIG | 6|  Network configuration

Object ID: peer address Canonical path: $HOME/networks.d/$NETWORKID.conf (16-digit hex ID) Persistence: required if network memberships should persist  |




ZeroTier core state objects 


### typedef ZT_Node

```cpp
typedef void ZT_Node;
```


An instance of a ZeroTier One node (opaque) 


### typedef ZT_VirtualNetworkConfigFunction

```cpp
typedef int(* ZT_VirtualNetworkConfigFunction) (ZT_Node *, void *, void *, uint64_t, void **, enum ZT_VirtualNetworkConfigOperation, const ZT_VirtualNetworkConfig *);
```


Callback called to update virtual network port configuration

This can be called at any time to update the configuration of a virtual network port. The parameter after the network ID specifies whether this port is being brought up, updated, brought down, or permanently deleted.

This in turn should be used by the underlying implementation to create and configure tap devices at the OS (or virtual network stack) layer.

The supplied config pointer is not guaranteed to remain valid, so make a copy if you want one.

This should not call multicastSubscribe() or other network-modifying methods, as this could cause a deadlock in multithreaded or interrupt driven environments.

This must return 0 on success. It can return any OS-dependent error code on failure, and this results in the network being placed into the PORT_ERROR state. 


### typedef ZT_VirtualNetworkFrameFunction

```cpp
typedef void(* ZT_VirtualNetworkFrameFunction) (ZT_Node *, void *, void *, uint64_t, void **, uint64_t, uint64_t, unsigned int, unsigned int, const void *, unsigned int);
```


Function to send a frame out to a virtual network port

Parameters: (1) node, (2) user ptr, (3) network ID, (4) source MAC, (5) destination MAC, (6) ethertype, (7) VLAN ID, (8) frame data, (9) frame length. 


### typedef ZT_EventCallback

```cpp
typedef void(* ZT_EventCallback) (ZT_Node *, void *, void *, enum ZT_Event, const void *);
```


Callback for events

Events are generated when the node's status changes in a significant way and on certain non-fatal errors and events of interest. The final void parameter points to event meta-data. The type of event meta-data (and whether it is present at all) is event type dependent. See the comments in the definition of ZT_Event. 


### typedef ZT_StatePutFunction

```cpp
typedef void(* ZT_StatePutFunction) (ZT_Node *, void *, void *, enum ZT_StateObjectType, const uint64_t[2], const void *, int);
```


Callback for storing and/or publishing state information

See ZT_StateObjectType docs for information about each state object type and when and if it needs to be persisted.

An object of length -1 is sent to indicate that an object should be deleted. 


### typedef ZT_StateGetFunction

```cpp
typedef int(* ZT_StateGetFunction) (ZT_Node *, void *, void *, enum ZT_StateObjectType, const uint64_t[2], void *, unsigned int);
```


Callback for retrieving stored state information

This function should return the number of bytes actually stored to the buffer or -1 if the state object was not found or the buffer was too small to store it. 


### typedef ZT_WirePacketSendFunction

```cpp
typedef int(* ZT_WirePacketSendFunction) (ZT_Node *, void *, void *, int64_t, const struct sockaddr_storage *, const void *, unsigned int, unsigned int);
```


Function to send a ZeroTier packet out over the physical wire (L2/L3)

Parameters: (1) Node (2) User pointer (3) Local socket or -1 for "all" or "any" (4) Remote address (5) Packet data (6) Packet length (7) Desired IP TTL or 0 to use default

If there is only one local socket, the local socket can be ignored. If the local socket is -1, the packet should be sent out from all bound local sockets or a random bound local socket.

If TTL is nonzero, packets should have their IP TTL value set to this value if possible. If this is not possible it is acceptable to ignore this value and send anyway with normal or default TTL.

The function must return zero on success and may return any error code on failure. Note that success does not (of course) guarantee packet delivery. It only means that the packet appears to have been sent. 


### typedef ZT_PathCheckFunction

```cpp
typedef int(* ZT_PathCheckFunction) (ZT_Node *, void *, void *, uint64_t, int64_t, const struct sockaddr_storage *);
```


Function to check whether a path should be used for ZeroTier traffic

Parameters: (1) Node (2) User pointer (3) ZeroTier address or 0 for none/any (4) Local socket or -1 if unknown (5) Remote address

This function must return nonzero (true) if the path should be used.

If no path check function is specified, ZeroTier will still exclude paths that overlap with ZeroTier-assigned and managed IP address blocks. But the use of a path check function is recommended to ensure that recursion does not occur in cases where addresses are assigned by the OS or managed by an out of band mechanism like DHCP. The path check function should examine all configured ZeroTier interfaces and check to ensure that the supplied addresses will not result in ZeroTier traffic being sent over a ZeroTier interface (recursion). 


### typedef ZT_PathLookupFunction

```cpp
typedef int(* ZT_PathLookupFunction) (ZT_Node *, void *, void *, uint64_t, int, struct sockaddr_storage *);
```


Function to get physical addresses for ZeroTier peers

Parameters: (1) Node (2) User pointer (3) ZeroTier address (least significant 40 bits) (4) Desired address family or -1 for any (5) Buffer to fill with result

If provided this function will be occasionally called to get physical addresses that might be tried to reach a ZeroTier address. It must return a nonzero (true) value if the result buffer has been filled with an address. 



## Functions Documentation

### function ZT_Node_new

```cpp
enum ZT_ResultCode ZT_Node_new(
    ZT_Node ** node,
    void * uptr,
    void * tptr,
    const struct ZT_Node_Callbacks * callbacks,
    int64_t now
)
```


**Parameters**: 

  * **node** Result: pointer is set to new node instance on success 
  * **uptr** User pointer to pass to functions/callbacks 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **callbacks** Callback function configuration 
  * **now** Current clock in milliseconds 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Create a new ZeroTier node

This will attempt to load its identity via the state get function in the callback struct. If that fails it will generate a new identity and store it. Identity generation can take anywhere from a few hundred milliseconds to a few seconds depending on your CPU speed.


### function ZT_Node_delete

```cpp
void ZT_Node_delete(
    ZT_Node * node
)
```


**Parameters**: 

  * **node** Node to delete 


Delete a node and free all resources it consumes

If you are using multiple threads, all other threads must be shut down first. This can crash if processXXX() methods are in progress.


### function ZT_Node_processWirePacket

```cpp
enum ZT_ResultCode ZT_Node_processWirePacket(
    ZT_Node * node,
    void * tptr,
    int64_t now,
    int64_t localSocket,
    const struct sockaddr_storage * remoteAddress,
    const void * packetData,
    unsigned int packetLength,
    volatile int64_t * nextBackgroundTaskDeadline
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **now** Current clock in milliseconds 
  * **localSocket** Local socket (you can use 0 if only one local socket is bound and ignore this) 
  * **remoteAddress** Origin of packet 
  * **packetData** Packet data 
  * **packetLength** Packet length 
  * **nextBackgroundTaskDeadline** Value/result: set to deadline for next call to processBackgroundTasks() 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Process a packet received from the physical wire


### function ZT_Node_processVirtualNetworkFrame

```cpp
enum ZT_ResultCode ZT_Node_processVirtualNetworkFrame(
    ZT_Node * node,
    void * tptr,
    int64_t now,
    uint64_t nwid,
    uint64_t sourceMac,
    uint64_t destMac,
    unsigned int etherType,
    unsigned int vlanId,
    const void * frameData,
    unsigned int frameLength,
    volatile int64_t * nextBackgroundTaskDeadline
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **now** Current clock in milliseconds 
  * **nwid** ZeroTier 64-bit virtual network ID 
  * **sourceMac** Source MAC address (least significant 48 bits) 
  * **destMac** Destination MAC address (least significant 48 bits) 
  * **etherType** 16-bit Ethernet frame type 
  * **vlanId** 10-bit VLAN ID or 0 if none 
  * **frameData** Frame payload data 
  * **frameLength** Frame payload length 
  * **nextBackgroundTaskDeadline** Value/result: set to deadline for next call to processBackgroundTasks() 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Process a frame from a virtual network port (tap)


### function ZT_Node_processBackgroundTasks

```cpp
enum ZT_ResultCode ZT_Node_processBackgroundTasks(
    ZT_Node * node,
    void * tptr,
    int64_t now,
    volatile int64_t * nextBackgroundTaskDeadline
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **now** Current clock in milliseconds 
  * **nextBackgroundTaskDeadline** Value/result: set to deadline for next call to processBackgroundTasks() 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Perform periodic background operations


### function ZT_Node_join

```cpp
enum ZT_ResultCode ZT_Node_join(
    ZT_Node * node,
    uint64_t nwid,
    void * uptr,
    void * tptr
)
```


**Parameters**: 

  * **node** Node instance 
  * **nwid** 64-bit ZeroTier network ID 
  * **uptr** An arbitrary pointer to associate with this network (default: NULL) 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Join a network

This may generate calls to the port config callback before it returns, or these may be differed if a netconf is not available yet.

If we are already a member of the network, nothing is done and OK is returned.


### function ZT_Node_leave

```cpp
enum ZT_ResultCode ZT_Node_leave(
    ZT_Node * node,
    uint64_t nwid,
    void ** uptr,
    void * tptr
)
```


**Parameters**: 

  * **node** Node instance 
  * **nwid** 64-bit network ID 
  * **uptr** Target pointer is set to uptr (if not NULL) 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Leave a network

If a port has been configured for this network this will generate a call to the port config callback with a NULL second parameter to indicate that the port is now deleted.

The uptr parameter is optional and is NULL by default. If it is not NULL, the pointer it points to is set to this network's uptr on success.


### function ZT_Node_multicastSubscribe

```cpp
enum ZT_ResultCode ZT_Node_multicastSubscribe(
    ZT_Node * node,
    void * tptr,
    uint64_t nwid,
    uint64_t multicastGroup,
    unsigned long multicastAdi
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **nwid** 64-bit network ID 
  * **multicastGroup** Ethernet multicast or broadcast MAC (least significant 48 bits) 
  * **multicastAdi** Multicast ADI (least significant 32 bits only, use 0 if not needed) 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Subscribe to an Ethernet multicast group

ADI stands for additional distinguishing information. This defaults to zero and is rarely used. Right now its only use is to enable IPv4 ARP to scale, and this must be done.

For IPv4 ARP, the implementation must subscribe to 0xffffffffffff (the broadcast address) but with an ADI equal to each IPv4 address in host byte order. This converts ARP from a non-scalable broadcast protocol to a scalable multicast protocol with perfect address specificity.

If this is not done, ARP will not work reliably.

Multiple calls to subscribe to the same multicast address will have no effect. It is perfectly safe to do this.

This does not generate an update call to networkConfigCallback().


### function ZT_Node_multicastUnsubscribe

```cpp
enum ZT_ResultCode ZT_Node_multicastUnsubscribe(
    ZT_Node * node,
    uint64_t nwid,
    uint64_t multicastGroup,
    unsigned long multicastAdi
)
```


**Parameters**: 

  * **node** Node instance 
  * **nwid** 64-bit network ID 
  * **multicastGroup** Ethernet multicast or broadcast MAC (least significant 48 bits) 
  * **multicastAdi** Multicast ADI (least significant 32 bits only, use 0 if not needed) 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Unsubscribe from an Ethernet multicast group (or all groups)

If multicastGroup is zero (0), this will unsubscribe from all groups. If you are not subscribed to a group this has no effect.

This does not generate an update call to networkConfigCallback().


### function ZT_Node_orbit

```cpp
enum ZT_ResultCode ZT_Node_orbit(
    ZT_Node * node,
    void * tptr,
    uint64_t moonWorldId,
    uint64_t moonSeed
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **moonWorldId** Moon's world ID 
  * **moonSeed** If non-zero, the ZeroTier address of any member of the moon to query for moon definition 
  * **len** Length of moonWorld in bytes 


**Return**: Error if moon was invalid or failed to be added 

Add or update a moon

Moons are persisted in the data store in moons.d/, so this can persist across invocations if the contents of moon.d are scanned and orbit is called for each on startup.


### function ZT_Node_deorbit

```cpp
enum ZT_ResultCode ZT_Node_deorbit(
    ZT_Node * node,
    void * tptr,
    uint64_t moonWorldId
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **moonWorldId** World ID of moon to remove 


**Return**: Error if anything bad happened 

Remove a moon (does nothing if not present)


### function ZT_Node_address

```cpp
uint64_t ZT_Node_address(
    ZT_Node * node
)
```


**Parameters**: 

  * **node** Node instance 


**Return**: ZeroTier address (least significant 40 bits of 64-bit int) 

Get this node's 40-bit ZeroTier address


### function ZT_Node_status

```cpp
void ZT_Node_status(
    ZT_Node * node,
    ZT_NodeStatus * status
)
```


**Parameters**: 

  * **node** Node instance 
  * **status** Buffer to fill with current node status 


Get the status of this node


### function ZT_Node_peers

```cpp
ZT_PeerList * ZT_Node_peers(
    ZT_Node * node
)
```


**Parameters**: 

  * **node** Node instance 


**Return**: List of known peers or NULL on failure 

Get a list of known peer nodes

The pointer returned here must be freed with freeQueryResult() when you are done with it.


### function ZT_Node_networkConfig

```cpp
ZT_VirtualNetworkConfig * ZT_Node_networkConfig(
    ZT_Node * node,
    uint64_t nwid
)
```


**Parameters**: 

  * **node** Node instance 
  * **nwid** 64-bit network ID 


**Return**: Network configuration or NULL if we are not a member of this network 

Get the status of a virtual network

The pointer returned here must be freed with freeQueryResult() when you are done with it.


### function ZT_Node_networks

```cpp
ZT_VirtualNetworkList * ZT_Node_networks(
    ZT_Node * node
)
```


**Parameters**: 

  * **node** Node instance 


**Return**: List of networks or NULL on failure 

Enumerate and get status of all networks


### function ZT_Node_freeQueryResult

```cpp
void ZT_Node_freeQueryResult(
    ZT_Node * node,
    void * qr
)
```


**Parameters**: 

  * **node** Node instance 
  * **qr** Query result buffer 


Free a query result buffer

Use this to free the return values of listNetworks(), listPeers(), etc.


### function ZT_Node_addLocalInterfaceAddress

```cpp
int ZT_Node_addLocalInterfaceAddress(
    ZT_Node * node,
    const struct sockaddr_storage * addr
)
```


**Parameters**: 

  * **addr** Local interface address 


**Return**: Boolean: non-zero if address was accepted and added 

Add a local interface address

This is used to make ZeroTier aware of those local interface addresses that you wish to use for ZeroTier communication. This is optional, and if it is not used ZeroTier will rely upon upstream peers (and roots) to perform empirical address discovery and NAT traversal. But the use of this method is recommended as it improves peer discovery when both peers are on the same LAN.

It is the responsibility of the caller to take care that these are never ZeroTier interface addresses, whether these are assigned by ZeroTier or are otherwise assigned to an interface managed by this ZeroTier instance. This can cause recursion or other undesirable behavior.

This returns a boolean indicating whether or not the address was accepted. ZeroTier will only communicate over certain address types and (for IP) address classes.


### function ZT_Node_clearLocalInterfaceAddresses

```cpp
void ZT_Node_clearLocalInterfaceAddresses(
    ZT_Node * node
)
```


Clear local interface addresses 


### function ZT_Node_sendUserMessage

```cpp
int ZT_Node_sendUserMessage(
    ZT_Node * node,
    void * tptr,
    uint64_t dest,
    uint64_t typeId,
    const void * data,
    unsigned int len
)
```


**Parameters**: 

  * **node** Node instance 
  * **tptr** Thread pointer to pass to functions/callbacks resulting from this call 
  * **dest** Destination ZeroTier address 
  * **typeId** VERB_USER_MESSAGE type ID 
  * **data** Payload data to attach to user message 
  * **len** Length of data in bytes 


**Return**: Boolean: non-zero on success, zero on failure 

Send a VERB_USER_MESSAGE to another ZeroTier node

There is no delivery guarantee here. Failure can occur if the message is too large or if dest is not a valid ZeroTier address.


### function ZT_Node_setNetconfMaster

```cpp
void ZT_Node_setNetconfMaster(
    ZT_Node * node,
    void * networkConfigMasterInstance
)
```


**Parameters**: 

  * **node** ZertTier One node 
  * **networkConfigMasterInstance** Instance of NetworkConfigMaster C++ class or NULL to disable 


**Return**: OK (0) or error code if a fatal error condition has occurred 

Set a network configuration master instance for this node

Normal nodes should not need to use this. This is for nodes with special compiled-in support for acting as network configuration masters / controllers.

The supplied instance must be a C++ object that inherits from the NetworkConfigMaster base class in node/. No type checking is performed, so a pointer to anything else will result in a crash.


### function ZT_Node_setPhysicalPathConfiguration

```cpp
enum ZT_ResultCode ZT_Node_setPhysicalPathConfiguration(
    ZT_Node * node,
    const struct sockaddr_storage * pathNetwork,
    const ZT_PhysicalPathConfiguration * pathConfig
)
```


**Parameters**: 

  * **node** Node instance 
  * **pathNetwork** Network/CIDR of path or NULL to clear the cache and reset all paths to default 
  * **pathConfig** Path configuration or NULL to erase this entry and therefore reset it to NULL 


**Return**: OK or error code 

Set configuration for a given physical path


### function ZT_version

```cpp
void ZT_version(
    int * major,
    int * minor,
    int * revision
)
```


**Parameters**: 

  * **major** Result: major version 
  * **minor** Result: minor version 
  * **revision** Result: revision 


Get ZeroTier One version




## Macro Documentation

### define ZT_SDK_API

```cpp
#define ZT_SDK_API 
```


### define ZT_DEFAULT_PORT

```cpp
#define ZT_DEFAULT_PORT 9993
```


Default UDP port for devices running a ZeroTier endpoint 


### define ZT_MIN_MTU

```cpp
#define ZT_MIN_MTU 1280
```


Minimum MTU, which is the minimum allowed by IPv6 and several specs 


### define ZT_MAX_MTU

```cpp
#define ZT_MAX_MTU 10000
```


Maximum MTU for ZeroTier virtual networks 


### define ZT_MIN_PHYSMTU

```cpp
#define ZT_MIN_PHYSMTU 1400
```


Minimum UDP payload size allowed 


### define ZT_DEFAULT_PHYSMTU

```cpp
#define ZT_DEFAULT_PHYSMTU 1432
```


Default UDP payload size (physical path MTU) not including UDP and IP overhead

This is small enough for PPPoE and for Google Cloud's bizarrely tiny MTUs. A 2800 byte payload still fits into two packets, so this should not impact real world throughput at all vs the previous default of 1444. 


### define ZT_MAX_PHYSPAYLOAD

```cpp
#define ZT_MAX_PHYSPAYLOAD 10100
```


Maximum physical UDP payload 


### define ZT_MAX_HEADROOM

```cpp
#define ZT_MAX_HEADROOM 224
```


Headroom for max physical MTU 


### define ZT_MAX_PHYSMTU

```cpp
#define ZT_MAX_PHYSMTU (ZT_MAX_PHYSPAYLOAD + ZT_MAX_HEADROOM)
```


Maximum payload MTU for UDP packets 


### define ZT_MAX_REMOTE_TRACE_SIZE

```cpp
#define ZT_MAX_REMOTE_TRACE_SIZE 10000
```


Maximum size of a remote trace message's serialized Dictionary 


### define ZT_MAX_NETWORK_SHORT_NAME_LENGTH

```cpp
#define ZT_MAX_NETWORK_SHORT_NAME_LENGTH 127
```


Maximum length of network short name 


### define ZT_MAX_NETWORK_ROUTES

```cpp
#define ZT_MAX_NETWORK_ROUTES 32
```


Maximum number of pushed routes on a network 


### define ZT_MAX_ZT_ASSIGNED_ADDRESSES

```cpp
#define ZT_MAX_ZT_ASSIGNED_ADDRESSES 16
```


Maximum number of statically assigned IP addresses per network endpoint using ZT address management (not DHCP) 


### define ZT_MAX_NETWORK_SPECIALISTS

```cpp
#define ZT_MAX_NETWORK_SPECIALISTS 256
```


Maximum number of "specialists" on a network &ndash; bridges, relays, etc. 


### define ZT_MAX_NETWORK_MULTICAST_SUBSCRIPTIONS

```cpp
#define ZT_MAX_NETWORK_MULTICAST_SUBSCRIPTIONS 4096
```


Maximum number of multicast group subscriptions per network 


### define ZT_RULES_ENGINE_REVISION

```cpp
#define ZT_RULES_ENGINE_REVISION 1
```


Rules engine revision ID, which specifies rules engine capabilities 


### define ZT_MAX_NETWORK_RULES

```cpp
#define ZT_MAX_NETWORK_RULES 1024
```


Maximum number of base (non-capability) network rules 


### define ZT_MAX_NETWORK_CAPABILITIES

```cpp
#define ZT_MAX_NETWORK_CAPABILITIES 128
```


Maximum number of per-member capabilities per network 


### define ZT_MAX_NETWORK_TAGS

```cpp
#define ZT_MAX_NETWORK_TAGS 128
```


Maximum number of per-member tags per network 


### define ZT_MAX_PEER_NETWORK_PATHS

```cpp
#define ZT_MAX_PEER_NETWORK_PATHS 16
```


Maximum number of direct network paths to a given peer 


### define ZT_MAX_CONFIGURABLE_PATHS

```cpp
#define ZT_MAX_CONFIGURABLE_PATHS 32
```


Maximum number of path configurations that can be set 


### define ZT_MAX_CAPABILITY_RULES

```cpp
#define ZT_MAX_CAPABILITY_RULES 64
```


Maximum number of rules per capability 


### define ZT_MAX_CERTIFICATES_OF_OWNERSHIP

```cpp
#define ZT_MAX_CERTIFICATES_OF_OWNERSHIP 4
```


Maximum number of certificates of ownership to assign to a single network member 


### define ZT_MAX_CAPABILITY_CUSTODY_CHAIN_LENGTH

```cpp
#define ZT_MAX_CAPABILITY_CUSTODY_CHAIN_LENGTH 7
```


Global maximum length for capability chain of custody (including initial issue) 


### define ZT_MAX_MULTICAST_SUBSCRIPTIONS

```cpp
#define ZT_MAX_MULTICAST_SUBSCRIPTIONS 1024
```


Maximum number of multicast groups a device / network interface can be subscribed to at once 


### define ZT_PATH_LINK_QUALITY_MAX

```cpp
#define ZT_PATH_LINK_QUALITY_MAX 0xff
```


Maximum value for link quality (min is 0) 


### define ZT_MAX_DNS_SERVERS

```cpp
#define ZT_MAX_DNS_SERVERS 4
```


Maximum number of DNS servers per domain 


### define ZT_RULE_PACKET_CHARACTERISTICS_INBOUND

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_INBOUND 0x8000000000000000ULL
```


Packet characteristics flag: packet direction, 1 if inbound 0 if outbound 


### define ZT_RULE_PACKET_CHARACTERISTICS_MULTICAST

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_MULTICAST 0x4000000000000000ULL
```


Packet characteristics flag: multicast or broadcast destination MAC 


### define ZT_RULE_PACKET_CHARACTERISTICS_BROADCAST

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_BROADCAST 0x2000000000000000ULL
```


Packet characteristics flag: broadcast destination MAC 


### define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_IP_AUTHENTICATED

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_IP_AUTHENTICATED 0x1000000000000000ULL
```


Packet characteristics flag: sending IP address has a certificate of ownership 


### define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_MAC_AUTHENTICATED

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_MAC_AUTHENTICATED 0x0800000000000000ULL
```


Packet characteristics flag: sending MAC address has a certificate of ownership 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_0

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_0 0x0000000000000800ULL
```


Packet characteristics flag: TCP left-most reserved bit 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_1

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_1 0x0000000000000400ULL
```


Packet characteristics flag: TCP middle reserved bit 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_2

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_2 0x0000000000000200ULL
```


Packet characteristics flag: TCP right-most reserved bit 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_NS

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_NS 0x0000000000000100ULL
```


Packet characteristics flag: TCP NS flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_CWR

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_CWR 0x0000000000000080ULL
```


Packet characteristics flag: TCP CWR flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ECE

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ECE 0x0000000000000040ULL
```


Packet characteristics flag: TCP ECE flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_URG

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_URG 0x0000000000000020ULL
```


Packet characteristics flag: TCP URG flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ACK

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ACK 0x0000000000000010ULL
```


Packet characteristics flag: TCP ACK flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_PSH

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_PSH 0x0000000000000008ULL
```


Packet characteristics flag: TCP PSH flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RST

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RST 0x0000000000000004ULL
```


Packet characteristics flag: TCP RST flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_SYN

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_SYN 0x0000000000000002ULL
```


Packet characteristics flag: TCP SYN flag 


### define ZT_RULE_PACKET_CHARACTERISTICS_TCP_FIN

```cpp
#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_FIN 0x0000000000000001ULL
```


Packet characteristics flag: TCP FIN flag 


### define ZT_REMOTE_TRACE_FIELD__EVENT

```cpp
#define ZT_REMOTE_TRACE_FIELD__EVENT "event"
```


### define ZT_REMOTE_TRACE_FIELD__NODE_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__NODE_ID "nodeId"
```


### define ZT_REMOTE_TRACE_FIELD__PACKET_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__PACKET_ID "packetId"
```


### define ZT_REMOTE_TRACE_FIELD__PACKET_VERB

```cpp
#define ZT_REMOTE_TRACE_FIELD__PACKET_VERB "packetVerb"
```


### define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_ID "packetTrustedPathId"
```


### define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_APPROVED

```cpp
#define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_APPROVED "packetTrustedPathApproved"
```


### define ZT_REMOTE_TRACE_FIELD__PACKET_HOPS

```cpp
#define ZT_REMOTE_TRACE_FIELD__PACKET_HOPS "packetHops"
```


### define ZT_REMOTE_TRACE_FIELD__REMOTE_ZTADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__REMOTE_ZTADDR "remoteZtAddr"
```


### define ZT_REMOTE_TRACE_FIELD__REMOTE_PHYADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__REMOTE_PHYADDR "remotePhyAddr"
```


### define ZT_REMOTE_TRACE_FIELD__LOCAL_ZTADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__LOCAL_ZTADDR "localZtAddr"
```


### define ZT_REMOTE_TRACE_FIELD__LOCAL_PHYADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__LOCAL_PHYADDR "localPhyAddr"
```


### define ZT_REMOTE_TRACE_FIELD__LOCAL_SOCKET

```cpp
#define ZT_REMOTE_TRACE_FIELD__LOCAL_SOCKET "localSocket"
```


### define ZT_REMOTE_TRACE_FIELD__IP_SCOPE

```cpp
#define ZT_REMOTE_TRACE_FIELD__IP_SCOPE "phyAddrIpScope"
```


### define ZT_REMOTE_TRACE_FIELD__NETWORK_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__NETWORK_ID "networkId"
```


### define ZT_REMOTE_TRACE_FIELD__SOURCE_ZTADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__SOURCE_ZTADDR "sourceZtAddr"
```


### define ZT_REMOTE_TRACE_FIELD__DEST_ZTADDR

```cpp
#define ZT_REMOTE_TRACE_FIELD__DEST_ZTADDR "destZtAddr"
```


### define ZT_REMOTE_TRACE_FIELD__SOURCE_MAC

```cpp
#define ZT_REMOTE_TRACE_FIELD__SOURCE_MAC "sourceMac"
```


### define ZT_REMOTE_TRACE_FIELD__DEST_MAC

```cpp
#define ZT_REMOTE_TRACE_FIELD__DEST_MAC "destMac"
```


### define ZT_REMOTE_TRACE_FIELD__ETHERTYPE

```cpp
#define ZT_REMOTE_TRACE_FIELD__ETHERTYPE "etherType"
```


### define ZT_REMOTE_TRACE_FIELD__VLAN_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__VLAN_ID "vlanId"
```


### define ZT_REMOTE_TRACE_FIELD__FRAME_LENGTH

```cpp
#define ZT_REMOTE_TRACE_FIELD__FRAME_LENGTH "frameLength"
```


### define ZT_REMOTE_TRACE_FIELD__FRAME_DATA

```cpp
#define ZT_REMOTE_TRACE_FIELD__FRAME_DATA "frameData"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_NOTEE

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_NOTEE "filterNoTee"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_INBOUND

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_INBOUND "filterInbound"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_RESULT

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_RESULT "filterResult"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_BASE_RULE_LOG

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_BASE_RULE_LOG "filterBaseRuleLog"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_RULE_LOG

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_RULE_LOG "filterCapRuleLog"
```


### define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_ID "filterMatchingCapId"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TYPE

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TYPE "credType"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ID "credId"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TIMESTAMP

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TIMESTAMP "credTs"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_INFO

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_INFO "credInfo"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ISSUED_TO

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ISSUED_TO "credIssuedTo"
```


### define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_REVOCATION_TARGET

```cpp
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_REVOCATION_TARGET "credRevocationTarget"
```


### define ZT_REMOTE_TRACE_FIELD__REASON

```cpp
#define ZT_REMOTE_TRACE_FIELD__REASON "reason"
```


### define ZT_REMOTE_TRACE_FIELD__NETWORK_CONTROLLER_ID

```cpp
#define ZT_REMOTE_TRACE_FIELD__NETWORK_CONTROLLER_ID "networkControllerId"
```


### define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE

```cpp
#define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE 0x1000
```


### define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH 0x1001
```


### define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH 0x1002
```


### define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED 0x1003
```


### define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE

```cpp
#define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE 0x1004
```


### define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID

```cpp
#define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID 0x1005
```


### define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO

```cpp
#define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO 0x1006
```


### define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED

```cpp
#define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED 0x2000
```


### define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED

```cpp
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED 0x2001
```


### define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED

```cpp
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED 0x2002
```


### define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED

```cpp
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED 0x2003
```


### define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED

```cpp
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED 0x2004
```


### define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT

```cpp
#define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT 0x2005
```


### define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE

```cpp
#define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE 0x2006
```


### define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE_S "1000"
```


### define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH_S "1001"
```


### define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH_S "1002"
```


### define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED_S "1003"
```


### define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE_S "1004"
```


### define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID_S "1005"
```


### define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO_S "1006"
```


### define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED_S "2000"
```


### define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED_S "2001"
```


### define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED_S "2002"
```


### define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED_S "2003"
```


### define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED_S "2004"
```


### define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT_S "2005"
```


### define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE_S

```cpp
#define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE_S "2006"
```


### define ZT_ResultCode_isFatal

```cpp
#define ZT_ResultCode_isFatal(
    x
)
((((int)(x)) >= 100)&&(((int)(x)) < 1000))
```


**Parameters**: 

  * **x** Result code 


**Return**: True if result code indicates a fatal error 

## Source code

```cpp
/*
 * Copyright (c)2019 ZeroTier, Inc.
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file in the project's root directory.
 *
 * Change Date: 2025-01-01
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2.0 of the Apache License.
 */
/****/

/*
 * This defines the external C API for ZeroTier's core network virtualization
 * engine.
 */

#ifndef ZT_ZEROTIER_API_H
#define ZT_ZEROTIER_API_H

#include <stdint.h>

// For the struct sockaddr_storage structure
#if defined(_WIN32) || defined(_WIN64)
#include <WinSock2.h>
#include <WS2tcpip.h>
#include <Windows.h>
#else /* not Windows */
#include <arpa/inet.h>
#include <netinet/in.h>
#include <sys/types.h>
#include <sys/socket.h>
#endif /* Windows or not */

#if defined (_MSC_VER)
#ifdef  ZT_EXPORT
#define ZT_SDK_API __declspec(dllexport)
#else
#define ZT_SDK_API __declspec(dllimport)
#if !defined(ZT_SDK)
#ifdef _DEBUG
#ifdef _WIN64
#pragma comment(lib, "ZeroTierOne_x64d.lib")
#else
#pragma comment(lib, "ZeroTierOne_x86d.lib")
#endif
#else
#ifdef _WIN64
#pragma comment(lib, "ZeroTierOne_x64.lib")
#else
#pragma comment(lib, "ZeroTierOne_x86.lib")
#endif
#endif
#endif
#endif
#else
#define ZT_SDK_API
#endif

#ifdef __cplusplus
extern "C" {
#endif

/****************************************************************************/
/* Core constants                                                           */
/****************************************************************************/

#define ZT_DEFAULT_PORT 9993

#define ZT_MIN_MTU 1280

#define ZT_MAX_MTU 10000

#define ZT_MIN_PHYSMTU 1400

#define ZT_DEFAULT_PHYSMTU 1432

#define ZT_MAX_PHYSPAYLOAD 10100

#define ZT_MAX_HEADROOM 224

#define ZT_MAX_PHYSMTU (ZT_MAX_PHYSPAYLOAD + ZT_MAX_HEADROOM)

#define ZT_MAX_REMOTE_TRACE_SIZE 10000

#define ZT_MAX_NETWORK_SHORT_NAME_LENGTH 127

#define ZT_MAX_NETWORK_ROUTES 32

#define ZT_MAX_ZT_ASSIGNED_ADDRESSES 16

#define ZT_MAX_NETWORK_SPECIALISTS 256

#define ZT_MAX_NETWORK_MULTICAST_SUBSCRIPTIONS 4096

#define ZT_RULES_ENGINE_REVISION 1

#define ZT_MAX_NETWORK_RULES 1024

#define ZT_MAX_NETWORK_CAPABILITIES 128

#define ZT_MAX_NETWORK_TAGS 128

#define ZT_MAX_PEER_NETWORK_PATHS 16

#define ZT_MAX_CONFIGURABLE_PATHS 32

#define ZT_MAX_CAPABILITY_RULES 64

#define ZT_MAX_CERTIFICATES_OF_OWNERSHIP 4

#define ZT_MAX_CAPABILITY_CUSTODY_CHAIN_LENGTH 7

#define ZT_MAX_MULTICAST_SUBSCRIPTIONS 1024

#define ZT_PATH_LINK_QUALITY_MAX 0xff

#define ZT_MAX_DNS_SERVERS 4

#define ZT_RULE_PACKET_CHARACTERISTICS_INBOUND 0x8000000000000000ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_MULTICAST 0x4000000000000000ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_BROADCAST 0x2000000000000000ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_IP_AUTHENTICATED 0x1000000000000000ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_SENDER_MAC_AUTHENTICATED 0x0800000000000000ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_0 0x0000000000000800ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_1 0x0000000000000400ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RESERVED_2 0x0000000000000200ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_NS 0x0000000000000100ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_CWR 0x0000000000000080ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ECE 0x0000000000000040ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_URG 0x0000000000000020ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_ACK 0x0000000000000010ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_PSH 0x0000000000000008ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_RST 0x0000000000000004ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_SYN 0x0000000000000002ULL

#define ZT_RULE_PACKET_CHARACTERISTICS_TCP_FIN 0x0000000000000001ULL

// Fields in remote trace dictionaries
#define ZT_REMOTE_TRACE_FIELD__EVENT "event"
#define ZT_REMOTE_TRACE_FIELD__NODE_ID "nodeId"
#define ZT_REMOTE_TRACE_FIELD__PACKET_ID "packetId"
#define ZT_REMOTE_TRACE_FIELD__PACKET_VERB "packetVerb"
#define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_ID "packetTrustedPathId"
#define ZT_REMOTE_TRACE_FIELD__PACKET_TRUSTED_PATH_APPROVED "packetTrustedPathApproved"
#define ZT_REMOTE_TRACE_FIELD__PACKET_HOPS "packetHops"
#define ZT_REMOTE_TRACE_FIELD__REMOTE_ZTADDR "remoteZtAddr"
#define ZT_REMOTE_TRACE_FIELD__REMOTE_PHYADDR "remotePhyAddr"
#define ZT_REMOTE_TRACE_FIELD__LOCAL_ZTADDR "localZtAddr"
#define ZT_REMOTE_TRACE_FIELD__LOCAL_PHYADDR "localPhyAddr"
#define ZT_REMOTE_TRACE_FIELD__LOCAL_SOCKET "localSocket"
#define ZT_REMOTE_TRACE_FIELD__IP_SCOPE "phyAddrIpScope"
#define ZT_REMOTE_TRACE_FIELD__NETWORK_ID "networkId"
#define ZT_REMOTE_TRACE_FIELD__SOURCE_ZTADDR "sourceZtAddr"
#define ZT_REMOTE_TRACE_FIELD__DEST_ZTADDR "destZtAddr"
#define ZT_REMOTE_TRACE_FIELD__SOURCE_MAC "sourceMac"
#define ZT_REMOTE_TRACE_FIELD__DEST_MAC "destMac"
#define ZT_REMOTE_TRACE_FIELD__ETHERTYPE "etherType"
#define ZT_REMOTE_TRACE_FIELD__VLAN_ID "vlanId"
#define ZT_REMOTE_TRACE_FIELD__FRAME_LENGTH "frameLength"
#define ZT_REMOTE_TRACE_FIELD__FRAME_DATA "frameData"
#define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_NOTEE "filterNoTee"
#define ZT_REMOTE_TRACE_FIELD__FILTER_FLAG_INBOUND "filterInbound"
#define ZT_REMOTE_TRACE_FIELD__FILTER_RESULT "filterResult"
#define ZT_REMOTE_TRACE_FIELD__FILTER_BASE_RULE_LOG "filterBaseRuleLog"
#define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_RULE_LOG "filterCapRuleLog"
#define ZT_REMOTE_TRACE_FIELD__FILTER_CAP_ID "filterMatchingCapId"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TYPE "credType"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ID "credId"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_TIMESTAMP "credTs"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_INFO "credInfo"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_ISSUED_TO "credIssuedTo"
#define ZT_REMOTE_TRACE_FIELD__CREDENTIAL_REVOCATION_TARGET "credRevocationTarget"
#define ZT_REMOTE_TRACE_FIELD__REASON "reason"
#define ZT_REMOTE_TRACE_FIELD__NETWORK_CONTROLLER_ID "networkControllerId"

// Event types in remote traces
#define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE 0x1000
#define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH 0x1001
#define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH 0x1002
#define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED 0x1003
#define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE 0x1004
#define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID 0x1005
#define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO 0x1006
#define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED 0x2000
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED 0x2001
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED 0x2002
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED 0x2003
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED 0x2004
#define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT 0x2005
#define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE 0x2006

// Event types in remote traces in hex string form
#define ZT_REMOTE_TRACE_EVENT__RESETTING_PATHS_IN_SCOPE_S "1000"
#define ZT_REMOTE_TRACE_EVENT__PEER_CONFIRMING_UNKNOWN_PATH_S "1001"
#define ZT_REMOTE_TRACE_EVENT__PEER_LEARNED_NEW_PATH_S "1002"
#define ZT_REMOTE_TRACE_EVENT__PEER_REDIRECTED_S "1003"
#define ZT_REMOTE_TRACE_EVENT__PACKET_MAC_FAILURE_S "1004"
#define ZT_REMOTE_TRACE_EVENT__PACKET_INVALID_S "1005"
#define ZT_REMOTE_TRACE_EVENT__DROPPED_HELLO_S "1006"
#define ZT_REMOTE_TRACE_EVENT__OUTGOING_NETWORK_FRAME_DROPPED_S "2000"
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_ACCESS_DENIED_S "2001"
#define ZT_REMOTE_TRACE_EVENT__INCOMING_NETWORK_FRAME_DROPPED_S "2002"
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_REJECTED_S "2003"
#define ZT_REMOTE_TRACE_EVENT__CREDENTIAL_ACCEPTED_S "2004"
#define ZT_REMOTE_TRACE_EVENT__NETWORK_CONFIG_REQUEST_SENT_S "2005"
#define ZT_REMOTE_TRACE_EVENT__NETWORK_FILTER_TRACE_S "2006"

/****************************************************************************/
/* Structures and other types                                               */
/****************************************************************************/

enum ZT_ResultCode
{
    ZT_RESULT_OK = 0,

    ZT_RESULT_OK_IGNORED = 1,

    // Fatal errors (>100, <1000)

    ZT_RESULT_FATAL_ERROR_OUT_OF_MEMORY = 100,

    ZT_RESULT_FATAL_ERROR_DATA_STORE_FAILED = 101,

    ZT_RESULT_FATAL_ERROR_INTERNAL = 102,

    // Non-fatal errors (>1000)

    ZT_RESULT_ERROR_NETWORK_NOT_FOUND = 1000,

    ZT_RESULT_ERROR_UNSUPPORTED_OPERATION = 1001,

    ZT_RESULT_ERROR_BAD_PARAMETER = 1002
};

#define ZT_ResultCode_isFatal(x) ((((int)(x)) >= 100)&&(((int)(x)) < 1000))


enum ZT_MultipathBondingPolicy
{
    ZT_BONDING_POLICY_NONE = 0,

    ZT_BONDING_POLICY_ACTIVE_BACKUP = 1,

    ZT_BONDING_POLICY_BROADCAST = 2,

    ZT_BONDING_POLICY_BALANCE_RR = 3,

    ZT_BONDING_POLICY_BALANCE_XOR = 4,

    ZT_BONDING_POLICY_BALANCE_AWARE = 5
};

enum ZT_MultipathLinkSelectMethod
{
    ZT_MULTIPATH_RESELECTION_POLICY_ALWAYS = 0,

    ZT_MULTIPATH_RESELECTION_POLICY_BETTER = 1,

    ZT_MULTIPATH_RESELECTION_POLICY_FAILURE = 2,

    ZT_MULTIPATH_RESELECTION_POLICY_OPTIMIZE = 3
};

enum ZT_MultipathLinkMode
{
    ZT_MULTIPATH_SLAVE_MODE_PRIMARY = 0,
    ZT_MULTIPATH_SLAVE_MODE_SPARE = 1
};

enum ZT_MultipathMonitorStrategy
{
    ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DEFAULT = 0,

    ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_PASSIVE = 1,

    ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_ACTIVE = 2,

    ZT_MULTIPATH_SLAVE_MONITOR_STRATEGY_DYNAMIC = 3
};

enum ZT_MultipathFlowRebalanceStrategy
{
    ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_PASSIVE = 0,

    ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_OPPORTUNISTIC = 0,

    ZT_MULTIPATH_FLOW_REBALANCE_STRATEGY_AGGRESSIVE = 2
};

enum ZT_MultipathQualityWeightIndex
{
    ZT_QOS_LAT_IDX,
    ZT_QOS_LTM_IDX,
    ZT_QOS_PDV_IDX,
    ZT_QOS_PLR_IDX,
    ZT_QOS_PER_IDX,
    ZT_QOS_THR_IDX,
    ZT_QOS_THM_IDX,
    ZT_QOS_THV_IDX,
    ZT_QOS_AGE_IDX,
    ZT_QOS_SCP_IDX,
    ZT_QOS_WEIGHT_SIZE
};

enum ZT_Event
{
    ZT_EVENT_UP = 0,

    ZT_EVENT_OFFLINE = 1,

    ZT_EVENT_ONLINE = 2,

    ZT_EVENT_DOWN = 3,

    ZT_EVENT_FATAL_ERROR_IDENTITY_COLLISION = 4,

    ZT_EVENT_TRACE = 5,

    ZT_EVENT_USER_MESSAGE = 6,

    ZT_EVENT_REMOTE_TRACE = 7
};

typedef struct
{
    uint64_t origin;

    char *data;

    unsigned int len;
} ZT_RemoteTrace;

typedef struct
{
    uint64_t origin;

    uint64_t typeId;

    const void *data;

    unsigned int length;
} ZT_UserMessage;

typedef struct
{
    uint64_t address;

    const char *publicIdentity;

    const char *secretIdentity;

    int online;
} ZT_NodeStatus;

typedef struct
{
    uint64_t inVerbCounts[32];

    uint64_t inVerbBytes[32];
} ZT_NodeStatistics;

enum ZT_VirtualNetworkStatus
{
    ZT_NETWORK_STATUS_REQUESTING_CONFIGURATION = 0,

    ZT_NETWORK_STATUS_OK = 1,

    ZT_NETWORK_STATUS_ACCESS_DENIED = 2,

    ZT_NETWORK_STATUS_NOT_FOUND = 3,

    ZT_NETWORK_STATUS_PORT_ERROR = 4,

    ZT_NETWORK_STATUS_CLIENT_TOO_OLD = 5
};

enum ZT_VirtualNetworkType
{
    ZT_NETWORK_TYPE_PRIVATE = 0,

    ZT_NETWORK_TYPE_PUBLIC = 1
};

enum ZT_VirtualNetworkRuleType
{
    // 0 to 15 reserved for actions

    ZT_NETWORK_RULE_ACTION_DROP = 0,

    ZT_NETWORK_RULE_ACTION_ACCEPT = 1,

    ZT_NETWORK_RULE_ACTION_TEE = 2,

    ZT_NETWORK_RULE_ACTION_WATCH = 3,

    ZT_NETWORK_RULE_ACTION_REDIRECT = 4,

    ZT_NETWORK_RULE_ACTION_BREAK = 5,

    ZT_NETWORK_RULE_ACTION_PRIORITY = 6,

    ZT_NETWORK_RULE_ACTION__MAX_ID = 15,

    // 16 to 63 reserved for match criteria

    ZT_NETWORK_RULE_MATCH_SOURCE_ZEROTIER_ADDRESS = 24,
    ZT_NETWORK_RULE_MATCH_DEST_ZEROTIER_ADDRESS = 25,
    ZT_NETWORK_RULE_MATCH_VLAN_ID = 26,
    ZT_NETWORK_RULE_MATCH_VLAN_PCP = 27,
    ZT_NETWORK_RULE_MATCH_VLAN_DEI = 28,
    ZT_NETWORK_RULE_MATCH_MAC_SOURCE = 29,
    ZT_NETWORK_RULE_MATCH_MAC_DEST = 30,
    ZT_NETWORK_RULE_MATCH_IPV4_SOURCE = 31,
    ZT_NETWORK_RULE_MATCH_IPV4_DEST = 32,
    ZT_NETWORK_RULE_MATCH_IPV6_SOURCE = 33,
    ZT_NETWORK_RULE_MATCH_IPV6_DEST = 34,
    ZT_NETWORK_RULE_MATCH_IP_TOS = 35,
    ZT_NETWORK_RULE_MATCH_IP_PROTOCOL = 36,
    ZT_NETWORK_RULE_MATCH_ETHERTYPE = 37,
    ZT_NETWORK_RULE_MATCH_ICMP = 38,
    ZT_NETWORK_RULE_MATCH_IP_SOURCE_PORT_RANGE = 39,
    ZT_NETWORK_RULE_MATCH_IP_DEST_PORT_RANGE = 40,
    ZT_NETWORK_RULE_MATCH_CHARACTERISTICS = 41,
    ZT_NETWORK_RULE_MATCH_FRAME_SIZE_RANGE = 42,
    ZT_NETWORK_RULE_MATCH_RANDOM = 43,
    ZT_NETWORK_RULE_MATCH_TAGS_DIFFERENCE = 44,
    ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_AND = 45,
    ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_OR = 46,
    ZT_NETWORK_RULE_MATCH_TAGS_BITWISE_XOR = 47,
    ZT_NETWORK_RULE_MATCH_TAGS_EQUAL = 48,
    ZT_NETWORK_RULE_MATCH_TAG_SENDER = 49,
    ZT_NETWORK_RULE_MATCH_TAG_RECEIVER = 50,
    ZT_NETWORK_RULE_MATCH_INTEGER_RANGE = 51,

    ZT_NETWORK_RULE_MATCH__MAX_ID = 63
};

typedef struct
{
    uint8_t t;

    union {
        struct {
            uint8_t ip[16];
            uint8_t mask;
        } ipv6;

        struct {
            uint32_t ip;
            uint8_t mask;
        } ipv4;

        struct {
            uint64_t start; // integer range start
            uint32_t end; // end of integer range (relative to start, inclusive, 0 for equality w/start)
            uint16_t idx; // index in packet of integer
            uint8_t format; // bits in integer (range 1-64, ((format&63)+1)) and endianness (MSB 1 for little, 0 for big)
        } intRange;

        uint64_t characteristics;

        uint16_t port[2];

        uint64_t zt;

        uint32_t randomProbability;

        uint8_t mac[6];

        uint16_t vlanId;

        uint8_t vlanPcp;

        uint8_t vlanDei;

        uint16_t etherType;

        uint8_t ipProtocol;

        struct {
            uint8_t mask;
            uint8_t value[2];
        } ipTos;

        uint16_t frameSize[2];

        struct {
            uint8_t type; // ICMP type, always matched
            uint8_t code; // ICMP code if matched
            uint8_t flags; // flag 0x01 means also match code, otherwise only match type
        } icmp;

        struct {
            uint32_t id;
            uint32_t value;
        } tag;

        struct {
            uint64_t address;
            uint32_t flags;
            uint16_t length;
        } fwd;

        uint8_t qosBucket;
    } v;
} ZT_VirtualNetworkRule;

typedef struct
{
    struct sockaddr_storage target;

    struct sockaddr_storage via;

    uint16_t flags;

    uint16_t metric;
} ZT_VirtualNetworkRoute;

typedef struct
{
    char domain[128];
    struct sockaddr_storage server_addr[ZT_MAX_DNS_SERVERS];
} ZT_VirtualNetworkDNS;

typedef struct
{
    uint64_t mac;

    unsigned long adi;
} ZT_MulticastGroup;

enum ZT_VirtualNetworkConfigOperation
{
    ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_UP = 1,

    ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_CONFIG_UPDATE = 2,

    ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DOWN = 3,

    ZT_VIRTUAL_NETWORK_CONFIG_OPERATION_DESTROY = 4
};

enum ZT_PeerRole
{
    ZT_PEER_ROLE_LEAF = 0,       // ordinary node
    ZT_PEER_ROLE_MOON = 1,       // moon root
    ZT_PEER_ROLE_PLANET = 2      // planetary root
};

enum ZT_Vendor
{
    ZT_VENDOR_UNSPECIFIED = 0,
    ZT_VENDOR_ZEROTIER = 1
};

enum ZT_Platform
{
    ZT_PLATFORM_UNSPECIFIED = 0,
    ZT_PLATFORM_LINUX = 1,
    ZT_PLATFORM_WINDOWS = 2,
    ZT_PLATFORM_MACOS = 3,
    ZT_PLATFORM_ANDROID = 4,
    ZT_PLATFORM_IOS = 5,
    ZT_PLATFORM_SOLARIS_SMARTOS = 6,
    ZT_PLATFORM_FREEBSD = 7,
    ZT_PLATFORM_NETBSD = 8,
    ZT_PLATFORM_OPENBSD = 9,
    ZT_PLATFORM_RISCOS = 10,
    ZT_PLATFORM_VXWORKS = 11,
    ZT_PLATFORM_FREERTOS = 12,
    ZT_PLATFORM_SYSBIOS = 13,
    ZT_PLATFORM_HURD = 14,
    ZT_PLATFORM_WEB = 15
};

enum ZT_Architecture
{
    ZT_ARCHITECTURE_UNSPECIFIED = 0,
    ZT_ARCHITECTURE_X86 = 1,
    ZT_ARCHITECTURE_X64 = 2,
    ZT_ARCHITECTURE_ARM32 = 3,
    ZT_ARCHITECTURE_ARM64 = 4,
    ZT_ARCHITECTURE_MIPS32 = 5,
    ZT_ARCHITECTURE_MIPS64 = 6,
    ZT_ARCHITECTURE_POWER32 = 7,
    ZT_ARCHITECTURE_POWER64 = 8,
    ZT_ARCHITECTURE_OPENRISC32 = 9,
    ZT_ARCHITECTURE_OPENRISC64 = 10,
    ZT_ARCHITECTURE_SPARC32 = 11,
    ZT_ARCHITECTURE_SPARC64 = 12,
    ZT_ARCHITECTURE_DOTNET_CLR = 13,
    ZT_ARCHITECTURE_JAVA_JVM = 14,
    ZT_ARCHITECTURE_WEB = 15,
    ZT_ARCHITECTURE_S390X = 16
};

typedef struct
{
    uint64_t nwid;

    uint64_t mac;

    char name[ZT_MAX_NETWORK_SHORT_NAME_LENGTH + 1];

    enum ZT_VirtualNetworkStatus status;

    enum ZT_VirtualNetworkType type;

    unsigned int mtu;

    int dhcp;

    int bridge;

    int broadcastEnabled;

    int portError;

    unsigned long netconfRevision;

    unsigned int assignedAddressCount;

    struct sockaddr_storage assignedAddresses[ZT_MAX_ZT_ASSIGNED_ADDRESSES];

    unsigned int routeCount;

    ZT_VirtualNetworkRoute routes[ZT_MAX_NETWORK_ROUTES];

    unsigned int multicastSubscriptionCount;

    struct {
        uint64_t mac; /* MAC in lower 48 bits */
        uint32_t adi; /* Additional distinguishing information, usually zero except for IPv4 ARP groups */
    } multicastSubscriptions[ZT_MAX_MULTICAST_SUBSCRIPTIONS];
    
    ZT_VirtualNetworkDNS dns;
} ZT_VirtualNetworkConfig;

typedef struct
{
    ZT_VirtualNetworkConfig *networks;
    unsigned long networkCount;
} ZT_VirtualNetworkList;

typedef struct {
    uint64_t trustedPathId;

    int mtu;
} ZT_PhysicalPathConfiguration;

typedef struct
{
    struct sockaddr_storage address;

    uint64_t lastSend;

    uint64_t lastReceive;

    uint64_t trustedPathId;

    float latencyMean;

    float latencyMax;

    float latencyVariance;

    float packetLossRatio;

    float packetErrorRatio;

    uint64_t throughputMean;

    float throughputMax;

    float throughputVariance;

    uint8_t scope;

    float allocation;

    char ifname[32];

    uint64_t localSocket;

    int expired;

    int preferred;
} ZT_PeerPhysicalPath;

typedef struct
{
    uint64_t address;

    int versionMajor;

    int versionMinor;

    int versionRev;

    int latency;

    enum ZT_PeerRole role;

    bool isBonded;

    int bondingPolicy;

    bool isHealthy;

    int numAliveLinks;

    int numTotalLinks;

    char customBondName[32];

    unsigned int pathCount;

    ZT_PeerPhysicalPath paths[ZT_MAX_PEER_NETWORK_PATHS];
} ZT_Peer;

typedef struct
{
    ZT_Peer *peers;
    unsigned long peerCount;
} ZT_PeerList;

enum ZT_StateObjectType
{
    ZT_STATE_OBJECT_NULL = 0,

    ZT_STATE_OBJECT_IDENTITY_PUBLIC = 1,

    ZT_STATE_OBJECT_IDENTITY_SECRET = 2,

    ZT_STATE_OBJECT_PLANET = 3,

    ZT_STATE_OBJECT_MOON = 4,

    ZT_STATE_OBJECT_PEER = 5,

    ZT_STATE_OBJECT_NETWORK_CONFIG = 6
};

typedef void ZT_Node;

/****************************************************************************/
/* Callbacks used by Node API                                               */
/****************************************************************************/

typedef int (*ZT_VirtualNetworkConfigFunction)(
    ZT_Node *,                             /* Node */
    void *,                                /* User ptr */
    void *,                                /* Thread ptr */
    uint64_t,                              /* Network ID */
    void **,                               /* Modifiable network user PTR */
    enum ZT_VirtualNetworkConfigOperation, /* Config operation */
    const ZT_VirtualNetworkConfig *);      /* Network configuration */

typedef void (*ZT_VirtualNetworkFrameFunction)(
    ZT_Node *,                             /* Node */
    void *,                                /* User ptr */
    void *,                                /* Thread ptr */
    uint64_t,                              /* Network ID */
    void **,                               /* Modifiable network user PTR */
    uint64_t,                              /* Source MAC */
    uint64_t,                              /* Destination MAC */
    unsigned int,                          /* Ethernet type */
    unsigned int,                          /* VLAN ID (0 for none) */
    const void *,                          /* Frame data */
    unsigned int);                         /* Frame length */

typedef void (*ZT_EventCallback)(
    ZT_Node *,                             /* Node */
    void *,                                /* User ptr */
    void *,                                /* Thread ptr */
    enum ZT_Event,                         /* Event type */
    const void *);                         /* Event payload (if applicable) */

typedef void (*ZT_StatePutFunction)(
    ZT_Node *,                             /* Node */
    void *,                                /* User ptr */
    void *,                                /* Thread ptr */
    enum ZT_StateObjectType,               /* State object type */
    const uint64_t [2],                    /* State object ID (if applicable) */
    const void *,                          /* State object data */
    int);                                  /* Length of data or -1 to delete */

typedef int (*ZT_StateGetFunction)(
    ZT_Node *,                             /* Node */
    void *,                                /* User ptr */
    void *,                                /* Thread ptr */
    enum ZT_StateObjectType,               /* State object type */
    const uint64_t [2],                    /* State object ID (if applicable) */
    void *,                                /* Buffer to store state object data */
    unsigned int);                         /* Length of data buffer in bytes */

typedef int (*ZT_WirePacketSendFunction)(
    ZT_Node *,                        /* Node */
    void *,                           /* User ptr */
    void *,                           /* Thread ptr */
    int64_t,                          /* Local socket */
    const struct sockaddr_storage *,  /* Remote address */
    const void *,                     /* Packet data */
    unsigned int,                     /* Packet length */
    unsigned int);                    /* TTL or 0 to use default */

typedef int (*ZT_PathCheckFunction)(
    ZT_Node *,                        /* Node */
    void *,                           /* User ptr */
    void *,                           /* Thread ptr */
    uint64_t,                         /* ZeroTier address */
    int64_t,                          /* Local socket or -1 if unknown */
    const struct sockaddr_storage *); /* Remote address */

typedef int (*ZT_PathLookupFunction)(
    ZT_Node *,                        /* Node */
    void *,                           /* User ptr */
    void *,                           /* Thread ptr */
    uint64_t,                         /* ZeroTier address (40 bits) */
    int,                              /* Desired ss_family or -1 for any */
    struct sockaddr_storage *);       /* Result buffer */

/****************************************************************************/
/* C Node API                                                               */
/****************************************************************************/

struct ZT_Node_Callbacks
{
    long version;

    ZT_StatePutFunction statePutFunction;

    ZT_StateGetFunction stateGetFunction;

    ZT_WirePacketSendFunction wirePacketSendFunction;

    ZT_VirtualNetworkFrameFunction virtualNetworkFrameFunction;

    ZT_VirtualNetworkConfigFunction virtualNetworkConfigFunction;

    ZT_EventCallback eventCallback;

    ZT_PathCheckFunction pathCheckFunction;

    ZT_PathLookupFunction pathLookupFunction;
};

ZT_SDK_API enum ZT_ResultCode ZT_Node_new(ZT_Node **node,void *uptr,void *tptr,const struct ZT_Node_Callbacks *callbacks,int64_t now);

ZT_SDK_API void ZT_Node_delete(ZT_Node *node);

ZT_SDK_API enum ZT_ResultCode ZT_Node_processWirePacket(
    ZT_Node *node,
    void *tptr,
    int64_t now,
    int64_t localSocket,
    const struct sockaddr_storage *remoteAddress,
    const void *packetData,
    unsigned int packetLength,
    volatile int64_t *nextBackgroundTaskDeadline);

ZT_SDK_API enum ZT_ResultCode ZT_Node_processVirtualNetworkFrame(
    ZT_Node *node,
    void *tptr,
    int64_t now,
    uint64_t nwid,
    uint64_t sourceMac,
    uint64_t destMac,
    unsigned int etherType,
    unsigned int vlanId,
    const void *frameData,
    unsigned int frameLength,
    volatile int64_t *nextBackgroundTaskDeadline);

ZT_SDK_API enum ZT_ResultCode ZT_Node_processBackgroundTasks(ZT_Node *node,void *tptr,int64_t now,volatile int64_t *nextBackgroundTaskDeadline);

ZT_SDK_API enum ZT_ResultCode ZT_Node_join(ZT_Node *node,uint64_t nwid,void *uptr,void *tptr);

ZT_SDK_API enum ZT_ResultCode ZT_Node_leave(ZT_Node *node,uint64_t nwid,void **uptr,void *tptr);

ZT_SDK_API enum ZT_ResultCode ZT_Node_multicastSubscribe(ZT_Node *node,void *tptr,uint64_t nwid,uint64_t multicastGroup,unsigned long multicastAdi);

ZT_SDK_API enum ZT_ResultCode ZT_Node_multicastUnsubscribe(ZT_Node *node,uint64_t nwid,uint64_t multicastGroup,unsigned long multicastAdi);

ZT_SDK_API enum ZT_ResultCode ZT_Node_orbit(ZT_Node *node,void *tptr,uint64_t moonWorldId,uint64_t moonSeed);

ZT_SDK_API enum ZT_ResultCode ZT_Node_deorbit(ZT_Node *node,void *tptr,uint64_t moonWorldId);

ZT_SDK_API uint64_t ZT_Node_address(ZT_Node *node);

ZT_SDK_API void ZT_Node_status(ZT_Node *node,ZT_NodeStatus *status);

ZT_SDK_API ZT_PeerList *ZT_Node_peers(ZT_Node *node);

ZT_SDK_API ZT_VirtualNetworkConfig *ZT_Node_networkConfig(ZT_Node *node,uint64_t nwid);

ZT_SDK_API ZT_VirtualNetworkList *ZT_Node_networks(ZT_Node *node);

ZT_SDK_API void ZT_Node_freeQueryResult(ZT_Node *node,void *qr);

ZT_SDK_API int ZT_Node_addLocalInterfaceAddress(ZT_Node *node,const struct sockaddr_storage *addr);

ZT_SDK_API void ZT_Node_clearLocalInterfaceAddresses(ZT_Node *node);

ZT_SDK_API int ZT_Node_sendUserMessage(ZT_Node *node,void *tptr,uint64_t dest,uint64_t typeId,const void *data,unsigned int len);

ZT_SDK_API void ZT_Node_setNetconfMaster(ZT_Node *node,void *networkConfigMasterInstance);

ZT_SDK_API enum ZT_ResultCode ZT_Node_setPhysicalPathConfiguration(ZT_Node *node,const struct sockaddr_storage *pathNetwork,const ZT_PhysicalPathConfiguration *pathConfig);

ZT_SDK_API void ZT_version(int *major,int *minor,int *revision);

#ifdef __cplusplus
}
#endif

#endif
```


-------------------------------

Updated on  2 September 2021 at 23:24:57 CEST
