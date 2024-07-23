import { MenuItem } from 'primereact/menuitem';

interface INavigationMenuItem extends MenuItem {
	id: NavigationI18nKeys;
}

export const navLinks: INavigationMenuItem[] = [
	{
		id: 'monitoring',
	},
	{
		id: 'boards',
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
