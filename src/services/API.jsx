import axios from 'axios';

export const fetchNewsById = async id => {
  const { data } = await axios.get(`/v3/articles/${id}`);
  return data;
};
