/* eslint-disable spaced-comment */
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

import { Field } from 'Util/Query';

/** @namespace Mage4/Store_locator/Query/StoreLocator/Query */
export class StoreLocatorQuery {
    //store ka kam
    getStores() {
        return new Field('items').addFieldList(this.getStoresFields());
    }

    getStoresFields() {
        return ['name', 'id', 'lat', 'lng', 'image', 'phone', 'email', 'description'];
    }

    //store End

    // main
    getQuery() {
        return new Field('getMapStores').addFieldList(['total_count', this.getStores()]);
    }

    // main End
}

export default new StoreLocatorQuery();
