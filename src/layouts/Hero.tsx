import { Element, Link as ScrollLink } from 'react-scroll';
import { IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';
import UseWindowSize from '@/components/UseWindowSize';

export default function Hero() {
  const { width } = UseWindowSize();
  const isSmallScreen = width <= 768;

  return (
    <Element name="hero" className="pb-16 pt-20 md:py-32">
      <section>
        <h1>Lucie Bučková</h1>
        <h2 className="mt-2">Junior Frontend Developer</h2>
        {isSmallScreen ? (
          <Image
            priority={true}
            src="/me-400px.webp"
            width={200}
            height={200}
            alt="Foto autorky"
            className="mx-auto rounded-full my-8 md:my-16"
          />
        ) : (
          <Image
            priority={true}
            src="/me-700px.webp"
            width={350}
            height={350}
            alt="Foto autorky"
            className="mx-auto rounded-full my-8 md:my-16"
          />
        )}
        <p className="text-xl md:text-2xl">
          Jsem bývalá zubní lékařka na cestě stát se frontend vývojářkou.
          Neustále pracuji na svém profesním růstu, věnuji se novým výzvám a
          snažím se posouvat své dovednosti na vyšší úroveň. Hledám příležitost
          v oblasti frontend vývoje, kde bych mohla využít své nadšení a dále se
          zlepšovat v tom, co mě baví.
        </p>
        <div className="mx-auto flex max-w-sm flex-col justify-center gap-8 sm:flex-row">
          <ScrollLink
            to="contact"
            smooth={true}
            duration={1000}
            className="btn-primary sm:w-1/2"
            href="#contact"
            aria-label="Napište mi">
            Napište mi
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={1000}
            className="btn-secondary sm:w-1/2"
            href="#about"
            aria-label="Více o mně">
            Více o mně
          </ScrollLink>
        </div>
      </section>
    </Element>
  );
}
