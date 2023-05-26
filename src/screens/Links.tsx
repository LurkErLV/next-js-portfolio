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
    { title: 'GitHub', link: 'https://github.com/Hold404' },
    { title: 'Telegram', link: 'https://t.me/hold404w' },
    { title: 'Instagram', link: 'https://instagram.com/hold.404/' },
    { title: 'Blog', link: 'https://blog.hold404.com' },
    { title: 'Email', link: 'mailto:hold404.dev@gmail.com' },
    { title: 'CV', link: 'https://hold404.com/cdn/CV.pdf' },
    { title: 'LinkedIn', link: 'https://linkedin.com/in/hold404/' },
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
