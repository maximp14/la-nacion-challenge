import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  tags: [],
};

export const accumulatedSlice = createSlice({
  name: "accumulated",
  initialState,
  reducers: {
    setArticles: (state, { payload }) => ({
      ...state,
      articles: payload,
    }),
    setTags: (state, { payload }) => ({
      ...state,
      tags: payload,
    }),
  },
});
