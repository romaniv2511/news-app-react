export const Hightlight = (filter, str) => {
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
