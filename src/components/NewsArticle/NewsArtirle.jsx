import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelectors';
import { Hightlight } from 'services/Highlight';

export const NewsArticle = ({ news }) => {
  const { title, summary, imageUrl } = news;
  const filter = useSelector(selectFilter);
  const light = text => {
    return Hightlight(filter, text);
  };
  return (
    <article>
      <img src={imageUrl} alt={title} width="300" />
      <h2>{light(title)}</h2>
      <p>{light(summary)}</p>
    </article>
  );
};
