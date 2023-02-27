

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import playerService from './playerService'


const initialState = {
    players: [],
    player: [],
}

 // create new team
 export const createPlayer = createAsyncThunk(
    'players/createPlayer', 
    async (playerData, thunkAPI) => {
        console.log("playerSlice: line 16")
        try{
            //const token = thunkAPI.getState().auth.user.token
            return await playerService.createPlayer(playerData)
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
 export const getPlayers = createAsyncThunk(
    'players/getPlayers', 
    async (_, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await playerService.getPlayers(token)
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
 export const getPlayersHome = createAsyncThunk(
    'players/getPlayers', 
    async (_, thunkAPI) => {
     
        try{
            return await playerService.getPlayersHome()
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
export const getPlayer = createAsyncThunk(
    'players/get', 
    async (playerId, thunkAPI) => {
     
        try{
            const token = thunkAPI.getState().auth.user.token
            return await playerService.getPlayer(playerId, token)
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

// edit a player
export const editPlayer = createAsyncThunk(
    'players/editPlayer', 
    async (player, thunkAPI) => {
        try{
            return await playerService.editPlayer(player)
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
export const deletePlayer = createAsyncThunk(
    'players/deletePlayer', 
    async (player, thunkAPI) => {
        try{
            console.log('playersice ' + player)
            return await playerService.deletePlayer(player)
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

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    
    extraReducers: (builder) => {
        builder
        .addCase(createPlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createPlayer.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
        })
        .addCase(createPlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getPlayers.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPlayers.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(getPlayers.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getPlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getPlayer.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(getPlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deletePlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deletePlayer.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(deletePlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(editPlayer.pending, (state) => {
            state.isLoading = true
        })
        .addCase(editPlayer.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.players = action.payload
        })
        .addCase(editPlayer.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})


export const {reset} = playerSlice.actions
export default playerSlice.reducer