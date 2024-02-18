import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: 0,
    name: '',
    states: []
}

const countySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        updateCountry: (state, action) => {
            state.id = action.payload?.id
            state.name = action.payload?.name
            state.states = action.payload?.states
        }
    }

})

export const { updateCountry } = countySlice.actions

export default countySlice.reducer;