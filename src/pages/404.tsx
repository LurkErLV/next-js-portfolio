import { NextPage } from 'next';
import Head from 'next/head';
import SectionLayout from '@/layouts/SectionLayout';
import Card from '@/components/Card';
import Title from '@/components/ui/Title';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not Found - Hold404</title>
      </Head>
      <SectionLayout>
        <Card>
          <Title title="Page was not found" />
        </Card>
      </SectionLayout>
    </>
  );
};

export default NotFoundPage;
