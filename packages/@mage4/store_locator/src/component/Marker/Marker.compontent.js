import React, { Component } from "react";
import "./Marker.style.scss";
import "../StoreLocatorMap/StoreLocatorMap.style.scss";

export default class Marker extends Component {
  render() {
    const {
      handleStoreButtonClick,
      color,
      handleClosedButtonClick,
      showstoreinfo,
      filteredStores,
    } = this.props;
    return (
      <>
        <div
          onClick={() => {
            console.log("click marker plz");
          }}
          className=""
        >
          <div
            className="pin bounce"
            style={{ backgroundColor: color, cursor: "pointer" }}
            // title={name}
          />
          <div className="pulse"></div>
        </div>
        {/* <div>
          {showstoreinfo == true
            ? filteredStores.map((popupstate, index) =>
                index == 0 ? (
                  <div
                    key={index}
                    className="aaaa store-tooltip stores__tooltip is-active"
                    style={{ display: "block" }}
                    id="stores__tooltip"
                  >
                    <div className="store-tooltip__content">
                      <p className="store-tooltip__title">{popupstate.name}</p>
                      <p className="store-tooltip__text">{popupstate.city}</p>
                      <p className="store-tooltip__country">
                        {popupstate.country}
                      </p>
                      <p className="store-tooltip__phone">
                        <span>{popupstate.country} :</span>
                        <b>{popupstate.phone}</b>
                      </p>
                      <div className="store-tooltip__schedule">
                        <b>{popupstate.email}</b>
                        <b>{popupstate.open_hours}</b>
                      </div>
                      <a
                        className="button store-tooltip__button"
                        href="https://www.google.com/maps/search/?api=1&amp;z=14&amp;query=40.55592879054727,22.993335082471866"
                        target="_blank"
                      >
                        {popupstate.region} <b>Google maps</b>
                      </a>
                    </div>
                    <img
                      src="https://assets.ale.com.gr/media/wysiwyg/ale_icons/close_big.png"
                      alt=""
                      className="store-tooltip__close"
                      onClick={() => {
                        handleClosedButtonClick();
                      }}
                    />
                  </div>
                ) : null
              )
            : null}
        </div> */}
      </>
    );
  }
}
