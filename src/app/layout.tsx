import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import Home from './page';

interface Metadata {
  title: string;
  description: string;
  openGraph?: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: { url: string; width: number; height: number; alt?: string }[];
    locale: string;
    type: string;
  };
}

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--main-font',
});

export const metadata: Metadata = {
  title: 'Lucie Bučková · frontend kodérka',
  description:
    'Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů kombinací React a Tailwind CSS. Neustále na sobě pracuji a snažím se nejen v tomto směru posouvat vpřed.',
  /* openGraph: {
    title: "Lucie Bučková · frontend kodérka",
    description:
      "Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů kombinací React a Tailwind CSS. Neustále na sobě pracuji a snažím se nejen v tomto směru posouvat vpřed.",
    url: "",
    siteName: "Lucie Bučková · frontend kodérka",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  }, */
};

export default function RootLayout() {
  return <Home font={spaceGrotesk.className} />;
}
