import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './reducers/colorReducer';

export const store = configureStore({
    reducer: {
        color: colorReducer
    }
})