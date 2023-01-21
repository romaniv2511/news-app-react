import { useCallback } from 'react';

const Hightlight = props => {
  const { filter, str } = props;
  if (!filter) return str;

  const splitedFilter = filter.split(' ');

  const filtredStr = splitedFilter.reduce((acc, f) => {
    if (!f) return acc;

    if (!acc) acc = str;

    const regexp = new RegExp(f, 'ig');
    const matchValue = str.match(regexp);

    if (matchValue) {
      return acc
        .split(regexp)
        .map((s, index, array) => {
          if (index < array.length - 1) {
            const filteredValue = matchValue.shift();
            return `${s}*|${filteredValue}*`;
          }
          return s;
        })
        .join('');
    }
    return acc;
  }, '');

  return filtredStr.split('*').reduce((acc, text) => {
    if (text.includes('|')) {
      const currentText = text.slice(1, text.length);
      return (
        <>
          {acc}
          <mark>{currentText}</mark>
        </>
      );
    }
    return (
      <>
        {acc}
        {text}
      </>
    );
  });
};

export const NewsList = ({ news, filter }) => {
  const light = useCallback(
    str => {
      return <Hightlight filter={filter} str={str} />;
    },
    [filter]
  );

  if (!news) return;

  return (
    <ul>
      {news.map(({ id, imageUrl, title, summary }) => {
        return (
          <li key={id}>
            <article>
              <img src={imageUrl} alt={title} width="300" />
              <h2>{light(title)}</h2>
              <p>{light(summary)}</p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
