'use client';

import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { initTranslations } from '@root/app/i18n';
// eslint-disable-next-line import/named
import { createInstance, Resource } from 'i18next';

interface ITranslationsProviderProps extends IWrapper {
	locale: LocaleType;
	namespaces: NamespaceI18n[];
	resources?: Resource;
}

export const TranslationsProvider: FC<ITranslationsProviderProps> = ({ children, locale, namespaces, resources }) => {
	const i18n = createInstance();
	initTranslations(locale, namespaces, i18n, resources);
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
