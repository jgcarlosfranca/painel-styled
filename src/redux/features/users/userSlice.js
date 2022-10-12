import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: '0', name: 'Dude' },
    { id: '1', name: 'Bob' },
    { id: '0', name: 'John' },
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer