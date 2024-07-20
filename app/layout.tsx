import { FC, ReactNode } from 'react';
import { App } from '@/app';
import { RootLayout } from '@/widgets/layouts/RootLayout';
import { DefaultLayout } from '@/widgets/layouts';

const Layout: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <RootLayout>
      <App>

        <DefaultLayout>
          {children}
        </DefaultLayout>
      </App>
    </RootLayout>
  );
};

export default Layout;
