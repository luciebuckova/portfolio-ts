import { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="container mx-auto max-w-7xl px-8">
      <Header />
      <main className="text-center">{children}</main>
      <Footer />
    </div>
  );
}
