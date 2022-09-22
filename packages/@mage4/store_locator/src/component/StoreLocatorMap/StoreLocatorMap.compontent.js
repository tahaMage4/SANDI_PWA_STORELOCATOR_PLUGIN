import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import "./StoreLocatorMap.style.scss";
import GoogleMapReact from "google-map-react";
import pinBigImageSelected from '../../public/assets/images/global/pinSelected.svg';
import media from 'Util/Media/Media'
import {STORE_LOCATOR_MEDIA} from '../../Util/Media';

import MapStyle from './MapStyle.js';


const MapOptions = (maps) => {
    return {
        panControl: true, scrollwheel: true, styles: MapStyle
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
            items, map_markericon, map_selected_markericon, map_style, // addMarkerRef,
            google_api_key,
        } = this.props;

        return (

            <>
                <h1 className="stores__title">Store Locator</h1>
                <div id="StoreLocatorMap" className="StoreLocatorMap">

                    {/*left side */}
                    <div className="sidebar_left">
                        <div className="sidebar_scroll">
                            <div className="shop-list stores__list">
                                <ol className="shop-list__list hide-lg">
                                    {items.map((store, index) => (<div
                                        key={index}
                                    >
                                        <li className="shop-list__shop" onClick={() => {
                                            this.flyTo(store)
                                        }}>
                                            <div className="shop-list__content">
                                                <p className="shop-list__title">{store.name}</p>
                                                <p className="shop-list__text">{store.description}</p>
                                                <div>

                                                    <img src={media(store.image, STORE_LOCATOR_MEDIA)}/>

                                                </div>
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
                    >
                        {/*map right side*/}
                        <div id='map' style={{width: "100%", height: "100%"}}>
                            {items.length !== 0 ? <GoogleMapReact
                                bootstrapURLKeys={{
                                    key: google_api_key ? google_api_key : "AIzaSyCqHWXniQhMZc7PBV-daLmW0q8T9Kceb10",
                                }}
                                center={this.props.center}
                                zoom={this.props.zoom}

                                options={MapOptions()}

                                onGoogleApiLoaded={({map, maps}) => {
                                    window.map = map;
                                    items.map(stores => {
                                        let marker = new maps.Marker({
                                            position: new maps.LatLng(stores.lat, stores.lng),
                                            map: map,
                                            icon: pinBigImageSelected,
                                            animation: maps.Animation.BOUNCE,
                                        })

                                        google.maps.event.addListener(marker, 'click', function () {

                                            let infowindow = new google.maps.InfoWindow({
                                                content: `
                                       <div class="store-tooltip__content">
                                       <div class="store-tooltip__title">${stores.name}</div>
                                        <div class="store-tooltip__text">
                                         <p>${stores.phone}</p>
                                         <a href="http://maps.google.com/maps?z=12&t=m&q=loc:${stores.lat}+${stores.lng}" target="_blank"> get direction</a>
                                         </div>
                                        </div>
                                        </div>
                                        `

                                            });
                                            infowindow.open(map, marker)
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
