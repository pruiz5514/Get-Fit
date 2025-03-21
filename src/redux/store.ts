import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import authReducer from './features/authSlice'
import newRoutineReducer from './features/newRutineSlice'

const persistConfig = {
    key: "root",
    storage,
    whiteList: ["auth"]
};

const rootReducer = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    newRoutine: newRoutineReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
    })
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch