import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./player";
import machineReducer from "./machine";
import screenReducer from "./screen";
import audioReducer from "./audio";

const store = configureStore({
  reducer: {
    player: playerReducer,
    machine: machineReducer,
    screen: screenReducer,
    audio: audioReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
