import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from 'redux/news/newsOperations';
import { useNews } from 'hooks/useNews';
import { Filter } from '../Filter/Filter';
import { NewsList } from '../NewsList/NewsList';

import classes from './App.module.scss';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useNews();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const isVisibleNews = !isLoading && !error;

  return (
    <div className={classes.container}>
      {isLoading && <p>Loading...</p>}
      {isVisibleNews && (
        <>
          <h1>News</h1>
          <Filter />
          <NewsList />
        </>
      )}
      {error && <p>Oops, something wrong!</p>}
    </div>
  );
};

// function Highlight(text, filter) {
//   if (!filter?.length) return text;
//   // @ts-ignore
//   const matches = [...text.matchAll(new RegExp(filter.join('|'), 'ig'))];
//   const startText = text.slice(0, matches[0]?.index);
//   return (
//     <span>
//       {startText}
//       {matches.map((match, i) => {
//         const startIndex = match.index;
//         const currentText = match[0];
//         const endIndex = startIndex + currentText.length;
//         const nextIndex = matches[i + 1]?.index;
//         const untilNextText = text.slice(endIndex, nextIndex);
//         return (
//           <span key={i}>
//             <mark>{currentText}</mark>
//             {untilNextText}
//           </span>
//         );
//       })}
//     </span>
//   );
// }
