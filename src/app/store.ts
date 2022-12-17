import {configureStore} from "@reduxjs/toolkit";
import {codeReducer} from "../container/Code/codeSlice";

export const store = configureStore({
  reducer: {
    code: codeReducer,
  }
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;