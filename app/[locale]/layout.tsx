import { FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { DefaultLayout } from '@/widgets/layouts';

import 'primereact/resources/themes/viva-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './global.css';

interface IRootLayoutProps extends IWrapper, IPageProps {}

const RootLayout: FC<IRootLayoutProps> = async ({ children, params }) => {
	return (
		<html lang={params.locale}>
			<body>
				<PrimeReactProvider>
					<DefaultLayout locale={params.locale}>{children}</DefaultLayout>
				</PrimeReactProvider>
			</body>
		</html>
	);
};

export default RootLayout;
