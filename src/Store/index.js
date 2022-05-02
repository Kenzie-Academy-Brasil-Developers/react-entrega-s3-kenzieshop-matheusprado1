import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import cartReducer from "./Modules/Cart/reducer";
import productsReducer from "./Modules/Products/reducer";

const reducers = combineReducers({
    products:productsReducer,
    cart:cartReducer,
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;