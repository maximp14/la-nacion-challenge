import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./root-reducer";

export const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});
