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

import { updatestoreslocation } from "./StoreLocator.action";
import { QueryDispatcher } from "Util/Request";
import StoreLocatorQuery from "../../query/StoreLocator.query";

/**
 * StoreLocator Dispatcher
 * @class StoreLocatorDispatcher
 * @extends QueryDispatcher
 * @namespace Store/StoreLocator/Dispatcher
 */
export class StoreLocatorDispatcher extends QueryDispatcher {
  __construct() {
    super.__construct("StoreLocator");
  }

  onSuccess(data, dispatch) {
    const {
      getMapStores: { items, total_count },
    } = data;
    dispatch(
        updatestoreslocation({ items, total_count })
    );
  }

  onError(error, dispatch) {
    alert("Error on Dispatcher File");
  }

  prepareRequest(options, dispatch) {
    return StoreLocatorQuery.getQuery();
  }
}

export default new StoreLocatorDispatcher();
