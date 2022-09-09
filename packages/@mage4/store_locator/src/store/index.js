// import the original getStaticReducers function
// and rename it to baseGetStaticReducers
import { getStaticReducers as baseGetStaticReducers } from "SourceStore/index";

// import our own reducer
import StoreLocatorReducer from "./StoreLocator/StoreLocator.reducer";

export const getStaticReducers = () => ({
  ...baseGetStaticReducers(),
  StoreLocatorReducer,
});

// nothing new here, just copying the function from the base theme
// (this is necessary so that it uses our own `getStaticReducers` function
export default function injectStaticReducers(store) {
  Object.entries(getStaticReducers()).forEach(([name, reducer]) =>
    store.injectReducer(name, reducer)
  );

  return store;
}
