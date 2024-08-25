import './styles.scss';
import { MenuButton, PriorityIcon, ToggleIcon, ToggleStar } from '@/shared/ui';
import { Button, ButtonProps } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { classNames } from 'primereact/utils';
import { CSSProperties, FC, ReactNode, useState } from 'react';

export type TableItemSize = 'sm' | 'md' | 'lg';

export interface ITaskField {
	id: string;
	title: string;
}

export interface ITaskTableItemProps {
	id: string;
	title: string;
	number: string;
	hasStar?: boolean;
	hasLike?: boolean;
	collapse?: boolean;
	size?: TableItemSize;
	date: string;
	description?: string;
	fields?: ITaskField[];
	content?: ReactNode;
	checked?: boolean;
	onClick?: (id: string) => void;
	onClickLink?: (id: string) => void;
}

const tableItemConfig: Record<TableItemSize, string> = {
	sm: 'py-1',
	md: 'py-2',
	lg: 'py-4',
};

const linkButtonProps: ButtonProps = {
	link: true,
	className: 'shadow-none text-md p-0',
};

const textButtonProps: ButtonProps = {
	icon: '',
	text: true,
	className: 'shadow-none active:bg-none hover:bg-0',
	severity: 'secondary',
};

export const addSectionConfig: { style: CSSProperties; class: string } = {
	style: {
		width: '40px',
		maxWidth: '40px',
	},
	class: 'p-2',
};

export const TaskTableItem: FC<ITaskTableItemProps> = ({
	hasStar,
	hasLike,
	size = 'md',
	fields = [],
	checked = false,
	collapse = true,
	onClickLink = () => null,
	...props
}) => {
	const [isCollapse, setIsCollapse] = useState<boolean>(collapse);

	const fieldItems = fields.map((elem) => (
		<div
			key={elem.id}
			className='col'>
			<MenuButton
				type='default'
				button={{
					label: elem.title,
					...textButtonProps,
				}}
			/>
		</div>
	));

	return (
		<div className={classNames('task-table-item flex', tableItemConfig[size])}>
			<div
				className={addSectionConfig.class}
				style={addSectionConfig.style}>
				<ToggleStar
					checked={hasStar}
					className={classNames({ 'task-table-item__toggle-hover': !hasStar })}
				/>
			</div>

			<div className='task-table-item__content w-full flex flex-column gap-2 py-2 px-1'>
				<div className='w-full flex align-items-center justify-content-between gap-2'>
					<div className='flex align-items-center gap-2'>
						<PriorityIcon
							title='Обычная'
							background='aquamarine'
							className='task-table-item__hover-hide'
						/>
						<Checkbox
							checked={checked}
							className='task-table-item__hover-show'
						/>
						<Button
							label={props.number}
							onClick={() => onClickLink(props.id)}
							{...linkButtonProps}
						/>
						<Button
							label={props.title}
							onClick={() => onClickLink(props.id)}
							{...linkButtonProps}
						/>
					</div>

					<div className='flex align-items-center gap-6'>
						<div className='flex align-items-center gap-3'>
							<ToggleIcon
								label='1'
								icon='pi pi-comment'
								iconClassName='text-primary'
							/>
							<ToggleIcon
								label='2'
								icon={`pi ${hasLike ? 'pi-thumbs-up-fill' : 'pi-thumbs-up'}`}
								iconClassName='text-primary'
							/>
						</div>
						{props.date}
					</div>
				</div>

				{size === 'lg' && <div className='text-md'>{props.description}</div>}

				{!isCollapse && props.content}

				{['md', 'lg'].includes(size) && <div className='grid'>{fieldItems}</div>}
			</div>

			<div className='p-2'>
				<i
					className={classNames(
						'task-table-item__collapse text-primary pi pi-angle-down',
						{
							'task-table-item__collapse--rotated': !isCollapse,
						},
						{
							'task-table-item__toggle-hover': isCollapse,
						}
					)}
					onClick={() => setIsCollapse((prev) => !prev)}
				/>
			</div>
		</div>
	);
};
