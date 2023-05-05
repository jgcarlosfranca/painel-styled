import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";


export const store = configureStore({
    reducer: rootReducers
})