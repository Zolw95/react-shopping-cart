import { DELETE_PRODUCT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
  }
};
