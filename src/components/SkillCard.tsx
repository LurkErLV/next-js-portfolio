import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  icon: string;
  link: string;
};

const SkillCard: FC<Props> = ({ icon, link }) => {
  return (
    <Link href={link} className="block mx-auto" target="_blank">
      <div className="w-[6.4rem] h-[6.4rem] bg-[#00000078] rounded-md flex justify-center items-center opacity-80 transition-all duration-200 hover:opacity-100">
        <Image src={`/icons/${icon}`} alt={icon} width={70} height={70} />
      </div>
    </Link>
  );
};

export default SkillCard;
