import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import  codesReducer  from './state/codesSlice'
import semestersReducer from './state/semestersSlice'
//api
import { uptApi } from './api/upt-api'


export const store = configureStore({
  reducer: {
    codes:codesReducer,
    semesters:semestersReducer,
    [uptApi.reducerPath]: uptApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(uptApi.middleware),
    
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);