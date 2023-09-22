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
    notification: 'Don\'t worry if something doesn\'t work. If everything was working, you\'d be fired.',
    fullName: 'Albert Matrozis',
    status: 'FrontEnd Developer',
    about: `Hi! My name is Albert and I am an enthusiast in Frontend development. I specialize in website development using React.js, Vue.js, Nuxt.js and Next.js frameworks, I also have some experience with TypeScript.`,
    skills: [
      { icon: 'JavaScript.svg', link: 'https://www.javascript.com/' },
      { icon: 'TypeScript.svg', link: 'https://www.typescriptlang.org/' },
      { icon: 'ReactJs.svg', link: 'https://react.dev/' },
      { icon: 'NextJs.png', link: 'https://nextjs.org/' },
      { icon: 'VueJs.svg', link: 'https://vuejs.org/' },
      { icon: 'NuxtJs.png', link: 'https://nuxt.com/' },
      { icon: 'ReduxToolkit.svg', link: 'https://redux-toolkit.js.org/' },
      { icon: 'Pinia.png', link: 'https://pinia.vuejs.org/' },
      { icon: 'SCSS.png', link: 'https://sass-lang.com/' },
      { icon: 'TailwindCSS.svg', link: 'https://tailwindcss.com/' },
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
            className="hidden xsm:block rounded-xl"
            src="/images/avatar.jpg"
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
