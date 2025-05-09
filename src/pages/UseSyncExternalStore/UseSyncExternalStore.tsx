import { useLocalStorage } from '../../hooks/useLocalStorage';

export const UseSyncExternalStore = () => {
  const [theme, setTheme] = useLocalStorage('theme');

  return (
    <div>
      <h2>Текущая тема: {theme || 'не выбрана'}</h2>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('')}>Сбросить</button>
    </div>
  );
};
