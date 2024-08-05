import { Config } from 'next-i18n-router/dist/types';

interface IConfigI18n extends Config {
	locales: LocaleType[];
}

const i18nConfig: IConfigI18n = {
	locales: ['en', 'ru'],
	defaultLocale: 'en',
	noPrefix: true,
};

export default i18nConfig;
