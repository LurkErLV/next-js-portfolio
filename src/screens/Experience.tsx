import { FC } from 'react';
import Card from '@/components/Card';
import Title from '@/components/ui/Title';
import SectionLayout from '@/layouts/SectionLayout';

const Experience: FC = () => {
  const experience = [
    {
      title: 'FrontEnd Developer at Radmir Games',
      details:
        'Successfully developed game web interfaces based on CEF. Worked with Vue.js, pug and stylus.',
      time: 'Oct 2022 – Jan 2023',
    },
    {
      title: 'FrontEnd Developer as a Freelancer',
      details:
        'Worked as a freelancer. Developed websites and web applications. Used a different stack. Core technologies: React.js, Vue.js, TypeScript.',
      time: 'Aug 2021 – Now',
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
