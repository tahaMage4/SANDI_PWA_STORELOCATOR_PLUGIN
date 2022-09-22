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

import {UPDATE_STORE_LOCATION} from "./StoreLocator.action";

// Defining the state

/** @namespace Store/StoreLocator/Reducer/getInitialState */
export const getInitialState = () => ({
    total_count: 0, items: [{}],
});

/** @namespace Store/StoreLocator/Reducer/StoreLocatorReducer */

export const StoreLocatorReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case UPDATE_STORE_LOCATION:
            const {
                storesData: {total_count, items},
            } = action;

            return {
                ...state, total_count, //payload
                items, //payload

            };

        default:
            return state;
    }
}


export default StoreLocatorReducer;
