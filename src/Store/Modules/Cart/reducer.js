import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";

const initialState = JSON.parse(localStorage.getItem("@kenzieShopCart")) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      const { image, title, price } = action.product;
      const cartProduct = [
        ...state,
        { image: image, title: title, price: price },
      ];
      localStorage.setItem("@kenzieShopCart", JSON.stringify(cartProduct));
      return cartProduct;

      case REMOVE_PRODUCT:
          const productRemove = action.product;
          const newCart = state.filter((product)=> product !== productRemove);
          localStorage.setItem("@kenzieShopCart", JSON.stringify(newCart));
          return newCart;

          default:
              return state;
  }
};

export default cartReducer;
