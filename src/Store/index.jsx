import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./ui-slice";

const store = configureStore({
    reducer: { ui: UISlice.reducer}
});

export default store;

