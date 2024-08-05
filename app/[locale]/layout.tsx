import { FC } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { DefaultLayout } from '@/widgets/layouts';
import dynamic from 'next/dynamic';
import { cookies } from 'next/headers';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './global.css';

interface IRootLayoutProps extends IWrapper, IPageProps {}

const AppThemeProvider = dynamic(() => import('./theme'), {
	ssr: false,
});

const RootLayout: FC<IRootLayoutProps> = async ({ children, params }) => {
	const theme = (cookies().get('__theme__')?.value || 'light') as MainThemeType;

	return (
		<html lang={params.locale}>
			<head>
				{/* eslint-disable-next-line @next/next/no-css-tags */}
				<link
					id='app-theme'
					rel='stylesheet'
					href={`./themes/viva-${theme}/theme.css`}
				/>
			</head>
			<body>
				<PrimeReactProvider>
					<AppThemeProvider
						defaultTheme={theme}
						enableSystem>
						<DefaultLayout locale={params.locale}>{children}</DefaultLayout>
					</AppThemeProvider>
				</PrimeReactProvider>
			</body>
		</html>
	);
};

export default RootLayout;
