'use client';
import { ISearchLineProps, SearchLine } from '@/entities';
import { Container } from '@/shared/ui';
import { classNames } from 'primereact/utils';
import { FC } from 'react';

interface IPageContentLayoutProps extends IWrapper {
	search?: boolean;
	searchProps?: ISearchLineProps;
}

export const PageContentLayout: FC<IPageContentLayoutProps> = ({ search = true, searchProps, children }) => {
	return (
		<Container>
			<div className={classNames('flex flex-column gap-3 pb-4', { 'pt-2': !search })}>
				{search && <SearchLine {...searchProps} />}

				{children}
			</div>
		</Container>
	);
};
