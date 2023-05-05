import sideBarBehaviorReducer from "../features/sideBarBehaviorSlice";
import postsReducer from "../features/posts/postsSlice";
import userReducer from "../features/users/userSlice"

export default rootReducers = {
    sidebarBehavior: sideBarBehaviorReducer,
    posts: postsReducer,
    users: userReducer,
}