'use client';
import { ISearchLineProps, SearchLine, OptionFilter } from '@/entities';
import { Container } from '@/shared/ui';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

interface IPageContentLayoutProps extends IWrapper {
	search?: boolean;
	searchProps?: ISearchLineProps;
	filter?: boolean;
}

export const PageContentLayout: FC<IPageContentLayoutProps> = ({ search = true, searchProps, filter, children }) => {
	return (
		<Container>
			<div className={classNames('flex flex-column gap-3 pb-4', { 'pt-2': !search })}>
				{(search || filter) && (
					<div className='flex flex-column gap-1'>
						{search && <SearchLine {...searchProps} />}
						{filter && <OptionFilter />}
					</div>
				)}
				{children}
			</div>
		</Container>
	);
};
