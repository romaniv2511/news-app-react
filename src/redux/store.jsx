import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './news/newsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    filter: filterReducer,
  },
});
