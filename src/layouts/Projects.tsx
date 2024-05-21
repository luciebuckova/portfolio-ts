import { Element } from 'react-scroll';
import Card from '@/components/Card';

export default function Projects() {
  return (
    <Element name="projects" className="py-16 md:py-32">
      <h3>Projekty</h3>
      <p>
        Tady je pár projektů, na kterých jsem pracovala, a také technologie,
        které jsem používala. Více malých i vetších projektů najdete na mém{' '}
        <a
          href="https://github.com/luciebuckova/"
          className="text-teal-400 duration-300 hover:text-purple-600"
          aria-label="Github">
          GitHubu
        </a>
        .
      </p>
      <ul className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li>
          <Card
            title="Tento web"
            description="Můj osobní web vytvořený pomocí Reactu a Next.js"
            linkWeb="https://portfolio-ts-theta-hazel.vercel.app/"
            linkRepo="https://github.com/luciebuckova/portfolio-ts"
            stack={['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'MUI']}
          />
        </li>
        <li>
          <Card
            title="Zdravotnické potřeby"
            description="Webové stránky pro prodejnu zdravotnických potřeb"
            linkWeb="https://zp-lbc.vercel.app"
            linkRepo="https://github.com/luciebuckova/zp-lbc"
            stack={['React', 'TypeScript', 'Tailwind CSS']}
          />
        </li>
        <li>
          <Card
            title="Star Wars character app"
            description="Seznam všech postav Star Wars s možností vyhledávání."
            linkWeb="https://star-wars-character-seven.vercel.app/"
            linkRepo="https://github.com/luciebuckova/star-wars-character"
            stack={['React', 'TypeScript', 'Tailwind CSS', 'Next.js']}
          />
        </li>
      </ul>
    </Element>
  );
}
