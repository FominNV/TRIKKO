import './styles.scss';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

interface IPriorityIconProps {
	title: string;
	background?: string;
	color?: string;
	size?: 'sm' | 'md';
	className?: string;
}

export const PriorityIcon: FC<IPriorityIconProps> = ({ size = 'sm', title, color, background, className }) => {
	return (
		<div
			className={classNames('priority-icon', `priority-icon--${size}`, className)}
			style={{ color, background }}>
			{title[0]}
		</div>
	);
};
