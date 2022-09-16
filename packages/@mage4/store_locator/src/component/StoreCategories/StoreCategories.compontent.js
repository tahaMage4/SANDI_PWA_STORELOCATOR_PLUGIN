import React, {PureComponent} from "react";
import "./StoreCategories.style.scss";
import clickarrow from '../../public/assets/images/global/clickarrow.png';

/** @namespace Component/StoreCategories/Compontent */
class StoreCategoriesCompontent extends PureComponent {
    render() {
        const {items, handleCategoryTabButtonClick, selectedstore} = this.props;

        return (<>
                <h1>storelocator</h1>
                <div id="StoreCategories" className="StoreCategories">
                    {items.map((item, index) => {
                        return (<div
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
                      {selectedstore === item.name ? (<img
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
