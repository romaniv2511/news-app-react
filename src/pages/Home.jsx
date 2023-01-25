import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from 'redux/news/newsOperations';
import { useNews } from 'hooks/useNews';
import { Filter } from 'components/Filter/Filter';
import { NewsList } from 'components/NewsList/NewsList';

import classes from './Home.module.scss';

const Home = () => {
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

export default Home;
