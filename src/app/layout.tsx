import { DefaultLayout } from '@/widgets/layouts';
import { FC } from 'react';
import { Providers } from './providers';

const RootLayout: FC<IWrapper> = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<Providers>
					<DefaultLayout>{children}</DefaultLayout>
				</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
