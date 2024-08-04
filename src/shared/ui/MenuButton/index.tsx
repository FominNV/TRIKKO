import { Button, ButtonProps } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Menu, MenuProps } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { SplitButton, SplitButtonProps } from 'primereact/splitbutton';
import { classNames } from 'primereact/utils';
import { FC, HTMLAttributes, LegacyRef, MouseEvent, useRef, useState } from 'react';

type MenuButtonType = 'default' | 'split';

interface IMenuButtonBaseProps {
	menu?: MenuProps;
	type?: MenuButtonType;
}

interface IButtonProps extends ButtonProps, HTMLAttributes<HTMLButtonElement> {}

interface IMenuButtonDefaultProps extends IMenuButtonBaseProps {
	type: Extract<MenuButtonType, 'default'>;
	button?: IButtonProps;
}

interface IMenuButtonSplitProps extends IMenuButtonBaseProps {
	type: Extract<MenuButtonType, 'split'>;
	button?: SplitButtonProps;
}

type MenuButtonPropsType = IMenuButtonDefaultProps | IMenuButtonSplitProps;

export const MenuButton: FC<MenuButtonPropsType> = ({
	type = 'default',
	button: { className: buttonClassName, ...buttonProps } = {},
	menu: { className: menuClassName, model, ...menuProps } = {},
}) => {
	const [filterKey, setFilterKey] = useState<string>('');
	const menuRef = useRef<Menu>();

	const filteredItems = filterKey
		? model?.filter((elem) => elem.label?.toLowerCase().includes(filterKey?.toLocaleLowerCase()))
		: model;

	const emptyList: MenuItem[] = [{ label: filterKey ? 'Ничего не найдено' : 'Элементы отсутствуют', disabled: true }];
	const menuItems = filteredItems?.length ? filteredItems : emptyList;

	const handleOnclick = (e: MouseEvent<HTMLButtonElement>) => {
		menuRef.current?.toggle(e);
	};

	const filter: MenuItem = {
		template: (
			<div className='relative flex align-items-center px-1 border-bottom-1'>
				<div
					className='pi pi-search p-1'
					style={{ fontSize: '0.75rem' }}
				/>
				<InputText
					className={classNames('w-full h1rem py-1 pl-1 text-sm bg-transparent border-noround border-none', {
						'pr-4': !!filterKey,
					})}
					variant='filled'
					placeholder='Фильтр'
					value={filterKey}
					onChange={(e) => setFilterKey(e.target.value)}
				/>
				<Button
					className={classNames('absolute top-0 right-0 border-noround p-1 h-full w-min', { hidden: !filterKey })}
					severity='info'
					size='small'
					icon='pi pi-times'
					onClick={() => {
						setFilterKey('');
					}}
					text
				/>
			</div>
		),
		className: 'p-0',
	};

	const itemsModel = [filter, ...menuItems];
	const ButtonClassName = `h-full ${buttonClassName}`;

	const renderButton = (componentType: MenuButtonType) => {
		switch (componentType) {
			case 'split': {
				return (
					<SplitButton
						size='small'
						text
						raised
						className={ButtonClassName}
						menuButtonProps={{
							onClick: handleOnclick,
						}}
						{...(buttonProps as SplitButtonProps)}
					/>
				);
			}

			default: {
				return (
					<Button
						icon='pi pi-angle-down'
						iconPos='right'
						size='small'
						onClick={handleOnclick}
						className={ButtonClassName}
						{...(buttonProps as IButtonProps)}
					/>
				);
			}
		}
	};

	return (
		<>
			{renderButton(type)}
			<Menu
				popup
				model={itemsModel}
				className={`w-20rem p-1 ${menuClassName}`}
				pt={{
					menuitem: {
						className: 'text-sm',
					},
				}}
				onHide={() => setTimeout(() => setFilterKey(''), 500)}
				ref={menuRef as LegacyRef<Menu>}
				{...menuProps}
			/>
		</>
	);
};
