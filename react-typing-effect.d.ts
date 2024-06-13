declare module 'react-typing-effect' {
  import * as React from 'react';

  interface TypingEffectProps {
    text: string | string[];
    speed?: number;
    eraseSpeed?: number;
    typingDelay?: number;
    eraseDelay?: number;
    className?: string;
    cursorClassName?: string;
    displayTextRenderer?: (text: string, i: number) => React.ReactNode;
    cursorRenderer?: (cursor: string) => React.ReactNode;
  }

  const TypingEffect: React.FC<TypingEffectProps>;

  export default TypingEffect;
}
