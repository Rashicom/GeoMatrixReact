import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from "../../Api/users/Users";

const INITIAL_STATE = {
    user:null,
    userinfo:null,
    userinvoice:null,
    loading:null,
    error:null
}



const userSlice = createSlice({
    name:"user",
    initialState: INITIAL_STATE,
    reducers:{
        
        setUser: (state,action) => {
            state.user = action.payload
        },
        
        setUserifo: (state,action) => {
            state.userinfo = action.payload
        },

        setUserinvoice: (state,action) => {
            state.userinvoice = action.payload
        },

        setLoading: (state,action) => {
            state.loading = action.payload
        },

        setError: (state,action) => {
            state.error = action.payload
        },

        logout: (state,action) => {
            state.access = ""
            state.refresh = ""
            state.user = ""
        }
    },

})


export const {setUser, setLoading, setError, logout, setUserifo, setUserinvoice} = userSlice.actions;
 
export default userSlice.reducer;
