import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

interface IUser{
    id: number;
    name: string;
    username: string;
}

export interface IUserData {
    data:IUser;
    loading: boolean;
    error: string;
}

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  try {
    const result = await axios.get<IUser>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return result.data;
  } catch (error: any) {
    return error.message;
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { reducer } = userSlice;
export { fetchUsers };
