'use client';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const TasksView: NextPage<IPageProps> = () => {
	const { t } = useTranslation<'Navigation'>();
	return (
		<>
			<h1>{t('tasks')}</h1>
		</>
	);
};

export default TasksView;
