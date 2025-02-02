import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./reducers/productReducer";
import { singleProductReducer } from "./reducers/singleProductReducer";
import { carouselReducer } from "./reducers/carouselReducer";
import { categoryReducer } from "./reducers/categoryReducer";
import { filterReducer } from "./reducers/filterReducer,";
import { cartReducer } from "./reducers/cartReducer";

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const combineStore = combineReducers({
    products: productReducer,
    singleProduct: singleProductReducer,
    carousel: carouselReducer,
    categories: categoryReducer,
    filter: filterReducer,
    cart: cartReducer
})


const persistConfig = {
    key:'fake-store',
    storage,
    whitelist:['cart']
}

const persistedReducer = persistReducer(persistConfig, combineStore)



export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})


export const persistor = persistStore(store)