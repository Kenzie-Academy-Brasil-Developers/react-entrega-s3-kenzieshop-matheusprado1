import { addProduct, removeProduct } from "./actions";

export const addCartThunk = (product) => (dispatch) => {
  dispatch(addProduct(product));
};

export const removeCartThunk = (product) => (dispatch) => {
    dispatch(removeProduct(product));
};
