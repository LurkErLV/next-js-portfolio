import { FC, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-[1rem] w-full bg-[#00000080] p-[1.25rem] rounded-xl hover:scale-[97%] transition-all duration-500">
      <div>{children}</div>
    </div>
  );
};

export default Card;
