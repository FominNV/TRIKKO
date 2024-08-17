'use client';
import { PageContentLayout } from '@/widgets/layouts';
import { NextPage } from 'next';
import { MenuItem } from 'primereact/menuitem';
import { useTranslation } from 'react-i18next';

const TasksView: NextPage<IPageProps> = () => {
	const { t } = useTranslation<'Navigation'>();

	const filterItems: MenuItem[] = [
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
	return (
		<PageContentLayout
			searchProps={{ menuItems: filterItems }}
			filter>
			<h1>{t('tasks')}</h1>
		</PageContentLayout>
	);
};

export default TasksView;
