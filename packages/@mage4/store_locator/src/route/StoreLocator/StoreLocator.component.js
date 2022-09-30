import {PureComponent} from "react";
import StoreLocatorMap from "@mage4/store_locator/src/component/StoreLocatorMap";
import "./StoreLocator.style.scss";

class StoreLocator extends PureComponent {
    render() {
        const {
            items, showstoreinfo, handleStoreButtonClick, handleClosedButtonClick, term, isLoaded, error ,handleinputfiled
        } = this.props;

        return (
            <main block="StoreLocator">
            <StoreLocatorMap
                items={items}
                term={term}
                isLoaded={isLoaded}
                error={error}
                showstoreinfo={showstoreinfo}
                handleStoreButtonClick={handleStoreButtonClick}
                handleClosedButtonClick={handleClosedButtonClick}
                handleinputfiled={handleinputfiled}
            />
        </main>);
    }
}

export default StoreLocator;
