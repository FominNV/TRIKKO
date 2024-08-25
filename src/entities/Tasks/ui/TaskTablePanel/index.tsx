import { IPanelGroupItem, PanelGroup, StepSlider } from '@/shared/ui';
import { Checkbox } from 'primereact/checkbox';
import { FC } from 'react';
import { addSectionConfig, TableItemSize } from '../TaskTableItem';

interface ITaskTablePanelProps {
	isAllChecked?: boolean;
	onAllCheck?: (value: boolean) => void;
	onSizeChange?: (value: TableItemSize) => void;
}

const itemSizes: TableItemSize[] = ['sm', 'md', 'lg'];

const panelGroupItems: IPanelGroupItem[] = [
	{
		icon: 'pi pi-credit-card',
	},
	{
		icon: 'pi pi-filter',
	},
	{
		icon: 'pi pi-tag',
	},
	{
		icon: 'pi pi-user',
	},
];

export const TaskTablePanel: FC<ITaskTablePanelProps> = ({
	isAllChecked = false,
	onAllCheck = () => null,
	onSizeChange,
}) => {
	return (
		<div className='flex align-items-center gap-0 w-full'>
			<div
				style={addSectionConfig.style}
				className={addSectionConfig.class}
			/>

			<div className='flex w-full align-items-center justify-content-between px-1'>
				<div className='flex w-full align-items-center gap-2'>
					<Checkbox
						checked={isAllChecked}
						onChange={(e) => onAllCheck(!!e.checked)}
					/>

					<PanelGroup items={panelGroupItems} />
				</div>
				<div className='flex align-items-center'>
					<div style={{ width: '180px' }}>
						<StepSlider
							steps={itemSizes}
							onChange={onSizeChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
