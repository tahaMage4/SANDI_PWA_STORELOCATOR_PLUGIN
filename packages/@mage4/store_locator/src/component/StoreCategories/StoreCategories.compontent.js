import React, { PureComponent } from "react";
import "./StoreCategories.style.scss";

/** @namespace Component/StoreCategories/Compontent */
class StoreCategoriesCompontent extends PureComponent {
  render() {
    const { items, handleCategoryTabButtonClick, selectedstore } = this.props;

    return (
      <>
        <h1>storelocator</h1>
        <div id="StoreCategories" className="StoreCategories">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                id={index}
                className="stores__checkboxes"
                onClick={() => {
                  handleCategoryTabButtonClick(item.stores, item.name);
                }}
              >
                <label className="list-checkbox">
                  <input
                    name="stores"
                    type="checkbox"
                    className="list-checkbox__input"
                  />
                  <span className="list-checkbox__box">
                    <p className="list-checkbox__text">{item.name}</p>

                    <span className="list-checkbox__tick ">
                      {selectedstore === item.name ? (
                        <img
                          // src="https://assets.ale.com.gr/media/wysiwyg/ale_icons/tick.png"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzQOj5A57uE1_9W06jjS7gcQbBFr8P1F9N1fdELRX3&s"
                          alt=""
                        />
                      ) : null}
                    </span>
                  </span>
                </label>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default StoreCategoriesCompontent;
