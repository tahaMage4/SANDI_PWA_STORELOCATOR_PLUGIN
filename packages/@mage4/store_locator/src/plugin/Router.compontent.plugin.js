import { lazy } from "react";
import { Route } from "react-router-dom";

import { withStoreRegex } from "Component/Router/Router.component";

export const StoreLocator = lazy(() =>
  import(
    /* webpackMode: "lazy", webpackChunkName: "extension-name" */
    "../route/StoreLocator"
  )
);

const SWITCH_ITEMS_TYPE = (storelocator) => [
  ...storelocator,
  {
    component: (
      <Route
        path={withStoreRegex("/stores")}
        render={(props) => <StoreLocator {...props} />}
      />
    ),
    position: 122,
  },
];

export const config = {
  "Component/Router/Component": {
    "member-property": {
      SWITCH_ITEMS_TYPE,
    },
  },
};

export default config;
