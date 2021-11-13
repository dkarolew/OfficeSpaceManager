import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import sectorsReducer from '../store/sectorsSlice'


const reducer = combineReducers({
    sectors: sectorsReducer,
})

export type AppState = ReturnType<typeof store.getState>

const store = configureStore({
    reducer,
})


export default store;