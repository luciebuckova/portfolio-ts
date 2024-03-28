import { Element, Link as ScrollLink } from 'react-scroll';
import { IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <Element name="hero" className="pb-16 pt-20 md:py-32">
      <section>
        <h1>Lucie Bučková</h1>
        <h2>junior frontend kodérka</h2>
        <Image
          priority={true}
          src="/me.webp"
          width={350}
          height={350}
          alt="Obrázek zastupující foto autorky"
          className="mx-auto rounded-full my-8 md:my-16 w-1/2 md:w-max"
        />
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
