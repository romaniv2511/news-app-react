import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectNews,
} from 'redux/news/newsSelectors';

export const useNews = () => {
  const isLoggedIn = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const news = useSelector(selectNews);

  return { isLoggedIn, error, news };
};
