import { FC } from 'react';

export const containerPadding = 'px-2 md:px-3 lg:px-4';

export const Container: FC<IWrapper> = ({ children }) => {
	return <div className={containerPadding}>{children}</div>;
};
