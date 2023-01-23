import { NewsArticle } from 'components/NewsArticle/NewsArtirle';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';

import { useNews } from 'hooks/useNews';

import { Grid } from '@mui/material';
import classes from './NewsList.module.scss';

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
    });
  };

  const filteredNews = onFilterNews();

  return (
    <>
      <p className={classes.counter}>Results: {filteredNews.length}</p>

      <Grid container className={classes.list}>
        {filteredNews.map(item => {
          return (
            <Grid key={item.id} item className={classes.item}>
              <NewsArticle news={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
