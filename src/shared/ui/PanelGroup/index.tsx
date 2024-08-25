import './styles.scss';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

export interface IPanelGroupItem {
	icon: string;
	onClick?: () => void;
}

interface IPanelGroupProps {
	items?: IPanelGroupItem[];
}

export const PanelGroup: FC<IPanelGroupProps> = ({ items = [] }) => {
	const itemsContent = items.map((elem, i) => (
		<Button
			key={i}
			onClick={elem.onClick}
			icon={elem.icon}
			className={classNames('panel-group__item border-noround shadow-none border-300 hover:border-primary', {
				'border-round-left': i === 0,
				'border-round-right': i === items.length - 1,
			})}
			severity='secondary'
			outlined
		/>
	));

	return <div className='panel-group flex'>{itemsContent}</div>;
};
