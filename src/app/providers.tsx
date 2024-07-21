import { FC } from 'react';
import '@nextcss/reset';
import '../../public/themes/viva-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';

export const Providers: FC<IWrapper> = ({ children }) => {
	return <PrimeReactProvider>{children}</PrimeReactProvider>;
};
