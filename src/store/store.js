import countrySliceReducer from "./countrySlice";
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
        country: countrySliceReducer
    }
})