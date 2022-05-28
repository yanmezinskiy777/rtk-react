import { configureStore } from "@reduxjs/toolkit"
import { IBook, reducer as bookReducer } from "../features/book/bookSlice"
import { IUserData, reducer as userReducer } from "../features/user/userSlice"


const store = configureStore({
    reducer:{
        book: bookReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;