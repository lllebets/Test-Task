import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import productListReducer from "./productListSlice";
import linkIdReducer from "./linkIdSlice";


export default configureStore({
    reducer: {
        product: productReducer,
        productList: productListReducer,
        linkId: linkIdReducer
    }
});
