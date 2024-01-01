import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
    },
    reducers: {
        logout: (state) => {
            state.currentUser = null;
        },
        addUser: (state, action)=>{
            state.currentUser=action.payload;
        }
    }
});

export const { logout, addUser } = UserSlice.actions;

export default UserSlice.reducer;