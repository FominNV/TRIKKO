import { Header } from '@/widgets/Header';
import { FC } from 'react';

export const DefaultLayout: FC<IWrapper> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
export default DefaultLayout;
