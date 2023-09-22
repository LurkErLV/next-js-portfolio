import { NextPage } from 'next';
import Head from 'next/head';
import Links from '@/screens/Links';

const LinksPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - LurkEr</title>
      </Head>
      <Links />
    </>
  );
};

export default LinksPage;
