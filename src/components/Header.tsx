import Link from 'next/link';
import { FC } from 'react';
import Logo from './icons/Logo';
import Github from './icons/Github';

type Navigation = {
  title: string;
  link: string;
};

const Header: FC = () => {
  const navigation: Navigation[] = [
    { title: 'Experience', link: '/experience' },
    { title: 'Links', link: '/links' },
    { title: 'Blog', link: 'https://blog.hold404.com' },
  ];

  return (
    <header className="bg-black w-full h-20 flex justify-center items-center z-50">
      <div className="w-[37.5rem] flex justify-between items-center mx-[1rem] box-border">
        <Link href="/">
          <Logo />
        </Link>

        <nav>
          <ul className="flex gap-4 text-xs items-center sm:text-sm">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="hover:text-gray-300 transition-all duration-300"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            <li>
              <Link href="https://github.com/Hold404" className="sm:hidden">
                <Github />
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="https://github.com/Hold404" className="hidden sm:block">
          <Github />
        </Link>
      </div>
    </header>
  );
};

export default Header;
