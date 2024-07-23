import 'i18next';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: 'Navigation';
		resources: IResourceI18n;
	}
}
