import api from "../../../Services";

import { createShowcase } from "./actions";

const createShowcaseThunk = () => {
    return(dispatch) => {
        api
        .get("/products")
        .then((response)=>dispatch(createShowcase(response.data)))
        .catch((err)=>console.log((err)));
    };
};

export default createShowcaseThunk;