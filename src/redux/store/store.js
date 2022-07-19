import { configureStore } from "@reduxjs/toolkit";
import sideBarBehaviorReducer from "../features/sideBarBehaviorSlice";


export const store = configureStore({
    reducer: {
        sidebarBehavior: sideBarBehaviorReducer,
    }
})