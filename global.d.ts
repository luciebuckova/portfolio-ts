declare module 'react-typing-effect' {
  import { FC } from 'react';

  interface TypingEffectProps {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    className?: string;
    cursorClassName?: string;
    displayTextRenderer?: (text: string, i: number) => JSX.Element;
    cursorRenderer?: (cursor: string) => JSX.Element;
  }

  const TypingEffect: FC<TypingEffectProps>;

  export default TypingEffect;
}
