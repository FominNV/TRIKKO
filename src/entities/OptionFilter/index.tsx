import { MenuButton } from '@/shared/ui';
import { MenuItem } from 'primereact/menuitem';
import { FC, useMemo } from 'react';
import { defaultOptionFilterItems } from './config';

export interface IOptionFilterItem {
	label?: string;
	menu?: MenuItem[];
}

interface IOptionFilterProps {
	items?: IOptionFilterItem[];
}

export const OptionFilter: FC<IOptionFilterProps> = ({ items = defaultOptionFilterItems }) => {
	const itemsContent = useMemo(
		() =>
			items.map((elem, i) => (
				<MenuButton
					key={i}
					button={{
						className: 'shadow-none',
						label: elem.label,
						severity: 'secondary',
						text: true,
					}}
					menu={{
						model: elem.menu,
					}}
				/>
			)),
		[items]
	);

	return (
		<div className='flex justify-content-center align-items-center gap-2 '>
			{itemsContent}
			<MenuButton
				button={{
					className: 'shadow-none',
					label: 'Другие фильтры',
					severity: 'secondary',
					text: true,
					icon: 'pi pi-plus',
					iconPos: 'left',
				}}
				menu={{
					model: [],
				}}
			/>
		</div>
	);
};
