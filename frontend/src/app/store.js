import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import teamReducer from '../features/teams/teamSlice'
import playerReducer from '../features/players/playerSlice'

export const store = configureStore({
  reducer: { 
    auth: authReducer,
    teams: teamReducer,
    players: playerReducer,
  },
});