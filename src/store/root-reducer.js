import { accumulatedSlice } from "../store/accumulated/accumulatedSlice";

export const appReducer = {
  accumulated: accumulatedSlice.reducer,
};
