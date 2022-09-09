import { PureComponent } from "react";
import StoreCategories from "./StoreCategories.compontent";
import { connect } from "react-redux";

/** @namespace Component/StoreCategories/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
  items: state.StoreLocatorReducer.items,
});

/** @namespace Route/StoreCategories/Container/mapDispatchToProps */

export const mapDispatchToProps = (dispatch) => ({});

/** @namespace Component/StoreCategories/Container */
export class StoreCategoriesContainer extends PureComponent {
  containerProps() {
    const { items, handleCategoryTabButtonClick, selectedstore } = this.props;
    return {
      items,
      handleCategoryTabButtonClick,
      selectedstore,
    };
  }

  render() {
    return <StoreCategories {...this.containerProps()} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreCategoriesContainer);
