'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  return (
    <div className="min-h-screen w-full bg-[url('/images/bg.png')] bg-cover bg-no-repeat bg-fixed bg-center text-white flex flex-col">
      <Header />{' '}
      <AnimatePresence initial={true} mode="popLayout">
        <motion.div
          className="flex-auto"
          key={pathname}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        >
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Layout;
