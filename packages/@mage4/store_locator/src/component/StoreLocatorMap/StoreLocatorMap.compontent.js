import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import media from 'Util/Media/Media';

import pinBigImageSelected from '../../public/assets/images/global/pinSelected.svg';
import { STORE_LOCATOR_MEDIA } from '../../Util/Media';
import MapStyle from './MapStyle.js';

import './StoreLocatorMap.style.scss';

/** @namespace Mage4/Store_locator/Component/StoreLocatorMap/Compontent/MapOptions */
export const MapOptions = (maps) => ({
    panControl: true,
    scrollwheel: true,
    styles: MapStyle
});

/** @namespace Mage4/Store_locator/Component/StoreLocatorMap/Compontent */
export class StoreLocatorMapCompontent extends PureComponent {
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };

    static defaultProps = {
        center: [38.000275, 23.733576],
        zoom: 12,
        greatPlaceCoords: {
            lat: 59.9695413,
            lng: 30.382844
        }
    };

    // For allow the user location
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (window.map) {
                    window.map.panTo(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
                }
            });
        }
    }

    // fly to the select store region
    flyTo(store) {
        window.map.panTo(new google.maps.LatLng(store.lat, store.lng), location);
        window.map.setZoom(12);
        if (window.innerWidth < 786) {
            window.scrollTo(0, 500);
        }
    }

    onSubmitData = (e) => {
        e.preventDefault();
    };

    render() {
        const {
            items,
            google_api_key,
            term,
            isLoaded,
            error,
            handleinputfiled
        } = this.props;

        if (error) {
            return alert('Error on Logic');
        }

        if (isLoaded && !isLoaded) {
            return <h1>loading....</h1>;
        }

        return (<>
                <h1 className="stores__title">{__('Store Locator')}</h1>
                <button onClick={this.getLocation}>
                    <p className="location">
                        {__('Get Current Location')}
                    </p>
                </button>
                <div id="StoreLocatorMap" className="StoreLocatorMap">
                    { /* store left data */}
                    <div>
                        <div className="Search__Items">
                            <form onSubmit={this.onSubmitData}>
                                <div>
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        placeholder="search...."
                                        onChange={handleinputfiled}
                                    />
                                </div>
                                <div style={{ marginTop: '15px' }}>
                  <span>
                    {term.length < 4 ? 'At least type 4 letter' : null}
                  </span>
                                </div>
                            </form>
                            { /* left side */}
                            <div className="sidebar_left">
                                <div className="sidebar_scroll">
                                    <div className="shop-list stores__list">
                                        <ol className="shop-list__list hide-lg">
                                            {items && items.map((store) => {
                                                if (term !== '') {
                                                    if (store.name?.toLowerCase()
                                                        .includes(term) || store.description?.toLowerCase()
                                                        .includes(term)) {
                                                        return (<div key={store.id}>
                                                                <li
                                                                    className="shop-list__shop"
                                                                    onClick={() => {
                                                                        this.flyTo(store);
                                                                    }}
                                                                >
                                                                    <div className="shop-list__content">
                                                                        <p className="shop-list__title">
                                                                            {store.name}
                                                                        </p>
                                                                        <p className="shop-list__text">
                                                                            {store.description}
                                                                        </p>
                                                                        <div/>
                                                                    </div>
                                                                </li>
                                                            </div>);
                                                    }
                                                    return null;
                                                }
                                                // hold the state of the stores
                                                return (<div>
                                                        <li
                                                            className="shop-list__shop"
                                                            onClick={() => {
                                                                this.flyTo(store);
                                                            }}
                                                        >
                                                            <div className="shop-list__content">
                                                                <p className="shop-list__title">
                                                                    {store.name}
                                                                </p>
                                                                <p className="shop-list__text">
                                                                    {store.description}
                                                                </p>
                                                                <div/>
                                                            </div>
                                                        </li>
                                                    </div>);
                                            })}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        { /* left side End */}
                    </div>
                    { /* store right side */}
                    <div className="stores__right">
                        { /* map right side */}
                        <div
                            id="map"
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            {items.length !== 0 ? (<GoogleMapReact
                                    bootstrapURLKeys={{
                                        key: google_api_key || 'AIzaSyCqHWXniQhMZc7PBV-daLmW0q8T9Kceb10'
                                    }}
                                    center={this.props.center}
                                    zoom={this.props.zoom}
                                    options={MapOptions()}
                                    onGoogleApiLoaded={({
                                        map,
                                        maps
                                    }) => {
                                        window.map = map;
                                        items.map((stores) => {
                                            const marker = new maps.Marker({
                                                position: new maps.LatLng(stores.lat, stores.lng),
                                                map,
                                                icon: pinBigImageSelected,
                                                animation: maps.Animation.BOUNCE
                                            });

                                            google.maps.event.addListener(marker, 'click', () => {
                                                const infowindow = new google.maps.InfoWindow({
                                                    content: `
                                       <div class="store-tooltip__content">
                                        <img class="store__image" src=${media(stores.image, STORE_LOCATOR_MEDIA)} />

                                       <div class="store-tooltip__title">${stores.name}</div>
                                         <div class="store-tooltip__buttons">
                                        <a href="http://maps.google.com/maps?z=12&t=m&q=loc:${stores.lat}+${stores.lng}" target="_blank">
                                         <button class="store-tooltip__button__div">
                                         <span>
                                         <img class="store-tooltip__button__img" src="pinBigImageSelected" >
                                         </span>

                                         </button>
                                         <span class="store-tooltip__button__text" > Direction </span>
                                         </a>
                                         </div>


                                         <div class="store-tooltip__details">

                                         <div class="store-tooltip__address">
                                         <div><img class="store-tooltip__button__img" src={pinBigImageSelected}></div>
                                         <div>
                                         <P>${stores.address}</p>
                                         </div>
                                         </div>
                                         <div class="store-tooltip__address">
                                         <div>
                                         <img class="store-tooltip__button__img" src={pinBigImageSelected}>
                                         </div>
                                         <div>
                                         <P>${stores.phone}</p>
                                         </div>
                                         </div>
                                         </div>


                                   <div class="select">
                                       <select name="slct" id="slct">
                                         <option>Open Hours</option>
                                         <option value="1">24</option>
                                         <option value="2">24</option>
                                         <option value="3">24</option>
                                         <option value="4">24</option>
                                         <option value="5">24</option>
                                       </select>
                                   </div>
                                         </div>
                                        </div>
                                        `
                                                });

                                                infowindow.open(map, marker);
                                            });
                                        });
                                    }}
                                />) : null}
                        </div>
                    </div>
                </div>
            </>);
    }
}

export default StoreLocatorMapCompontent;
