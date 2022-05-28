import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numberOfBooks: 30
}

export interface IBook {
    numberOfBooks: number;
}

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers:{
        order: (state) => {
            state.numberOfBooks--;
        },
        restocked: (state) => {
            state.numberOfBooks++
        }
    }
})

export const { reducer, actions } = bookSlice;