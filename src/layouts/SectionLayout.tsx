import { FC, PropsWithChildren } from 'react';

const SectionLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="mx-auto w-full max-w-[39.5rem] px-[1rem]">
      {children}
    </section>
  );
};

export default SectionLayout;
