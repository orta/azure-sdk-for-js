/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Subscription trial availability
 */
export interface Trial {
  /**
   * Trial status. Possible values include: 'TrialAvailable', 'TrialUsed', 'TrialDisabled'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: Status;
  /**
   * Number of trial hosts available
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly availableHosts?: number;
}

/**
 * Subscription quotas
 */
export interface Quota {
  /**
   * Remaining hosts quota by sku type
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hostsRemaining?: { [propertyName: string]: number };
  /**
   * Host quota is active for current subscription. Possible values include: 'Enabled', 'Disabled'
   */
  quotaEnabled?: QuotaEnabled;
}

/**
 * The core properties of ARM resources
 */
export interface Resource extends BaseResource {
  /**
   * Resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource location
   */
  location?: string;
  /**
   * Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Api error.
 */
export interface ApiErrorBase {
  /**
   * Error code
   */
  code?: string;
  /**
   * Error message
   */
  message?: string;
}

/**
 * API error response
 */
export interface ApiError {
  /**
   * An error returned by the API
   */
  error?: ApiErrorBase;
}

/**
 * Contains the localized display information for this operation
 */
export interface OperationDisplay {
  /**
   * Localized friendly form of the resource provider name
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provider?: string;
  /**
   * Localized friendly form of the resource type related to this operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly resource?: string;
  /**
   * Localized friendly name for the operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly operation?: string;
  /**
   * Localized friendly description for the operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly description?: string;
}

/**
 * A REST API operation
 */
export interface Operation {
  /**
   * Name of the operation being performed on this object
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Contains the localized display information for this operation
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly display?: OperationDisplay;
}

/**
 * Authorization for an ExpressRoute
 */
export interface ExpressRouteAuthorization {
  /**
   * The name of the ExpressRoute
   */
  name?: string;
  /**
   * The ID of the ExpressRoute
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The key of the ExpressRoute
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly key?: string;
}

/**
 * An ExpressRoute Circuit
 */
export interface Circuit {
  /**
   * CIDR of primary subnet
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly primarySubnet?: string;
  /**
   * CIDR of secondary subnet
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly secondarySubnet?: string;
  /**
   * Identifier of the ExpressRoute (Microsoft Colo only)
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expressRouteID?: string;
  /**
   * Authorizations for the ExpressRoute (Microsoft Colo only)
   */
  authorizations?: ExpressRouteAuthorization[];
  /**
   * ExpressRoute private peering identifier
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly expressRoutePrivatePeeringID?: string;
}

/**
 * Endpoint addresses
 */
export interface Endpoints {
  /**
   * Endpoint for the NSX-T Data Center manager
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nsxtManager?: string;
  /**
   * Endpoint for Virtual Center Server Appliance
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vcsa?: string;
}

/**
 * vCenter Single Sign On Identity Source
 */
export interface IdentitySource {
  /**
   * The name of the identity source
   */
  name?: string;
  /**
   * The domain's NetBIOS name
   */
  alias?: string;
  /**
   * The domain's dns name
   */
  domain?: string;
  /**
   * The base distinguished name for users
   */
  baseUserDN?: string;
  /**
   * The base distinguished name for groups
   */
  baseGroupDN?: string;
  /**
   * Primary server URL
   */
  primaryServer?: string;
  /**
   * Secondary server URL
   */
  secondaryServer?: string;
  /**
   * Protect LDAP communication using SSL certificate (LDAPS). Possible values include: 'Enabled',
   * 'Disabled'
   */
  ssl?: SslEnum;
  /**
   * The ID of an Active Directory user with a minimum of read-only access to Base DN for users and
   * group
   */
  username?: string;
  /**
   * The password of the Active Directory user with a minimum of read-only access to Base DN for
   * users and groups.
   */
  password?: string;
}

/**
 * The resource model definition representing SKU
 */
export interface Sku {
  /**
   * The name of the SKU.
   */
  name: string;
}

/**
 * The properties of a default cluster
 */
export interface DefaultClusterProperties {
  /**
   * The identity
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterId?: number;
  /**
   * The cluster size
   */
  clusterSize?: number;
  /**
   * The hosts
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hosts?: string[];
}

/**
 * The properties of a private cloud resource
 */
export interface PrivateCloudProperties {
  /**
   * The provisioning state. Possible values include: 'Succeeded', 'Failed', 'Cancelled',
   * 'Pending', 'Building', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: PrivateCloudProvisioningState;
  /**
   * An ExpressRoute Circuit
   */
  circuit?: Circuit;
  /**
   * The default cluster used for management
   */
  cluster?: DefaultClusterProperties;
  /**
   * The clusters
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusters?: string[];
  /**
   * The endpoints
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly endpoints?: Endpoints;
  /**
   * Connectivity to internet is enabled or disabled. Possible values include: 'Enabled',
   * 'Disabled'
   */
  internet?: InternetEnum;
  /**
   * vCenter Single Sign On Identity Sources
   */
  identitySources?: IdentitySource[];
  /**
   * The block of addresses should be unique across VNet in your subscription as well as
   * on-premise. Make sure the CIDR format is conformed to (A.B.C.D/X) where A,B,C,D are between 0
   * and 255, and X is between 0 and 22
   */
  networkBlock?: string;
  /**
   * Network used to access vCenter Server and NSX-T Manager
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly managementNetwork?: string;
  /**
   * Used for virtual machine cold migration, cloning, and snapshot migration
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningNetwork?: string;
  /**
   * Used for live migration of virtual machines
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vmotionNetwork?: string;
  /**
   * Optionally, set the vCenter admin password when the private cloud is created
   */
  vcenterPassword?: string;
  /**
   * Optionally, set the NSX-T Manager password when the private cloud is created
   */
  nsxtPassword?: string;
  /**
   * Thumbprint of the vCenter Server SSL certificate
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vcenterCertificateThumbprint?: string;
  /**
   * Thumbprint of the NSX-T Manager SSL certificate
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nsxtCertificateThumbprint?: string;
}

/**
 * A private cloud resource
 */
export interface PrivateCloud extends TrackedResource {
  /**
   * The private cloud SKU
   */
  sku?: Sku;
  /**
   * The properties of a private cloud resource
   */
  properties?: PrivateCloudProperties;
}

/**
 * The properties of a cluster
 */
export interface ClusterProperties extends DefaultClusterProperties {
  /**
   * The state of the cluster provisioning. Possible values include: 'Succeeded', 'Failed',
   * 'Cancelled', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ClusterProvisioningState;
}

/**
 * A cluster resource
 */
export interface Cluster extends Resource {
  /**
   * The properties of a cluster resource
   */
  properties?: ClusterProperties;
}

/**
 * Administrative credentials for accessing vCenter and NSX-T
 */
export interface AdminCredentials {
  /**
   * NSX-T Manager username
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nsxtUsername?: string;
  /**
   * NSX-T Manager password
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nsxtPassword?: string;
  /**
   * vCenter admin username
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vcenterUsername?: string;
  /**
   * vCenter admin password
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly vcenterPassword?: string;
}

/**
 * Optional Parameters.
 */
export interface ClustersCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The properties of a cluster resource
   */
  properties?: ClusterProperties;
}

/**
 * Optional Parameters.
 */
export interface ClustersUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The properties of a cluster resource
   */
  properties?: ClusterProperties;
}

/**
 * Optional Parameters.
 */
export interface ClustersBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The properties of a cluster resource
   */
  properties?: ClusterProperties;
}

/**
 * Optional Parameters.
 */
export interface ClustersBeginUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * The properties of a cluster resource
   */
  properties?: ClusterProperties;
}

/**
 * An interface representing AvsClientOptions.
 */
export interface AvsClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * Pageable list of operations
 * @extends Array<Operation>
 */
export interface OperationList extends Array<Operation> {
  /**
   * URL to get the next page if any
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * A paged list of private clouds
 * @extends Array<PrivateCloud>
 */
export interface PrivateCloudList extends Array<PrivateCloud> {
  /**
   * URL to get the next page if any
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * A paged list of clusters
 * @extends Array<Cluster>
 */
export interface ClusterList extends Array<Cluster> {
  /**
   * URL to get the next page if any
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for QuotaEnabled.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type QuotaEnabled = 'Enabled' | 'Disabled';

/**
 * Defines values for SslEnum.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SslEnum = 'Enabled' | 'Disabled';

/**
 * Defines values for PrivateCloudProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Pending', 'Building', 'Updating'
 * @readonly
 * @enum {string}
 */
export type PrivateCloudProvisioningState = 'Succeeded' | 'Failed' | 'Cancelled' | 'Pending' | 'Building' | 'Updating';

/**
 * Defines values for InternetEnum.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type InternetEnum = 'Enabled' | 'Disabled';

/**
 * Defines values for ClusterProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Cancelled', 'Updating'
 * @readonly
 * @enum {string}
 */
export type ClusterProvisioningState = 'Succeeded' | 'Failed' | 'Cancelled' | 'Updating';

/**
 * Defines values for Status.
 * Possible values include: 'TrialAvailable', 'TrialUsed', 'TrialDisabled'
 * @readonly
 * @enum {string}
 */
export type Status = 'TrialAvailable' | 'TrialUsed' | 'TrialDisabled';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationList;
    };
};

/**
 * Contains response data for the checkTrialAvailability operation.
 */
export type LocationsCheckTrialAvailabilityResponse = Trial & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Trial;
    };
};

/**
 * Contains response data for the checkQuotaAvailability operation.
 */
export type LocationsCheckQuotaAvailabilityResponse = Quota & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Quota;
    };
};

/**
 * Contains response data for the list operation.
 */
export type PrivateCloudsListResponse = PrivateCloudList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloudList;
    };
};

/**
 * Contains response data for the listInSubscription operation.
 */
export type PrivateCloudsListInSubscriptionResponse = PrivateCloudList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloudList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type PrivateCloudsGetResponse = PrivateCloud & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloud;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type PrivateCloudsCreateOrUpdateResponse = PrivateCloud & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloud;
    };
};

/**
 * Contains response data for the update operation.
 */
export type PrivateCloudsUpdateResponse = PrivateCloud & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloud;
    };
};

/**
 * Contains response data for the listAdminCredentials operation.
 */
export type PrivateCloudsListAdminCredentialsResponse = AdminCredentials & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AdminCredentials;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type PrivateCloudsBeginCreateOrUpdateResponse = PrivateCloud & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloud;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type PrivateCloudsBeginUpdateResponse = PrivateCloud & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloud;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type PrivateCloudsListNextResponse = PrivateCloudList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloudList;
    };
};

/**
 * Contains response data for the listInSubscriptionNext operation.
 */
export type PrivateCloudsListInSubscriptionNextResponse = PrivateCloudList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PrivateCloudList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ClustersListResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ClustersGetResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ClustersCreateOrUpdateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ClustersUpdateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ClustersBeginCreateOrUpdateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ClustersBeginUpdateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ClustersListNextResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};
