import { ToggleButton, ToggleButtonProps } from 'primereact/togglebutton';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

interface IToggleIconProps extends Omit<ToggleButtonProps, 'onChange'> {
	icon?: string;
	checked?: boolean;
	onChange?: (value: boolean) => void;
}

export const ToggleIcon: FC<IToggleIconProps> = ({
	icon = 'pi pi-check',
	checked,
	onChange = () => null,
	...props
}) => {
	return (
		<ToggleButton
			onIcon={icon}
			offIcon={icon}
			onLabel=''
			offLabel=''
			pt={{
				box: {
					className: 'p-0 w-min border-none outline-none bg-transparent hover:bg-transparent ',
				},
				icon: {
					className: classNames(
						{ 'text-color-secondary': !checked },
						{ 'opacity-50': !checked },
						{ 'text-primary': checked }
					),
				},
			}}
			onChange={(e) => onChange(!!e.value)}
			checked={checked}
			{...props}
		/>
	);
};
