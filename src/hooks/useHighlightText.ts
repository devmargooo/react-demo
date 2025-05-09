import { useEffect } from 'react';

export const useHighlightText = (
  elementRef: React.RefObject<HTMLElement | null>,
  searchText: string
) => {
  useEffect(() => {
    if (!elementRef.current || !searchText.trim()) {
      return;
    }

    const element = elementRef.current;
    const textContent = element.textContent || '';
    const index = textContent.indexOf(searchText);

    if (index === -1) {
      return;
    }

    const range = document.createRange();
    const selection = window.getSelection();

    const textNode = findTextNode(element, index);
    const endNode = findTextNode(element, index + searchText.length);

    if (textNode.node && endNode.node) {
      range.setStart(textNode.node, textNode.offset);
      range.setEnd(endNode.node, endNode.offset);

      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [elementRef, searchText]);
};

const findTextNode = (element: HTMLElement, position: number) => {
  const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);

  let currentPos = 0;
  let node: Text | null = null;

  while (treeWalker.nextNode()) {
    node = treeWalker.currentNode as Text;
    const nodeLength = node.textContent?.length || 0;

    if (position <= currentPos + nodeLength) {
      return {
        node,
        offset: position - currentPos,
      };
    }

    currentPos += nodeLength;
  }

  return { node: null, offset: 0 };
};
