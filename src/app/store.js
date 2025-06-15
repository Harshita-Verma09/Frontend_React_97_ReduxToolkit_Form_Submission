import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "../features/nameSlice.js"

const store = configureStore({
    reducer: {
        user: nameReducer,
    },
});


export default store;