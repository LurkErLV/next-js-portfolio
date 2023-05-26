import { FC } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import Title from '@/components/ui/Title';
import SkillCard from '@/components/SkillCard';
import SectionLayout from '@/layouts/SectionLayout';

type Skill = {
  icon: string;
  link: string;
};

type Data = {
  notification: string;
  fullName: string;
  status: string;
  about: string;
  skills: Skill[];
};

const Home: FC = () => {
  const data: Data = {
    notification: 'Make love, not war. 💙',
    fullName: 'Jegors Dorofejevs',
    status: 'FrontEnd Developer',
    about: `Hello! My name is Jegor and I am an experienced FrontEnd developer specializing in interface development using React and Vue frameworks, as well as the TypeScript programming language.`,
    skills: [
      { icon: 'JavaScript.svg', link: 'https://www.javascript.com/' },
      { icon: 'TypeScript.svg', link: 'https://www.typescriptlang.org/' },
      { icon: 'ReactJs.svg', link: 'https://react.dev/' },
      { icon: 'NextJs.png', link: 'https://nextjs.org/' },
      { icon: 'ReduxToolkit.svg', link: 'https://redux-toolkit.js.org/' },
      { icon: 'VueJs.svg', link: 'https://vuejs.org/' },
      { icon: 'SCSS.png', link: 'https://sass-lang.com/' },
    ],
  };

  return (
    <SectionLayout>
      <Card>
        <div className="w-full m-auto text-center">{data.notification}</div>
      </Card>

      <Card>
        <div className="w-full flex items-center justify-between">
          <div>
            <Title title={data.fullName} />
            <p className="mt-[0.5rem] text-[#ffffffcc]">{data.status}</p>
          </div>

          <Image
            className="hidden xsm:block"
            src="/images/avatar.svg"
            alt="Avatar"
            width={80}
            height={80}
            priority={true}
          />
        </div>
      </Card>

      <Card>
        <div className="w-full flex flex-col">
          <Title title="About Me" />
          <p className="mt-[0.5rem] text-[#ffffffcc]">{data.about}</p>
        </div>
      </Card>

      <Card>
        <div className="w-full flex flex-col">
          <Title title="My Skills" />
          <div className="mt-[1rem] grid grid-cols-2 xxsm:grid-cols-3 xsm:grid-cols-4 sm:grid-cols-5 gap-2">
            {data.skills.map((skill, index) => (
              <SkillCard icon={skill.icon} link={skill.link} key={index} />
            ))}
          </div>
        </div>
      </Card>
    </SectionLayout>
  );
};

export default Home;
