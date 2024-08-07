'use client';
import { FC } from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'primereact/button';
import { getThemePath } from '@/shared/lib';

export const ThemeSwitcher: FC = () => {
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		const themeLink = document.querySelector('#app-theme') as HTMLLinkElement | null;
		if (themeLink) {
			const newTheme = theme === 'light' ? 'dark' : 'light';
			setTheme(newTheme);
			themeLink.setAttribute('href', getThemePath(newTheme));
		}
	};

	return (
		<Button
			icon='pi pi-sun'
			className='p-0 shadow-none'
			size='large'
			text
			onClick={toggleTheme}
		/>
	);
};
