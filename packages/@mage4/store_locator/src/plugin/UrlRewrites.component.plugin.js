// import {lazy} from "react";
// export const StoreLocator = lazy(() => import(/* webpackMode: "lazy", webpackChunkName: "misc" */ '../route/StoreLocator'));
import StoreLocator from "../route/StoreLocator";

export const TYPE_STORE_LOCATOR = 'STORE_LOCATOR';

const renderStoreLocatorPage = (args, callback, instance) => {
    const {history, location, match} = instance.props;
    console.log("props in Store_Com", instance.props)

    return (<StoreLocator
        history={history}
        location={location}
        match={match}
    />);

    return callback.apply(instance, args);
}

console.log("renderStoreLocatorPage"  ,renderStoreLocatorPage)


const renderContent = (args, callback, instance) => {
    let data = callback.apply(instance, args);


    switch (type) {
        case TYPE_STORE_LOCATOR:
            return this.renderStoreLocatorPage();
    }


    return data;
}


export const config = {
    'Route/UrlRewrites/Component': {
        'member-function': {
            renderStoreLocatorPage: renderStoreLocatorPage(), renderContent: renderContent(),

        }
    }
}

export default config;





