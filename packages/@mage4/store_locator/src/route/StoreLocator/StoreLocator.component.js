import { PureComponent } from "react";

import StoreLocatorMap from "../../component/StoreLocatorMap";

import "./StoreLocator.style.scss";
import StoreCategoriesCompontent from "../../component/StoreCategories";

class StoreLocator extends PureComponent {
  render() {
    const {
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
        <StoreCategoriesCompontent
          handleCategoryTabButtonClick={handleCategoryTabButtonClick}
          selectedstore={selectedstore}
        />
        <StoreLocatorMap
          filteredStores={filteredStores}
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
