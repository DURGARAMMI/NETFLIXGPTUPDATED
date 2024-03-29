import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    }
});

export default appStore;