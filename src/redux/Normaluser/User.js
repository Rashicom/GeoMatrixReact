import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../Api/users/Users";

const INITIAL_STATE = {}


export const fetchUser = createAsyncThunk("user/fetchuser", (credencials)=> {
    const response = loginUser(credencials)
    return response
    
})


const userSlice = createSlice({
    name:"user",
    initialState: INITIAL_STATE,
    reducers:{

        login: (state,action) => {
            
            console.log(action)
        },

        logout: (state) => {
            state.access = ""
            state.refresh = ""
        }
    },
    extraReducers:{
        [fetchUser.pending]: (state,action) => {
            console.log("pending")
        },

        [fetchUser.fulfilled]: (state,action) => {
            console.log("success")
            state.access = action.payload.access
            state.refresh = action.payload.refresh
            state.user = action.payload.email
        
        },

        [fetchUser.rejected]: (state,action) => {
            console.log("rejected")
            console.log(action.error)
            state.error = "Invalid password or Email"
            
        },

    }
})


export const {login, logout} = userSlice.actions;
 
export default userSlice.reducer;
