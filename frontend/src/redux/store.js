import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import robot from './robot';
import cart from './cart';

const rootReducer = combineReducers({ robot, cart });

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['robotSlice', 'cartSlice'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }), // this is redundant and for demonstration only
  devTools: true, // this is redundant and for demonstration only
  //preloadedState: {your state object for initialization or rehydration}
});

const persistor = persistStore(store);

export { store, persistor };
