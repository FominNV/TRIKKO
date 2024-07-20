import { FC, HTMLAttributes } from 'react';

interface RootLayoutProps extends HTMLAttributes<HTMLDivElement> {}
export const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (

    <html lang='en'>

      <body>
        RootLayout
        {children}
      </body>
    </html>
  );
};

