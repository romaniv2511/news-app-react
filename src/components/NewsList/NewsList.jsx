import { NewsArticle } from 'components/NewsArticle/NewsArtirle';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';

import { useNews } from 'hooks/useNews';

import { Grid } from '@mui/material';
import styles from './NewsList.module.scss';

export const NewsList = () => {
  const { news } = useNews();
  const filter = useSelector(selectFilter);

  const onFilterNews = () => {
    const splitedFilter = filter.split(' ');
    const regexp = new RegExp(splitedFilter.join('|'), 'ig');

    return news.filter(currentNews => {
      const { title, summary } = currentNews;

      const matchesTitle = [...title.matchAll(regexp)];
      const matchesSummary = [
        ...summary.matchAll(new RegExp(splitedFilter.join('|'), 'ig')),
      ];
      const isFiltered = matchesTitle.length > 0 || matchesSummary.length > 0;

      if (isFiltered) return currentNews;
      return null;
    });
  };

  const filteredNews = onFilterNews();

  return (
    <>
      <p className={styles.counter}>Results: {filteredNews.length}</p>

      <Grid container className={styles.list}>
        {filteredNews.map(item => {
          return (
            <Grid key={item.id} item className={styles.item}>
              <NewsArticle news={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
