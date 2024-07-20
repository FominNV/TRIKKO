import { FC, ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';

export const App: FC<{children: ReactNode}> = ({ children }) => {
  return (
    <PrimeReactProvider>
      {children}
    </PrimeReactProvider>
  );
};
