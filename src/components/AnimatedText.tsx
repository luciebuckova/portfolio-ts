import React from 'react';
import TypingEffect from 'react-typing-effect';

const AnimatedText: React.FC = () => {
  return (
    <TypingEffect
      text={['Ahoj, já jsem Lucka!']}
      speed={100}
      eraseSpeed={50}
      typingDelay={500}
      className="animated-text"
    />
  );
};

export default AnimatedText;
