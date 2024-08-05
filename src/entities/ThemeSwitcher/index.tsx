'use client';
import { FC, useContext } from 'react';
import { useTheme } from 'next-themes';
import { Button } from 'primereact/button';
import { PrimeReactContext } from 'primereact/api';

export const ThemeSwitcher: FC = () => {
	const { changeTheme = () => null } = useContext(PrimeReactContext);
	const { setTheme, theme } = useTheme();

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		changeTheme(`viva-${theme}`, `viva-${newTheme}`, 'app-theme', () => setTheme(newTheme));
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
