import { FC, HTMLAttributes } from 'react';

export const containerPadding = 'px-2 md:px-3 lg:px-4';

export const Container: FC<HTMLAttributes<HTMLDivElement>> = ({ children, className }) => {
	return <div className={`${containerPadding} ${className}`}>{children}</div>;
};
