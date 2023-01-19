import { useState, useEffect } from 'react';
import { fetchNews } from 'services/api';

export const App = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetchNews().then(data => setAllNews(data));
  }, []);

  // const {id,imageUrl, title, summary}
  return (
    <div>
      <h1>News</h1>

      <p>Filter by keywords</p>
      <input type="text" />

      <ul>
        {allNews.map(({ id, imageUrl, title, summary }) => {
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
    </div>
  );
};
