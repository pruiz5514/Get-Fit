import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import authReducer from './features/authSlice';
import newRoutineReducer from './features/newRutineSlice';
import newRoutineViewReducer from './features/NewRoutineViewSlice';
import newRoutineInfoReducer from './features/NewRoutineInfoSlice'

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth","newRoutine", "newRoutineView", "newRoutineInfo"] 
};

const rootReducer = combineReducers({
    auth: authReducer,
    newRoutine: newRoutineReducer,
    newRoutineView: newRoutineViewReducer,
    newRoutineInfo: newRoutineInfoReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, 
    })
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
