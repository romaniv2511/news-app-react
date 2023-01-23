import moment from 'moment';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Hightlight } from 'services/Highlight';

import { Link } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

import classes from './NewsArticle.module.scss';

export const NewsArticle = ({ news }) => {
  const { title, summary, imageUrl, publishedAt, url } = news;
  const filter = useSelector(selectFilter);
  // const slicedSummary =
  //   summary?.length < 160 ? summary : `${summary.slice(0, 160)}...`;
  const light = text => {
    return Hightlight(filter, text);
  };

  const date = Date.parse(publishedAt);
  const convertedDate = moment(date).format('MMMM Do, YYYY');

  return (
    <article className={classes.card}>
      <div className={classes.image}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={classes.textBox}>
        <p className={classes.date}>
          <CalendarToday fontSize="small" /> {convertedDate}
        </p>
        <h2>{light(title)}</h2>
        <p>{light(summary)}</p>
        <Link
          href={url}
          target="_blank"
          rel="noopener, noreferrer"
          className={classes.link}
        >
          Rear more &#10132;
        </Link>
      </div>
    </article>
  );
};
