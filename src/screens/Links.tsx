import Card from '@/components/Card';
import Title from '@/components/ui/Title';
import SectionLayout from '@/layouts/SectionLayout';
import Link from 'next/link';
import { FC } from 'react';

type Link = {
  title: string;
  link: string;
};

const Links: FC = () => {
  const links: Link[] = [
    { title: 'GitHub', link: 'https://github.com/LurkErLV/' },
    { title: 'Telegram', link: 'https://t.me/LurkErLV/' },
    { title: 'Email', link: 'mailto:alberts@matrozis.dev/' },
    { title: 'CV', link: 'https://matrozis.dev/CV.pdf/' },
    { title: 'LinkedIn', link: 'https://linkedin.com/in/albertsmatrozis/' },
  ];

  return (
    <SectionLayout>
      <Card>
        <Title title="Links" />
        <div className="mt-[1rem] flex flex-col gap-1">
          <ul className="list-disc pl-10">
            {links.map((link: Link, index) => (
              <li key={index}>
                {link.title + ' - '}
                <Link
                  href={link.link}
                  className="underline truncate"
                  target="_blank"
                >
                  {link.link.replace('mailto:', '')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </SectionLayout>
  );
};

export default Links;
