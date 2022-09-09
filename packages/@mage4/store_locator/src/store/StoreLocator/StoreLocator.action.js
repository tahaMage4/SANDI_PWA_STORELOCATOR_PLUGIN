/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/base-theme
 * @link https://github.com/scandipwa/base-theme
 */

export const UPDATE_LOCATION = "UPDATE_LOCATION";

/** @namespace Store/StoreLocator/Action/updatestorelocator */
export const updatelocation = (locationData) => {
  return {
    type: UPDATE_LOCATION,
    locationData, //payload
  };
};
