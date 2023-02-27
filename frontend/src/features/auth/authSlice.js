import {createSlice, createAsyncThunk, createAction} from '@reduxjs/toolkit'
import playerService from '../players/playerService'
import authService from './authService'

// get user from localStorage

const User = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: User ? User : null,
    isLoading: false,
    users: []
}
 // register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {
      //console.log(user)
        try{
            return await authService.register(user)
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

// login a user
export const login = createAsyncThunk(
    'auth/login', 
    async (user, thunkAPI) => {
        try{
            return await authService.login(user)
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

// login a admin
export const loginAdmin = createAsyncThunk(
  'auth/loginAdmin', 
  async (user, thunkAPI) => {
      try{
          return await authService.loginAdmin(user)
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

// update a user
export const update = createAsyncThunk(
  'auth/update', 
  async (user, thunkAPI) => {
      try{
          return await authService.update(user)
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

// delete a user
export const deleteUser = createAsyncThunk(
  'auth/deleteUser', 
  async (user, thunkAPI) => {
    console.log('authslice user ' + user)
      try{
          return await authService.deleteUser(user)
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
export const getUser = createAsyncThunk(
  'auth/getUser', 

  async (user, thunkAPI) => {
   
      try{
          const token = thunkAPI.getState().auth.user.token
          return await authService.getUser(user)

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

export const getUsers = createAsyncThunk(

  'auth/getUsers',
  async (_, thunkAPI) => {
    console.log("authSlice: line 134")
  
      try{
        const token = thunkAPI.getState().auth.user.token
        //console.log("authSlice: line 138")
        return await authService.getUsers()
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

//logout user
export const logout =  createAction('auth/logout', () => {
    authService.logout()

    return {}
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(register.pending, (state) => {
            state.isLoading = true
          })
          .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(register.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(login.pending, (state) => {
            state.isLoading = false
          })
          .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(login.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(loginAdmin.pending, (state) => {
            state.isLoading = false
          })
          .addCase(loginAdmin.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(loginAdmin.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(update.pending, (state) => {
            state.isLoading = false
          })
          .addCase(update.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(update.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(deleteUser.pending, (state) => {
            state.isLoading = false
          })
          .addCase(deleteUser.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(deleteUser.rejected, (state) => {
            state.isLoading = false
          })
          .addCase(getUsers.pending, (state) => {
            state.isLoading = false
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.user = action.payload
            state.isLoading = false
          })
          .addCase(getUsers.rejected, (state) => {
            state.isLoading = false
          })
    }

})
export const {reset} = authSlice.actions
export default authSlice.reducer
