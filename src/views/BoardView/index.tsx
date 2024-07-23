'use client';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const BoardView: NextPage<IPageProps> = () => {
	const { t } = useTranslation<'Navigation'>();
	return (
		<>
			<h1>{t('boards')}</h1>
		</>
	);
};

export default BoardView;
