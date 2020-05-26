import {
  ADD_TO_BASKET,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  DELETE_ITEM,
} from "store/types";

export const addToBasket = (products) => ({
  type: ADD_TO_BASKET,
  products,
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  id,
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  id,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});
