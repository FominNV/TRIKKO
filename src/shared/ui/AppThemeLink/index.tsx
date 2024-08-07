'use client';
import { getThemePath } from '@/shared/lib';
import { FC } from 'react';

interface IHeadProps {
	theme?: MainThemeType;
}

export const AppThemeLink: FC<IHeadProps> = ({ theme = 'light' }) => {
	return (
		<>
			<link
				id='app-theme'
				rel='stylesheet'
				href={getThemePath(theme)}
			/>
		</>
	);
};
