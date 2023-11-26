import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";
import receipesReducer from "../features/receipe/receipesSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    receipes: receipesReducer,
  },
});
