import { FC } from 'react';
import Card from '@/components/Card';
import Title from '@/components/ui/Title';
import SectionLayout from '@/layouts/SectionLayout';

const Experience: FC = () => {
  const experience = [
    {
      title: 'FrontEnd Developer at Network RP',
      details:
        'Developed responsive game interfaces using Vue.js and Tailwind CSS.',
      time: 'Sep 2023 – Present',
    },
    {
      title: 'FrontEnd Developer as a Freelancer',
      details:
        'Developed websites and web applications. Used a different stack. Core technologies: React.js, Vue.js, TypeScript.',
      time: 'Feb 2021 – Present',
    },
  ];

  return (
    <SectionLayout>
      <Card>
        <Title title="Experience" />
      </Card>

      <div>
        {experience.map((job, index) => (
          <Card key={index}>
            <h1 className="font-bold text-2xl">{job.title}</h1>
            <p className="mt-[0.5rem] text-[#fff]">{job.time}</p>
            <p className="mt-[0.5rem] text-[#ffffffcc]">{job.details}</p>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Experience;
