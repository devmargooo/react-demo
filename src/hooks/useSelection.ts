import { useState, useEffect } from 'react';

export const useSelection = (): string => {
  const [selection, setSelection] = useState<string>('');

  useEffect(() => {
    const handleSelectionChange = () => {
      const sel = window.getSelection();
      if (!sel || sel.rangeCount === 0) {
        setSelection('');
        return;
      }

      setSelection(sel.toString());
    };

    document.addEventListener('selectionchange', handleSelectionChange);
    return () => {
      document.removeEventListener('selectionchange', handleSelectionChange);
    };
  }, []);

  return selection;
};
