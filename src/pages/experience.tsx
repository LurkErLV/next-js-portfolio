import { NextPage } from 'next';
import Head from 'next/head';
import Experience from '@/screens/Experience';

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience - LurkEr</title>
      </Head>
      <Experience />
    </>
  );
};

export default ExperiencePage;
