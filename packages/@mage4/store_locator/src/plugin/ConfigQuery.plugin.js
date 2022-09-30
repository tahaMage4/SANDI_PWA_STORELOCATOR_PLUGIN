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

export class ConfigQueryPlugin {
  /**
   * Get store locator url
   * @returns [Field]
   */
  _aroundGetStoreConfigFields = (args, callback, instance) => [
    ...callback.apply(instance, args),
    "store_locator_url",
    // "google_api_key",
    // "map_zoom",
    // "map_style",
    // "map_markericon",
    // "map_selected_markericon",
  ];
}

export const { _aroundGetStoreConfigFields } = new ConfigQueryPlugin();

export const config = {
  "Query/Config": {
    "member-function": {
      _getStoreConfigFields: _aroundGetStoreConfigFields,
    },
  },
};

export default config;
