import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import reportsService from './reportsService'

const initialState = {
    ruser: [],
    rusers: []
}

// register new user
export const createReport = createAsyncThunk(
  'report/createReport', 
  async (user, thunkAPI) => {
    console.log(user)
      try{
          return await reportsService.createReport(user)
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
 

// delete a reported user
export const deleterUser = createAsyncThunk(
  'report/deleterUser', 
  async (ruser, thunkAPI) => {
    console.log('authslice user ' + ruser)
      try{
          return await reportsService.deleterUser(ruser)
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

// Get reported user
export const getrUser = createAsyncThunk(
  'report/getrUser', 
  async (ruser, thunkAPI) => {
      console.log('teamslice: ' + ruser)
   
      try{
          
          return await reportsService.getrUser(ruser)
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

export const getrUsers = createAsyncThunk(

  'report/getrUsers',
  async (_, thunkAPI) => {
    console.log("authSlice: line 134")
  
      try{
        
        return await reportsService.getrUsers()
      }catch (error){
        console.log("authSlice: line 140")

          const message = 
          (error.response && 
              error.response.data && 
              error.response.data.message) || 
              error.message || 
              error.toString()

              
              return thunkAPI.rejectWithValue(message)
      }
})



export const reportsSlice = createSlice({
    name: 'report',
    initialState,
    
    extraReducers: (builder) => {
        builder
          .addCase(createReport.pending, (state) => {
            state.isLoading = false
          })
          .addCase(createReport.fulfilled, (state, action) => {
            state.ruser = action.payload
            state.isLoading = false
          })
          .addCase(createReport.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(deleterUser.pending, (state) => {
            state.isLoading = false
          })
          .addCase(deleterUser.fulfilled, (state, action) => {
            state.ruser = action.payload
            state.isLoading = false
          })
          .addCase(deleterUser.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(getrUser.pending, (state) => {
            state.isLoading = false
          })
          .addCase(getrUser.fulfilled, (state, action) => {
            state.ruser = action.payload
            state.isLoading = false
          })
          .addCase(getrUser.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(getrUsers.pending, (state) => {
            state.isLoading = false
          })
          .addCase(getrUsers.fulfilled, (state, action) => {
            state.ruser = action.payload
            state.isLoading = false
          })
          .addCase(getrUsers.rejected, (state) => {
            state.isLoading = false
          })
    }

})
export const {reset} = reportsSlice.actions
export default reportsSlice.reducer
