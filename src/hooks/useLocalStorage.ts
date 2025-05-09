import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getSnapshot(key: string) {
  return localStorage.getItem(key);
}

export const useLocalStorage = (key: string) => {
  const value = useSyncExternalStore(
    subscribe,
    () => getSnapshot(key),
    () => null
  );

  const setValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    window.dispatchEvent(new Event('storage'));
  };

  return [value, setValue] as const;
};
