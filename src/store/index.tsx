import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import global from './global'

// redux persist 来实现状态持久化
const persistConfig = {
    key: "redux-state",
    storage: storage
};

const persistReducerConfig = persistReducer(persistConfig, global);

export const store = configureStore({
    reducer: persistReducerConfig
})

export const persistor = persistStore(store);

