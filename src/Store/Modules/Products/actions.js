import { CREATE_SHOWCASE } from "./actionTypes";

export const createShowcase = (products) => ({
    type:CREATE_SHOWCASE,
    products,
});