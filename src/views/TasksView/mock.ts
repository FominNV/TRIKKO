import { ITaskField, ITaskTableItemProps } from '@/entities/Tasks';
import { MenuItem } from 'primereact/menuitem';

const fields: ITaskField[] = [
	{
		id: 'status',
		title: 'status',
	},
	{
		id: 'position',
		title: 'position',
	},
	{
		id: 'priority',
		title: 'priority',
	},
	{
		id: 'author',
		title: 'author',
	},
	{
		id: 'executor',
		title: 'executor',
	},
];

export const createTaskTableItems = (count: number = 5): ITaskTableItemProps[] => {
	return Array.from({ length: count }).map((_, i) => ({
		id: `${i}${i}`,
		title: 'Тестовое задание',
		number: 'number-123',
		date: '18 июля',
		fields,
		content: '123123123',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus ipsam sapiente ex, et excepturi aperiam laudantium dignissimos modi voluptate a, enim iure quibusdam nisi veniam ratione debitis culpa? Non?			Tenetur, voluptates ipsam optio rem id amet iure totam odio enim quaerat necessitatibus placeat, dolorum velit ex, animi cumque voluptas aliquid! Placeat eius perspiciatis accusantium nisi at neque earum nesciunt.',
	}));
};

export const filterItems: MenuItem[] = [
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
