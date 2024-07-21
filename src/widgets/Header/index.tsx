'use client';
import { FC, useRef } from 'react';
import { navLinks, taskLinks, userLinks } from './data';
import Image from 'next/image';
import logo from '@assets/logo.png';
import { Menubar } from 'primereact/menubar';
import { useRouter } from 'next/navigation';
import { SplitButton } from 'primereact/splitbutton';
import { RouterPaths } from '@/shared/enums';
import { containerPadding } from '@/shared/ui';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { TieredMenu } from 'primereact/tieredmenu';

export const Header: FC = () => {
	const router = useRouter();
	const menuItems = navLinks.map((elem) => ({ ...elem, command: () => router.push(elem.id as string) }));
	const menu = useRef<TieredMenu>(null);

	const startMenu = (
		<div className='flex align-items-center gap-2 md:gap-3 lg:gap-4'>
			<Image
				src={logo}
				alt='logo'
				width={100}
				height={40}
			/>
			<SplitButton
				label='Задачи'
				onClick={() => router.push(RouterPaths.Tasks)}
				model={taskLinks}
				size='small'
				text
				raised
			/>
		</div>
	);

	const endMenu = (
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
			/>
		</Avatar>
	);

	return (
		<header>
			<Menubar
				start={startMenu}
				model={menuItems}
				end={endMenu}
				className={containerPadding}
			/>
		</header>
	);
};
