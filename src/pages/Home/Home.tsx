import { useRef } from 'react';
import { useHighlightText } from '../../hooks/useHighlightText';

export const Home = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useHighlightText(textRef, 'voluptatum');
  return (
    <div>
      <div ref={textRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, voluptatum!
      </div>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing</div>
    </div>
  );
};
