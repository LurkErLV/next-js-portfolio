import { NextPage } from 'next';
import Head from 'next/head';
import Experience from '@/screens/Experience';

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Experience - Hold404</title>
      </Head>
      <Experience />
    </>
  );
};

export default ExperiencePage;
