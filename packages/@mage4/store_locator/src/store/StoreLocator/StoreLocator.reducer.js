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

import {UPDATE_LOCATION} from "./StoreLocator.action";

// Defining the state

/** @namespace Store/StoreLocator/Reducer/getInitialState */
export const getInitialState = () => ({
    total_count: 0, items: [{}], regions: [], store_locator_seo: {},
});

/** @namespace Store/StoreLocator/Reducer/StoreLocatorReducer */

export const StoreLocatorReducer = (state = getInitialState(), action) => {
    switch (action.type) {
        case UPDATE_LOCATION:
            const {
                locationData: {total_count, items, regions, store_locator_seo},
            } = action;

            return {
                ...state, total_count, //payload
                items, //payload
                regions, //payload
                store_locator_seo, //payload
            };

        default:
            return state;
    }
}


// export const example = (state = getInitialState(), action) => {
//     const {
//         locationData: {total_count, items, regions, store_locator_seo},
//     } = action;
//     if (action.type === UPDATE_LOCATION) {
//
//         return {
//             ...state, total_count, items, regions, store_locator_seo,
//         }
//
//     }
//     return state;
//
//
// }


    export default StoreLocatorReducer;
