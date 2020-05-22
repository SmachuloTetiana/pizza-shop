import { ADD_TO_BASKET } from "store/types";

export const addToBasket = (products) => ({
  type: ADD_TO_BASKET,
  products,
});
