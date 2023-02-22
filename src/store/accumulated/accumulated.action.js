import accumulatedService from "../../services/accumulated.service";
import { accumulatedSlice } from "./accumulatedSlice";
import { articles, sortedTags } from "./reponse";

export const getArticles = () => async (dispatch) => {
  // const response = await accumulatedService.getArticles();

  // if (!response) return;

  dispatch(accumulatedSlice.actions.setArticles(articles));
};

export const getTags = () => async (dispatch) => {
  dispatch(accumulatedSlice.actions.setTags(sortedTags));
};
