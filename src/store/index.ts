import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import  codesReducer  from './state/codesSlice'
import uiReducer from './state/uiSlice'
import semestersReducer from './state/semestersSlice'
//api
import { uptApi } from './api/upt-api'
import { uptApiAuth } from './api/upt-api-auth'

export const store = configureStore({
  reducer: {
    codes:codesReducer,
    ui:uiReducer,
    semesters:semestersReducer,
    [uptApi.reducerPath]: uptApi.reducer,
    [uptApiAuth.reducerPath]: uptApiAuth.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(uptApi.middleware).concat(uptApiAuth.middleware),
    
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);