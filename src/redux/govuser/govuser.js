import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    loading:null,
    error:null,
    taxlist:null
}


const govuserSlice = createSlice({
    name: "govuser",
    initialState: INITIAL_STATE,
    reducers:{

        setGovuser: (state,action) =>{
            state.govuser = action.payload
        },

        setTaxlist: (state,action) =>{
            state.taxlist = action.payload
        },

        setLoading: (state,action) =>{
            state.loading = action.payload
        },

        setError: (state,action) =>{
            state.error = action.payload
        },

        logout: (state,action) => {
            console.log("logout")
            state.user = ""
            state.role = ""
            state.access = ""
            state.refresh = ""
        }
    },
    
})

export const {setGovuser, setLoading,setError,logout,setTaxlist} = govuserSlice.actions
export default govuserSlice.reducer;