import { configureStore} from "@reduxjs/toolkit";

import productsReducer from './Slice/productSlice';
import cartReducer from './Slice/cartSlice';
const store=configureStore({
    reducer:{
            products:productsReducer,
            cart:cartReducer
    },
});
export default store;