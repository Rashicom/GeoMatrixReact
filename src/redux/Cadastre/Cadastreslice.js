import { createSlice } from "@reduxjs/toolkit"



const INITIAL_STATE = {
    cadastre:null,
    loading:null,
    error:null
}

const cadastreSlice = createSlice({
    name: "cadastre",
    initialState: INITIAL_STATE,
    reducers: {
        setCadastre: (state, action) => {
            state.cadastre = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }

})

export const {setCadastre, setLoading, setError} = cadastreSlice.actions
export default cadastreSlice.reducer