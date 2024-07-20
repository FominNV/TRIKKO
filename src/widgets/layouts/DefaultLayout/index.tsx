import { FC, ReactNode } from 'react';

export const DefaultLayout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <main>
      DefaultLayout
      {children}
    </main>
  );
};

export default DefaultLayout;
