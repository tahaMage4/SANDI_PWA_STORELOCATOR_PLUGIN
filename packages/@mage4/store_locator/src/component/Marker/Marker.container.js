import { PureComponent } from "react";
import Marker from "./Marker.compontent";
import { connect } from "react-redux";

/** @namespace Component/StoreLocatorMap/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  items: state.StoreLocatorReducer.items,
});

/** @namespace Route/StoreLocatorMap/Container/mapDispatchToProps */

export const mapDispatchToProps = (dispatch) => ({});

/** @namespace Component/StoreLocatorMap/Container */
export class StoreLocatorMapContainer extends PureComponent {
  containerProps() {
    const {
      items,
      handleStoreButtonClick,
      handleClosedButtonClick,
      showstoreinfo,
      filteredStores,
    } = this.props;

    return {
      items,
      handleStoreButtonClick,
      handleClosedButtonClick,
      showstoreinfo,
      filteredStores,
    };
  }

  render() {
    return <Marker {...this.containerProps()} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreLocatorMapContainer);
