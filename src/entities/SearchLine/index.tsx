import { MenuButton, ToggleIcon } from '@/shared/ui';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { classNames } from 'primereact/utils';
import { FC, useState } from 'react';

interface ICheckboxState {
	filtered?: boolean;
	finished?: boolean;
}

export interface ISearchLineProps {
	menuItems?: MenuItem[];
	onSearch?: () => void;
}

export const SearchLine: FC<ISearchLineProps> = ({ menuItems = [], onSearch = () => null }) => {
	const [searchKey, setSearchKey] = useState<string>('');
	const [checkboxState, setCheckboxState] = useState<ICheckboxState>({});

	const handleCheckbox = (key: keyof ICheckboxState, value: boolean) => {
		setCheckboxState((prev) => ({ ...prev, [key]: value }));
	};

	return (
		<div className='h-2rem flex border-1 border-round border-primary'>
			<MenuButton
				type='default'
				button={{ label: 'Фильтр', className: 'border-noround-right' }}
				menu={{ model: menuItems }}
			/>
			<InputText
				className='h-full w-full border-none text-sm'
				value={searchKey}
				placeholder='Введите текст'
				onChange={(e) => setSearchKey(e.target.value)}
			/>

			<div className='h-full flex align-items-center gap-2 px-2'>
				<ToggleIcon
					icon='pi pi-check-circle'
					onChange={(value) => handleCheckbox('finished', value)}
					checked={!!checkboxState.finished}
				/>
				<ToggleIcon
					icon='pi pi-sliders-h'
					onChange={(value) => handleCheckbox('filtered', value)}
					checked={!!checkboxState.filtered}
				/>
				<Button
					className={classNames('border-none shadow-none p-0 w-min', {
						hidden: !searchKey,
					})}
					severity='help'
					size='small'
					icon='pi pi-times'
					onClick={() => setSearchKey('')}
					text
				/>
			</div>
			<Button
				className='h-full border-noround-left border-none border-left-1 shadow-none'
				icon='pi pi-search'
				outlined
				onClick={onSearch}
			/>
		</div>
	);
};
