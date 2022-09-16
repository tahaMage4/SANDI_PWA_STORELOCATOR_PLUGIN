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

import PropTypes from "prop-types";
import {PureComponent} from "react";
import StoreLocator from "./StoreLocator.component";
import {connect} from "react-redux";
import DataContainer from 'Util/Request/DataContainer';


export const StoreLocatorDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    "../../store/StoreLocator/StoreLocator.dispatcher"
    );

// later add
export const BreadcrumbsDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    "Store/Breadcrumbs/Breadcrumbs.dispatcher"
    );
import {updateMeta} from "Store/Meta/Meta.action";

/** @namespace Route/StoreLocator/Container/mapStateToProps */
export const mapStateToProps = (state) => ({
    isLoading: state.ConfigReducer.isLoading, //default
    isMobile: state.ConfigReducer.device.isMobile, //default
    items: state.StoreLocatorReducer.items,
    storelocator: state.StoreLocatorReducer.storelocator, //lazmi
    //later  add
    google_map_api_key: state.ConfigReducer.google_map_api_key,
    store_locator_url: state.ConfigReducer.store_locator_url,
    map_markericon: state.ConfigReducer.map_markericon,
    map_selected_markericon: state.ConfigReducer.map_selected_markericon,
    device: state.ConfigReducer.device,
});

/** @namespace Route/StoreLocator/Container/mapDispatchToProps */

export const mapDispatchToProps = (dispatch) => ({


    //handle the data through api
    requestStores: (options) => StoreLocatorDispatcher.then(({default: dispatcher}) => dispatcher.handleData(dispatch, options)), // add on
    updateMeta: (meta) => dispatch(updateMeta(meta)),



    //later add
    updateBreadcrumbs: (breadcrumbs) => {
        BreadcrumbsDispatcher.then(({default: dispatcher}) => dispatcher.update(breadcrumbs, dispatch));
    }, //later add End


});

/** @namespace Route/StoreLocator/Container */

export class StoreContainer extends PureComponent {
    static propTypes = {
        isMobile: PropTypes.bool.isRequired, //by default
        isLoading: PropTypes.bool.isRequired, //by default
        updateBreadcrumbs: PropTypes.func.isRequired, // later add
        updateMeta: PropTypes.func.isRequired,
        google_map_api_key: PropTypes.string,
    };

    state = {
        filteredStores: [], allStores: [], showstoreinfo: false, selectedstore: "",

    };

    containerFunctions = {
        handleCategoryTabButtonClick: this.handleCategoryTabButtonClick.bind(this),
        handleStoreButtonClick: this.handleStoreButtonClick.bind(this), // Open drawer store
        handleClosedButtonClick: this.handleClosedButtonClick.bind(this), // close drawer store
    };

    // add on
    componentDidMount() {
        // request the hole store through the api
        const {requestStores} = this.props;
        requestStores();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {items} = this.props;
        let allStore = Object.values(items).reduce((initialState, item) => {

            if (item.stores) initialState = [...item.stores, ...initialState]
            return initialState;
        }, []);

        if (this.state.allStores.length === 0 && allStore.length !== 0) {
            this.setState({allStores: allStore});
        }

    }


    // _updateBreadcrumbs = () => {
    //     const { updateBreadcrumbs, store_locator_url } = this.props;
    //     const breadcrumbs = [
    //         {
    //             url: `/${store_locator_url}`,
    //             name: __('Store Locator')
    //         }
    //     ];
    //     updateBreadcrumbs(breadcrumbs);
    //
    // }


    handleCategoryTabButtonClick(stores, storename) {
        this.setState({selectedstore: storename});
        this.setState({filteredStores: stores});
    }

    // Open drawer store
    handleStoreButtonClick() {
        this.setState({showstoreinfo: true});
        setTimeout(() => {
            document.getElementsByClassName("store-tooltip").style.left = 0;
        }, 100);


    }

    //closed drawer store
    handleClosedButtonClick() {
        document.getElementById("stores__tooltip").style.left = "-300px";
        setTimeout(() => {
            this.setState({showstoreinfo: false});
        }, 500);
    }

    containerProps() {
        const {
            isLoading, isMobile, google_map_api_key, store_locator_url, map_markericon, map_selected_markericon, device,updateBreadcrumbs
        } = this.props;
        const {filteredStores, showstoreinfo, selectedstore, allStores} = this.state;

        return {
            isMobile,
            isLoading,
            updateBreadcrumbs,
            google_map_api_key,
            store_locator_url,
            map_markericon,
            map_selected_markericon,
            device,
            filteredStores,
            showstoreinfo, //close drawer state
            selectedstore, //check the icon in category
            // stateKey, // google_map_api_key_state
            allStores, //All Stores
        };
    }

    render() {
        return (<>
            <StoreLocator {...this.containerProps()} {...this.containerFunctions} />
        </>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);
