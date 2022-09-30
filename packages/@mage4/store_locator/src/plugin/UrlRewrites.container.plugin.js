export const TYPE_STORE_LOCATOR = 'STORE_LOCATOR';


export class UrlRewritesContainerPlugin {

    static stateMapping = {
        store_locator_url: TYPE_STORE_LOCATOR
    };

    redirectToCorrectUrl(args, callback, instance) {
        if ([TYPE_STORE_LOCATOR].includes(type)) {
            if (location.pathname.endsWith('/')) {
                history.replace(location.pathname.slice(0, -1), history.state);
            }
        }
        return callback.apply(instance, args);
    }

    getTypeSpecificProps = (args, callback, instance) => {

        instance.redirectToCorrectUrl();
        switch (this.getType()) {
            case TYPE_STORE_LOCATOR:
                if (isLoading) {
                    const StoreLocator = history?.state?.state?.store_locator_url;

                    if (StoreLocator) {
                        return {Store_locator_Url: StoreLocator};
                    }

                    return {};
                }

                return {Store_locator_Url: url};

        }
        return callback.apply(instance, args);
    }


}

const {redirectToCorrectUrl, getTypeSpecificProps} = new UrlRewritesContainerPlugin();


export const config = {
    'Route/UrlRewrites/Container': {
        'member-function': {
            redirectToCorrectUrl: redirectToCorrectUrl(), getTypeSpecificProps: getTypeSpecificProps()
        }
    }
}


export default config;



