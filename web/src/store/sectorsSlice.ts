import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import {SectorWsm} from '../api/model'
import {API_BASE_URL} from "../utils/constans";

export interface SectorsStatusState {
    sectors: Array<SectorWsm>;
    status: 'idle' | 'pending' | 'succeeded' | 'failed';
    error?: string;
}

const initialState: SectorsStatusState = {
    sectors: [],
    status: 'idle',
    error: undefined,
}

export const fetchSectors = createAsyncThunk('sectors/fetchSectors', async () => {
    const response = await axios.get(API_BASE_URL + '/sectors', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.data;
})

const sectorsSlice = createSlice({
    name: 'sectors',
    initialState,
    reducers : {},
    extraReducers: builder => {
        builder.addCase(fetchSectors.pending, state => {
            state.status = 'pending';
        });
        builder.addCase(fetchSectors.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.sectors = action.payload;
        });
        builder.addCase(fetchSectors.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default sectorsSlice.reducer;