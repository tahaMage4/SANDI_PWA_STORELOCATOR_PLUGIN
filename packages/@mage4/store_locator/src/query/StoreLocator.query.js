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

import { Field } from "Util/Query";

/** @namespace Query/StoreLocator/Query */
export class StoreLocatorQuery {
  //store ka kam
  getStores() {
    return new Field("stores").addFieldList(this.getStoresFields());
  }
  getStoresFields() {
    return [
      "store_id",
      "category_id",
      "name",
      "address",
      "store_image",
      "postcode",
      "city",
      "region",
      "country",
      "phone",
      "email",
      "fax",
      "website",
      "open_hours",
      "static_block_1",
      "static_block_2",
      "url_alias",
      "description",
      "meta_description",
      "meta_keywords",
      "embeded_map",
      "lat",
      "lng",
      "zoom",
    ];
  }
  //store End

  //Region
  getRegions() {
    return new Field("regions").addFieldList(this.getRegionsFields());
  }

  getRegionsFields() {
    return ["id", "name"];
  }

  //Region Ends

  // Items
  getItems() {
    return new Field("items").addFieldList(this.getItemsFields());
  }

  getItemsFields() {
    return ["category_id", "position", "name", this.getStores()];
  }

  //Items End

  //Store SEO
  getStoreSEO() {
    return new Field("store_locator_seo").addFieldList(
      this.getStoreSEOFields()
    );
  }
  getStoreSEOFields() {
    return ["meta_title", "meta_description", "meta_keywords"];
  }
  //Store SEO End

  // main
  getQuery() {
    return new Field("getLocations").addFieldList([
      "total_count",
      this.getItems(),
      this.getRegions(),
      this.getStoreSEO(),
    ]);
  }
  // main End
}

export default new StoreLocatorQuery();
