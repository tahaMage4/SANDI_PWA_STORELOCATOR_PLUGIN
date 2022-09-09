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

import { StoreLocatorReducer } from "../store/StoreLocator/StoreLocator.reducer";

const getStaticReducers = (args, callback) => ({
  ...callback(...args),
  StoreLocatorReducer,
});

export const config = {
  "Store/Index/getStaticReducers": {
    function: getStaticReducers,
  },
};

export default config;
