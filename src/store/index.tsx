import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import cartReducer from 'actions/cartSlice';
import userReducer from 'actions/userSlice';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
};

const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: persistReducer(cartPersistConfig, cartReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
