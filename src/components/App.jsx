import { useState, useEffect } from 'react';
import { fetchNews } from 'services/api';
import { Filter } from './Filter/Filter';
import { NewsList } from './NewsList/NewsList';

export const App = () => {
  const [allNews, setAllNews] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchNews().then(data => setAllNews(data));
  }, []);

  const onChangeFilter = value => {
    setFilter(value.toLowerCase());
  };

  const filteredNews = () => {
    return allNews.filter(currentNews => {
      const { title, summary } = currentNews;

      if (filter.length === 0) {
        return currentNews;
      }

      const splitedFilter = filter.split(' ');

      const filteredCurrentNews = splitedFilter.reduce((acc, filter) => {
        const isFiltered =
          title.toLowerCase().includes(filter) ||
          summary.toLowerCase().includes(filter);
        if (isFiltered) {
          acc = currentNews;
        }
        return acc;
      }, '');

      return filteredCurrentNews;
    });
  };

  return (
    <div>
      <h1>News</h1>
      <Filter onChange={onChangeFilter} />
      <NewsList news={filteredNews()} filter={filter} />
    </div>
  );
};
