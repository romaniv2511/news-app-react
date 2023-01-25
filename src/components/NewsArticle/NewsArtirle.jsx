import moment from 'moment';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Hightlight } from 'services/Highlight';
import { Card, Typography, Box } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';

import classes from './NewsArticle.module.scss';

export const NewsArticle = ({ news }) => {
  const { id, title, summary, imageUrl, publishedAt } = news;
  const filter = useSelector(selectFilter);

  const light = text => {
    return Hightlight(filter, text);
  };

  const date = Date.parse(publishedAt);
  const convertedDate = moment(date).format('MMMM Do, YYYY');

  const location = useLocation();

  return (
    <Card sx={{ height: '100%' }}>
      <Box className={classes.image}>
        <img src={imageUrl} alt={title} />
      </Box>
      <div className={classes.textBox}>
        <Typography sx={{ mb: '24px' }} className={classes.date}>
          <CalendarToday fontSize="small" /> {convertedDate}
        </Typography>
        <Typography
          variant="h2"
          sx={{ mb: '20px', fontSize: '24px', lineHeight: '1.2' }}
        >
          {light(title)}
        </Typography>
        <Typography>{light(summary)}</Typography>
        <Link
          to={`/articles/${id}`}
          state={{ from: location }}
          className={classes.link}
        >
          Rear more &#10132;
        </Link>
      </div>
    </Card>
  );
};
