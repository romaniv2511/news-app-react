export const NewsList = ({ news }) => {
  if (!news.length) return;
  return (
    <ul>
      {news.map(({ id, imageUrl, title, summary }) => {
        return (
          <li key={id}>
            <article>
              <img src={imageUrl} alt={title} width="300" />
              <h2>{title}</h2>
              <p>{summary}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
