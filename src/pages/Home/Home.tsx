import { useSelection } from '../../hooks/useSelection';

export const Home = () => {
  const selectedText = useSelection();
  return (
    <>
      <div>Home sdsdffdsfd asdfasdasdasdasdsadsasd</div>
      <p>Выделено: {selectedText}</p>
    </>
  );
};
