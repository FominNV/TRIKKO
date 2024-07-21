import { RouterPaths } from '@/shared/enums';
import { MenuItem } from 'primereact/menuitem';

export const navLinks: MenuItem[] = [
	{
		label: 'Мониторинг',
		id: RouterPaths.Monitoring,
	},
	{
		label: 'Доски',
		id: RouterPaths.Boards,
	},
];

export const taskLinks: MenuItem[] = [
	{
		label: 'Назначенные на меня',
	},
	{
		label: 'Созданные мной',
	},
];

export const userLinks: MenuItem[] = [
	{
		label: 'Профиль',
	},
	{
		separator: true,
	},
	{
		label: 'Вид',
	},
	{
		label: 'Сменить пользователя',
	},
	{
		label: 'Выйти',
	},
];
