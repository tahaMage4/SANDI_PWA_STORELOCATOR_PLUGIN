import React, {PureComponent} from "react";
import "./StoreCategories.style.scss";
import clickarrow from '../../public/assets/images/global/clickarrow.png';
import GoogleMapReact from "google-map-react";
import pinBigImageSelected from '../../public/assets/images/global/pinSelected.svg';

export const MARKER_ICON_PATH = "ideo/storelocator/markericon/";
export const SELECTED_MARKER_ICON_PATH = "ideo/storelocator/selected_markericon/";
import MapStyle from './MapStyle.js'
import PropTypes from "prop-types";


const MapOptions = (maps) => {
    return {
        panControl: true, scrollwheel: true, styles: MapStyle
    };
};


/** @namespace Component/StoreCategories/Compontent */
class StoreCategoriesCompontent extends PureComponent {
    static propTypes = {
        center: PropTypes.array, zoom: PropTypes.number, greatPlaceCoords: PropTypes.any,
    };
    static defaultProps = {
        center: [38.000275, 23.733576], zoom: 12, greatPlaceCoords: {lat: 59.9695413, lng: 30.382844},
    };


    flyTo(item) {
        setTimeout(() => {
            window.map.panTo(new google.maps.LatLng(item.lat, item.lng));
            window.map.setZoom(12);

        }, 1000)
        console.log("items in fly to " , item)
    }


    render() {
        const {items,  selectedstore , google_api_key} = this.props;
        console.log("props in compontent" , this.props)


        //Calculate the height of the items & Map compontent
        // let storeCategoriesHeight = 432;
        // let storeCategories = document.getElementById("StoreCategories");
        //
        // if (items && items.length < 10) {
        //     storeCategoriesHeight = items.length * 48;
        // }



        return (<>
            <h1 className="stores__title">Store Locator</h1>

            <div id="StoreCategories" className="StoreCategories">
                {items.map((item, index) => {
                    return (<div
                        key={index}
                        id={index}
                        className="stores__checkboxes"
                        // onClick={() => {
                        //     handleCategoryTabButtonClick(item.stores, item.name);
                        // }}
                    >
                        <label className="list-checkbox">
                            <input
                                name="stores"
                                type="checkbox"
                                className="list-checkbox__input"
                            />
                            <span className="list-checkbox__box">
                    <p  onClick={() => {
                        this.flyTo(item)
                    }} className="list-checkbox__text">{item.name}</p>

                    <span className="list-checkbox__tick ">
                      {item.name ? (<img
                          src={clickarrow} alt="click_items"
                      />) : null}
                    </span>
                  </span>
                        </label>
                    </div>);
                })}
            </div>



        </>);
    }
}

export default StoreCategoriesCompontent;
