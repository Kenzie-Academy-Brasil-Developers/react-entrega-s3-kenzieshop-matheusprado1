import { CREATE_SHOWCASE } from "./actionTypes";

const initialState = [];

const productsReducer = (state=initialState, action) => {
    switch(action.type){
        case CREATE_SHOWCASE:
            return[...action.products];

            default:
                return state;
    }
};

export default productsReducer;