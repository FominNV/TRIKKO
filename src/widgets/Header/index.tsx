'use client';
import { FC, useRef } from 'react';
import { navLinks, taskLinks, userLinks } from './data';
import Image from 'next/image';
import logo from '@assets/logo.png';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/navigation';
import { containerPadding, MenuButton } from '@/shared/ui';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';
import { LocaleSwitcher, ThemeSwitcher } from '@/entities';
import { useTranslation } from 'react-i18next';
import { RouterPaths } from '@/shared/enums';

export const Header: FC = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const menu = useRef<TieredMenu>(null);

	const menuItems = navLinks.map((elem) => ({ ...elem, label: t(elem.id), command: () => router.push(`/${elem.id}`) }));

	const startMenu = (
		<div className='flex align-items-center gap-2 md:gap-3 lg:gap-4'>
			<Image
				src={logo}
				alt='logo'
				width={100}
				height={40}
				priority
			/>
			<MenuButton
				type='split'
				button={{ label: t('tasks'), onClick: () => router.push(RouterPaths.Tasks) }}
				menu={{ model: taskLinks }}
			/>
		</div>
	);

	const endMenu = (
		<div className='flex align-items-center gap-2'>
			<LocaleSwitcher />
			<ThemeSwitcher />
			<Avatar
				size='large'
				icon='pi pi-user'
				className='p-overlay-badge'
				onClick={(e) => menu.current?.toggle(e)}>
				<Badge value='4' />
				<TieredMenu
					model={userLinks}
					popup
					ref={menu}
					breakpoint='767px'
					className='text-sm'
				/>
			</Avatar>
		</div>
	);

	return (
		<header>
			<Menubar
				start={startMenu}
				model={menuItems}
				end={endMenu}
				className={`${containerPadding} gap-2 md:gap-3 lg:gap-4`}
			/>
		</header>
	);
};
