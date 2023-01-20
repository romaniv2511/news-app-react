export const fetchNews = () => {
  return fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=10')
    .then(r => r.json())
    .then(data => {
      return data.map(({ id, imageUrl, title, summary, url }) => ({
        id,
        imageUrl,
        title,
        summary,
        url,
      }));
    });
};
