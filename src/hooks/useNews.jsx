import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectError,
  selectNews,
} from 'redux/news/newsSelectors';

export const useNews = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const news = useSelector(selectNews);

  return { isLoading, error, news };
};
