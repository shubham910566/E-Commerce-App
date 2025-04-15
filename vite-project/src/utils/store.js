import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cartSlice"
import searchSlice from "./searchSlice";

const appStore = configureStore({
    reducer: {
        cart: cartSlice,
        search: searchSlice,
    },
});

export default appStore