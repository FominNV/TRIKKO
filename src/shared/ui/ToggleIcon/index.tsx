import { ToggleButton, ToggleButtonProps } from 'primereact/togglebutton';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

export interface IToggleIconProps extends Omit<ToggleButtonProps, 'onChange'> {
	label?: string;
	icon?: string;
	iconClassName?: string;
	checked?: boolean;
	onChange?: (value: boolean) => void;
}

export const ToggleIcon: FC<IToggleIconProps> = ({
	label = '',
	icon = 'pi pi-check',
	iconClassName,
	checked,
	onChange = () => null,
	...props
}) => {
	return (
		<ToggleButton
			onIcon={icon}
			offIcon={icon}
			onLabel={label}
			offLabel={label}
			iconPos='right'
			pt={{
				box: {
					className: 'p-0 w-min border-none outline-none bg-transparent hover:bg-transparent text-md',
				},
				icon: {
					className:
						iconClassName ||
						classNames({ 'text-color-secondary': !checked }, { 'opacity-50': !checked }, { 'text-primary': checked }),
				},
			}}
			onChange={(e) => onChange(!!e.value)}
			checked={checked}
			{...props}
		/>
	);
};
