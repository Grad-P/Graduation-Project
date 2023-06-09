import { configureStore } from '@reduxjs/toolkit';
import { PredictMonkeyPoxSlice } from './predict.slice';

export const store = configureStore({
  reducer: {
    PredictMonkeyPoxSlice: PredictMonkeyPoxSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
