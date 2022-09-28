import {PureComponent} from "react";

import StoreLocatorMap from "../../component/StoreLocatorMap";

import "./StoreLocator.style.scss";

class StoreLocator extends PureComponent {
    render() {
        const {
            items, showstoreinfo, handleStoreButtonClick, handleClosedButtonClick, // later add
            // google_map_api_key,
        } = this.props;

        return (<main block="StoreLocator">
                <StoreLocatorMap
                    items={items}
                    showstoreinfo={showstoreinfo}
                    handleStoreButtonClick={handleStoreButtonClick}
                    handleClosedButtonClick={handleClosedButtonClick}
                />
            </main>);
    }
}

export default StoreLocator;
