import './styles.scss';
import { FC } from 'react';
import { IToggleIconProps, ToggleIcon } from '../ToggleIcon';
import { classNames } from 'primereact/utils';

interface IToggleStarProps extends IToggleIconProps {}

export const ToggleStar: FC<IToggleStarProps> = ({ checked, className }) => {
	return (
		<ToggleIcon
			icon={`pi ${checked ? 'pi-star-fill' : 'pi-star'}`}
			className={classNames('toggle-star', { 'toggle-star--checked': checked }, className)}
			iconClassName='text-orange-500'
		/>
	);
};
