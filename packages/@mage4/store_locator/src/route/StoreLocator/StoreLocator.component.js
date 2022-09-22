import { PureComponent } from "react";

import StoreLocatorMap from "../../component/StoreLocatorMap";

import "./StoreLocator.style.scss";
import StoreCategoriesCompontent from "../../component/StoreCategories";

class StoreLocator extends PureComponent {
  render() {
    const {
      items,
      filteredStores,
      showstoreinfo,
      handleCategoryTabButtonClick,
      handleStoreButtonClick,
      handleClosedButtonClick,
      selectedstore,
        allStores,
      // later add
      // google_map_api_key,
    } = this.props;

    return (
      <main block="StoreLocator">
        {/*<StoreCategoriesCompontent*/}
        {/*    items={items}*/}
        {/*  // handleCategoryTabButtonClick={handleCategoryTabButtonClick}*/}
        {/*  selectedstore={selectedstore}*/}
        {/*/>*/}
        <StoreLocatorMap
          items={items}
          allStores={allStores}
          showstoreinfo={showstoreinfo}
          handleStoreButtonClick={handleStoreButtonClick}
          handleClosedButtonClick={handleClosedButtonClick}
        />
      </main>
    );
  }
}

export default StoreLocator;
