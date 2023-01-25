import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNews } from 'redux/news/newsOperations';
import { useNews } from 'hooks/useNews';
import { Filter } from 'components/Filter/Filter';
import { NewsList } from 'components/NewsList/NewsList';
import { Container } from '@mui/material';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useNews();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const isVisibleNews = !isLoading && !error;

  return (
    <Container
      sx={{ ml: 'auto', mr: 'auto', p: '50px 75px', maxWidth: '1440px' }}
    >
      {isLoading && <p>Loading...</p>}
      {isVisibleNews && (
        <>
          <h1>News</h1>
          <Filter />
          <NewsList />
        </>
      )}
      {error && <p>Oops, something wrong!</p>}
    </Container>
  );
};

export default Home;
