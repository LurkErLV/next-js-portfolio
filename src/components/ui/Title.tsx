import { FC } from 'react';

type Props = {
  title: string;
};

const Title: FC<Props> = ({ title }) => {
  return (
    <h1 className="font-bold text-2xl xxsm:text-3xl sm:text-4xl">{title}</h1>
  );
};

export default Title;
