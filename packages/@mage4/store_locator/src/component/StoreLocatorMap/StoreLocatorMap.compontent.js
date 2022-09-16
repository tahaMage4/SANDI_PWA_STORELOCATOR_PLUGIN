import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import "./StoreLocatorMap.style.scss";

import GoogleMapReact from "google-map-react";
import pinBigImageSelected from '../../public/assets/images/global/pinSelected.svg';
import {RIGHT} from "@scandipwa/scandipwa/src/component/ChevronIcon/ChevronIcon.config";

export const MARKER_ICON_PATH = "ideo/storelocator/markericon/";
export const SELECTED_MARKER_ICON_PATH = "ideo/storelocator/selected_markericon/";

const markerStyle = {
    position: "absolute", top: "100%", left: "50%", transform: "translate(-50%, -100%)", height: "21px", width: "32px",
};


const createMapOptions = (maps) => {
    return {
        panControl: true,
        mapTypeControl: true,
        scaleControl: true,
        overviewMapControl: true,
        disableDefaultUI: true,
        streetViewControl: true,
        scrollwheel: true,
        rotateControl: true,
        fullscreenControl: true,
        zoomControl: true,
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_TOP

        }
    };


};


class StoreLocatorMap extends PureComponent {
    static propTypes = {
        center: PropTypes.array, zoom: PropTypes.number, greatPlaceCoords: PropTypes.any,
    };
    static defaultProps = {
        center: [38.000275, 23.733576], zoom: 12, greatPlaceCoords: {lat: 59.9695413, lng: 30.382844},
    };

    flyTo(store) {
        setTimeout(() => {
            window.map.panTo(new google.maps.LatLng(store.lat, store.lng));
            window.map.setZoom(12);

        }, 1000)

    }


    render() {
        const {
            items,
            showstoreinfo,
            filteredStores,
            handleStoreButtonClick,
            handleClosedButtonClick,
            map_markericon,
            map_selected_markericon,
            map_style, // addMarkerRef,
            google_api_key,
            allStores
        } = this.props;

        //Calculate the height of the items & Map compontent
        let storeCategoriesHeight = 432;
        let storeCategories = document.getElementById("StoreCategories");

        if (items && items.length < 10) {
            storeCategoriesHeight = items.length * 48;
        }


        return (<>
            <div id="StoreLocatorMap" className="StoreLocatorMap">
                {/*left side */}
                <div className="sidebar_left">
                    <div className="sidebar_scroll">
                        <div className="shop-list stores__list">
                            <ol className="shop-list__list hide-lg">
                                {filteredStores.map((store, index) => (<div
                                    key={index}
                                >
                                    <li className="shop-list__shop" onClick={() => {
                                        this.flyTo(store)
                                    }}>
                                        <div className="shop-list__content">
                                            <p className="shop-list__text">{store.name}</p>
                                            <p className="shop-list__tel">
                                                <b>{store.country}</b>
                                                <a href="#">{store.phone}</a>
                                            </p>
                                            <p>{store.city}</p>
                                            <p>{store.country}</p>
                                            <p>{store.email}</p>
                                        </div>
                                    </li>
                                </div>))}
                            </ol>
                        </div>
                    </div>
                </div>

                {/*store right side */}
                <div
                    className="stores__right"
                    style={{marginTop: -storeCategoriesHeight}}
                >
                    {/*map right side*/}
                    <div id='map' style={{width: "100%", height: "100%"}}>
                        {allStores.length !== 0 ? <GoogleMapReact
                            bootstrapURLKeys={{
                                key: google_api_key ? google_api_key : "AIzaSyCqHWXniQhMZc7PBV-daLmW0q8T9Kceb10",
                            }}
                            center={this.props.center}
                            zoom={this.props.zoom}
                            options={createMapOptions}
                            onGoogleApiLoaded={({map, maps}) => {
                                window.map = map;
                                allStores.map(allstore => {
                                    let marker = new maps.Marker({
                                        position: new maps.LatLng(allstore.lat, allstore.lng),
                                        map: map,
                                        icon: pinBigImageSelected,
                                        animation: maps.Animation.BOUNCE,

                                    })

                                    google.maps.event.addListener(marker, 'click', function () {

                                        let infowindow = new google.maps.InfoWindow({
                                            content: `
                                       <div class="store-tooltip__content">
                                       <div class="shop-list__title">${allstore.name}</div>
                                        <div class="shop-list__text"><p>${allstore.address}</p>
                                               <p>${allstore.phone}</p>
                                               
                                               </div>
                                        </div>
                                        </div>
                                        `

                                        });
                                        infowindow.open(map, marker);
                                        // items(allstore);
                                    })
                                })
                            }}
                        >
                        </GoogleMapReact> : null

                        }
                    </div>
                </div>
            </div>
        </>)

    }
}

export default StoreLocatorMap;
