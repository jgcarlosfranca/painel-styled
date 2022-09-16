import { configureStore } from "@reduxjs/toolkit";
import sideBarBehaviorReducer from "../features/sideBarBehaviorSlice";
import postsReducer from "../features/posts/postsSlice";


export const store = configureStore({
    reducer: {
        sidebarBehavior: sideBarBehaviorReducer,
        posts: postsReducer,
    }
})