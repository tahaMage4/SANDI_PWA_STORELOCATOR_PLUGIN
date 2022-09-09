import { PureComponent } from "react";
import StoreLocatorMap from "./StoreLocatorMap.compontent";
import { connect } from "react-redux";

/** @namespace Component/StoreLocatorMap/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  items: state.StoreLocatorReducer.items,

  // add on
  google_api_key: state.ConfigReducer.google_api_key,
  map_zoom: state.ConfigReducer.map_zoom,
  map_style: state.ConfigReducer.map_style,
  device: state.ConfigReducer.device,
});

/** @namespace Route/StoreLocatorMap/Container/mapDispatchToProps */

export const mapDispatchToProps = (dispatch) => ({
  updateBreadcrumbs: (breadcrumbs) => {
    BreadcrumbsDispatcher.then(({ default: dispatcher }) =>
      dispatcher.update(breadcrumbs, dispatch)
    );
  },
});

/** @namespace Component/StoreLocatorMap/Container */
export class StoreLocatorMapContainer extends PureComponent {
  containerProps() {
    const {
      items,
      filteredStores,
      showstoreinfo,
      allStores,
      handleStoreButtonClick,
      handleClosedButtonClick,
    } = this.props;

    return {
      items,
      filteredStores,
      allStores,
      showstoreinfo,
      handleStoreButtonClick,
      handleClosedButtonClick,
      // google_map_api_key,
    };
  }

  render() {
    return <StoreLocatorMap {...this.containerProps()} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreLocatorMapContainer);
