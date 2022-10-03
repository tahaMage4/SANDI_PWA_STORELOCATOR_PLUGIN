import StoreLocator from "../route/StoreLocator";

export const TYPE_STORE_LOCATOR = 'STORE_LOCATOR';

const renderStoreLocatorPage = (args, callback, instance) => {
    const {history, location, match} = instance.props;

    return (<StoreLocator
            history={history}
            location={location}
            match={match}
        />);

    return callback.apply(instance, args);
}


const renderContent = (args, callback, instance) => {
    let data = callback.apply(instance, args);

    const {type} = instance.props;

    switch (type) {
        case TYPE_STORE_LOCATOR:
            return instance.renderStoreLocatorPage();
    }

    return data;
}


export const config = {
    'Route/UrlRewrites/Component': {
        'member-function': {
            renderStoreLocatorPage: renderStoreLocatorPage, renderContent: renderContent

        }
    }
}

export default config;





