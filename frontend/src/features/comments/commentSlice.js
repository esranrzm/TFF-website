import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import commentService from './commentService'

export const createComment = createAsyncThunk(
    'comments/createComment', 
    async (commentData, thunkAPI) => {
        try{
            console.log("commentData commentSlice",commentData)
            const token = thunkAPI.getState().auth.user.token
            return await commentService.createComment(commentData, token)
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

  export const getComments = createAsyncThunk(
    'comments/getComments', 
    async (getComment, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await commentService.getComments(getComment, token)
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

 export const getAllComments = createAsyncThunk(
    'comments/getAllComments', 
    async (_, thunkAPI) => {
        try{
            const token = thunkAPI.getState().auth.user.token
            return await commentService.getAllComments(token)
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

export const commentSlice = createSlice({
    name: 'comment',
    extraReducers: (builder) => {
        builder
        .addCase(createComment.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createComment.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createComment.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getComments.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getComments.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getAllComments.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllComments.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getAllComments.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})


export const {reset} = commentSlice.actions
export default commentSlice.reducer
  