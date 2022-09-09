/*
 * Base Google Map example
 */
import PropTypes from "prop-types";
import React, { PureComponent } from "react";
// import shouldPureComponentUpdate from "react-pure-render/function";
import Marker from "./Marker/Marker";

import GoogleMapReact from "google-map-react";
// import MyGreatPlace from "./my_great_place.jsx";

// const Marker = ({ text }) => <div>{text}</div>;

const mapStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  height: "21px",
  width: "32px",
  background: "red",
};

// function createMapOptions(map) {
//   // next props are exposed at maps
//   // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
//   // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
//   // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
//   // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
//   // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
//   return {
//     scrollwheel: true,
//     zoomControlOptions: true,
//     ZoomControlStyle: {
//       style: mapStyle,
//     },
//     mapTypeControlOptions: {
//       position: map.ControlPosition.TOP_RIGHT, // this makes the map type control disappear
//     },
//     draggable: true,
//     rotateControl: true,
//     scaleControl: true,
//     streetViewControl: true,
//     panControl: false,
//     Animation: true,
//     MaxZoomStatus: true,
//   };
// }

const createMapOptions = (maps) => {
  return {
    disableDefaultUI: true,
    mapTypeControl: true,
    streetViewControl: true,
    scrollwheel: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }],
      },
    ],
  };
};

// renderMarkers(map, maps) {
//   let marker = new maps.Marker({
//     position: [59.938043, 30.337157],
//     map,
//     // title: "Hello World!",
//   });
//   return marker;
// }
class GoogleMap extends PureComponent {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any,
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 12,
    greatPlaceCoords: { lat: 59.724465, lng: 30.080121 },
  };

  // shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: [59.938043, 30.337157],
      map,
      title: "Hello World!",
    });
    return marker;
  }

  render() {
    return (
      <>
        <GoogleMapReact
          options={{
            styles: map_style ? JSON.parse(map_style) : [],
          }}
          onGoogleApiLoaded={({ map, maps }) => {
            window.map = map;
            let icon = map_markericon
              ? media(map_markericon, MARKER_ICON_PATH)
              : pinBigImage;
            if (filteredStores.length === 1)
              icon = map_selected_markericon
                ? media(map_selected_markericon, SELECTED_MARKER_ICON_PATH)
                : pinBigImageSelected;
            filteredStores.map((item) => {
              let marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                icon: icon,
              });

              addMarkerRef(item.store_id, marker);
              google.maps.event.addListener(marker, "click", function () {
                var infowindow = new google.maps.InfoWindow({
                  content: `<div class="shop-list__title">
                  ${item.name}
                  </div><div class="shop-list__text"><p>
                  ${item.address}</p>
                  </div>

                  <div class="shop-list__text"><p>
                  ${item.email}</p>
                  ${
                    item.phone ? <p>{__("Τηλέφωνο : %s", item.phone)}</p> : ""
                  }</div>`,
                });
                infowindow.open(map, this);
                selectStore(item);
              });
            });
          }}
          bootstrapURLKeys={{
            key: google_api_key
              ? google_api_key
              : "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec",
          }}
          center={[59.938043, 30.337157]}
          zoom={defaultZoom}
        ></GoogleMapReact>

        {/* <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyCqHWXniQhMZc7PBV-daLmW0q8T9Kceb10",
          }}
          center={this.props.center}
          zoom={this.props.zoom}
          options={createMapOptions}
          // onGoogleApiLoaded={({ map, maps }) =>
          //   this.renderMarkers(map, maps)
          // }
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
            color="black"
          />
        </GoogleMapReact> */}
      </>
    );
  }
}

export default GoogleMap;
