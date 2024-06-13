import { Element } from 'react-scroll';
import AnimatedText from '@/components/AnimatedText';

export default function Hero() {
  return (
    <Element
      name="hero"
      className="grid place-content-center pb-16 pt-20 md:py-32 h-screen">
      <section>
        <AnimatedText />
      </section>
    </Element>
  );
}
