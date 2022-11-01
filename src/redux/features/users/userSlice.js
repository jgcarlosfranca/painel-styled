import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CUSTOM_POST_URL = 'http://localhost:5000/MyPostsList'; // precisa colocar o server up

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const response = await axios.get(CUSTOM_POST_URL);
    return response.data
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer