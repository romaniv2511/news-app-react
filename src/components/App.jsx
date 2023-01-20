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
    setFilter(value);
  };

  const filteredNews = () => {
    return allNews.filter(currentNews => {
      const { title, summary } = currentNews;

      if (filter.length === 0) {
        return currentNews;
      }

      const splitedFilter = filter.toLowerCase().split(' ');

      const filteredCurrentNews = splitedFilter.reduce((acc, filter) => {
        if (
          title.toLowerCase().includes(filter) ||
          summary.toLowerCase().includes(filter)
        ) {
          acc = currentNews;
        }
        return acc;
      }, '');

      return filteredCurrentNews;
    });
  };
  // console.log(filteredNews());
  return (
    <div>
      <h1>News</h1>
      <Filter onChange={onChangeFilter} />
      <NewsList news={filteredNews()} />
    </div>
  );
};

// const hightlight = (filter, str) => {
//   // const { filter, str } = props;
//   if (!filter) return str;

//   const regexp = new RegExp(filter, 'ig');
//   const matchValue = str.match(regexp);
//   // console.log('regexp', regexp);
//   if (matchValue) {
//     return str.split(regexp).map((s, idx, arr) => {
//       if (idx < arr.length - 1) {
//         const c = matchValue.shift();
//         console.log('c', c);
//         console.log('s', s);
//         return `
//             ${s}
//             <span style={{ backgroundColor: 'yellow' }}>${c}</span>${s}`;
//       }
//     });
//   }
//   return str;
// };
