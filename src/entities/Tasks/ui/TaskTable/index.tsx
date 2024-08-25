'use client';
import { FC, useState } from 'react';
import { ITaskTableItemProps, TableItemSize, TaskTableItem } from '../TaskTableItem';
import { TaskTablePanel } from '../TaskTablePanel';

interface ITaskTableProps {
	items?: ITaskTableItemProps[];
}

export const TaskTable: FC<ITaskTableProps> = ({ items = [] }) => {
	const [itemSize, setItemSize] = useState<TableItemSize>('sm');

	const itemsContent = items.map((elem) => (
		<TaskTableItem
			key={elem.id}
			{...elem}
			size={itemSize}
		/>
	));

	return (
		<div
			className='flex flex-column gap-0 w-full'
			style={{ maxWidth: '1200px' }}>
			<TaskTablePanel onSizeChange={setItemSize} />
			<div className='flex flex-column gap-0 w-full'>{itemsContent}</div>
		</div>
	);
};
