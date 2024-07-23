'use client';
import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const MonitoringView: NextPage<IPageProps> = () => {
	const { t } = useTranslation<'Navigation'>();
	return (
		<>
			<h1>{t('monitoring')}</h1>
		</>
	);
};

export default MonitoringView;
