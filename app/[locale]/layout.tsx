import { FC } from 'react';
import '@nextcss/reset';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@public/themes/viva-light/theme.css';
import { PrimeReactProvider } from 'primereact/api';
import { DefaultLayout } from '@/widgets/layouts';

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
