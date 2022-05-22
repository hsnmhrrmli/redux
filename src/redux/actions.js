import { ADD_GOOD_TO_CART, REMOVE_GOOD_TO_CART } from "./action-type";

export function addGoodToCart(id) {
  return {
    type: ADD_GOOD_TO_CART,
    payload: {
      id: id,
    },
  };
}

export function removeGoodToCart(id) {
  return {
    type: REMOVE_GOOD_TO_CART,
    payload: {
      id: id,
    },
  };
}
