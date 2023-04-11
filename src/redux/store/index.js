import mainReducer from "../reducers";
import jobReducer from "../reducers/job";
import localStorage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
// configureStore will set up the Redux Store for us!

const bigReducer = combineReducers({
  favourite: mainReducer,
  job: jobReducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["favourite", "job"],
};

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
// now the store is ready! let's INJECT IT into our REACT APP!
// we do it in the src/index.js file
