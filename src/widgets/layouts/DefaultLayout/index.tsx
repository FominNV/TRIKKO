import { TranslationsProvider } from '@/shared/i18n';
import { Header } from '@/widgets/Header';
import initTranslations from '@root/app/i18n';
import { FC } from 'react';

interface IDefaultLayoutProps extends IWrapper {
	locale: LocaleType;
}

const namespaces: NamespaceI18n[] = ['Navigation'];

export const DefaultLayout: FC<IDefaultLayoutProps> = async ({ children, locale }) => {
	const { resources } = await initTranslations(locale, namespaces);
	return (
		<TranslationsProvider
			locale={locale}
			namespaces={namespaces}
			resources={resources}>
			<main>
				<Header />
				{children}
			</main>
		</TranslationsProvider>
	);
};
export default DefaultLayout;
