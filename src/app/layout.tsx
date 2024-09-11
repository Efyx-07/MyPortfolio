import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BurgerMenu from '@/components/BurgerMenu';
import '../assets/sass/global.scss';

export const metadata: Metadata = {
  title: 'François-Xavier Savary | Développeur frontend',
  description:
    'Hello, je suis François-Xavier, développeur frontend basé à Lille en France. Passionné par l’UI et l’expérience utilisateur, je développe des applications, SaaS et sites web réactifs au design soigné. Ma stack principale: TypeScript, React, NextJs, VueJs, Sass, NodeJs',
  alternates: {
    canonical: 'https://www.fxsavary.com/',
  },
  openGraph: {
    title: 'François-Xavier Savary | Développeur frontend',
    description:
      'Hello, je suis François-Xavier, développeur frontend basé à Lille en France. Passionné par l’UI et l’expérience utilisateur, je développe des applications et sites web réactifs au design soigné. Ma stack principale: TypeScript, React, NextJs, VueJs, Sass, NodeJs',
    url: 'https://www.fxsavary.com/',
    type: 'website',
    images: [
      {
        url: 'https://www.fxsavary.com/images/decoration/fxsavary_portfolio_thumbnail.png',
        width: 800,
        height: 600,
        alt: 'François-Xavier Savary | Développeur frontend',
      },
    ],
  },
};

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={poppins.className}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <BurgerMenu />
        </Providers>
      </body>
    </html>
  );
}
