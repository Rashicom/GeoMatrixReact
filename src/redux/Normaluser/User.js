import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    user: "",
    access:"",
    refresh:"",
}


const userSlice = createSlice({
    name:"user",
    initialState: INITIAL_STATE,
    reducers:{

        login: (state,action) => {
            state.access = action.payload.email
            state.refresh = action.payload.password
            console.log(action)
        },

        logout: (state) => {
            state.access = ""
            state.refresh = ""
        }
    }
})


export const {login, logout} = userSlice.actions;
 
export default userSlice.reducer;
