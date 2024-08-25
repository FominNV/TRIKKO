'use client';
import { TaskTable } from '@/entities/Tasks';
import { PageContentLayout } from '@/widgets/layouts';
import { NextPage } from 'next';
import { createTaskTableItems, filterItems } from './mock';

const TasksView: NextPage<IPageProps> = () => {
	return (
		<PageContentLayout
			searchProps={{ menuItems: filterItems }}
			filter>
			<div className='flex justify-content-center'>
				<TaskTable items={createTaskTableItems()} />
			</div>
		</PageContentLayout>
	);
};

export default TasksView;
