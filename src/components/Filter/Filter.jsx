export const Filter = ({ onChange }) => {
  return (
    <>
      <p>Filter by keywords</p>
      <input type="text" onChange={e => onChange(e.target.value)} />
    </>
  );
};
