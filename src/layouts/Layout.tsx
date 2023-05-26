import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-fixed bg-center text-white flex flex-col">
      <Header />
      <div className="flex-auto mt-20">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
