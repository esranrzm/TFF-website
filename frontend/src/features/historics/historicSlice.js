//historicSlice has been created

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import historicService from './historicService'


const initialState = {
    historics: [],
    historic: [],
}

 // create new team
 export const createHistoric = createAsyncThunk(
    'historics/createHistoric', 
    async (historicData, thunkAPI) => {
        console.log("@@@@" + JSON.stringify(historicData))
        try{
            //const token = thunkAPI.getState().auth.user.token
            return await historicService.createHistoric(historicData)
        }catch (error){
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }

})



// Get user team
export const getHistoric = createAsyncThunk(
    'historics/getHistoric', 
    async (personel, thunkAPI) => {   
        try{
            //console.log("HISTORICSLICE, LINE 40 " + personel)
            return await historicService.getHistoric(personel)
        }catch (error){
            console.log('lıne 43: ERROR ON THE HISTORICSLICE')
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) || 
                error.message || 
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }

})


export const historicSlice = createSlice({
    name: 'historic',
    initialState,
    
    extraReducers: (builder) => {
        builder
        .addCase(createHistoric.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createHistoric.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createHistoric.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getHistoric.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getHistoric.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.historics = action.payload
        })
        .addCase(getHistoric.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
       
    },
})


export const {reset} = historicSlice.actions
export default historicSlice.reducer