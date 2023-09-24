import { NextPage } from 'next';
import Head from 'next/head';

const CVPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>CV - LurkEr</title>
      </Head>
      <object className="w-full h-[100vh]" data="/assets/CV.pdf" type="application/pdf">
        <p>Unable to display PDF file. <a href="/assets/CV.pdf">Download</a> instead.</p>
      </object>
    </>
  );
};

export default CVPage;
