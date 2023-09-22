import Home from '@/screens/Home';
import { NextPage } from 'next';
import Head from 'next/head';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>LurkEr</title>
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
