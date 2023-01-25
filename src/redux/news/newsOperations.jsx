import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://api.spaceflightnewsapi.net';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/v3/articles?_limit=20');
      const news = data.map(
        ({ id, imageUrl, title, summary, url, publishedAt }) => ({
          id,
          imageUrl,
          title,
          summary,
          url,
          publishedAt,
        })
      );
      return news;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
