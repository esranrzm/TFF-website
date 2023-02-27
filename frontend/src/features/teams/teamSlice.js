import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import teamService from './teamService'

const initialState = {
    teams: [],
    team: [],
    
}

 // create new team
 export const createTeam = createAsyncThunk(
    'teams/createTeam', 
    async (teamData, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.createTeam(teamData, token)
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

 // Get user teams
 export const getTeams = createAsyncThunk(
    'teams/getTeams', 
    async (_, thunkAPI) => {
        //console.log('teamslice: ' + userId)
        
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.getTeams(token)
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
export const getTeam = createAsyncThunk(
    'teams/getTeam', 
    async (teamId, thunkAPI) => {
        console.log('teamslice: ' + teamId)
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.getTeam(teamId, token)
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
export const getMyTeams = createAsyncThunk(
    'teams/getMyTeams', 
    async (getTeam, thunkAPI) => {
        console.log('teamslice: ' + getTeam)
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await teamService.getMyTeams(getTeam, token)
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

// delete a team
export const deleteTeam = createAsyncThunk(
    'auth/deleteTeam', 
    async (team, thunkAPI) => {
      //console.log('authslice team ' + team)
        try{
            return await teamService.deleteTeam(team)
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

  // delete a team
export const updateLike = createAsyncThunk(
    'teams/updateLike', 
    async (sentData, thunkAPI) => {
      //console.log('update slice team ' + sentData)
        try{
            return await teamService.updateTeam(sentData)
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
 


export const teamSlice = createSlice({
    name: 'team',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createTeam.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createTeam.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createTeam.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTeams.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getTeams.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getTeams.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getTeam.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getTeam.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getTeam.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getMyTeams.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getMyTeams.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(getMyTeams.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteTeam.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteTeam.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(deleteTeam.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(updateLike.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateLike.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.teams = action.payload
        })
        .addCase(updateLike.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})


export const {reset} = teamSlice.actions
export default teamSlice.reducer