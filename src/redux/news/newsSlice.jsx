import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './newsOperations';

const newsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchNews.pending](state) {
      state.isLoading = true;
    },
    [fetchNews.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchNews.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const newsReducer = newsSlice.reducer;
