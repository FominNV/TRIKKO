type LocaleType = 'en' | 'ru';
type NamespaceI18n = 'Navigation';
type NavigationI18nKeys = 'boards' | 'tasks' | 'monitoring';
type TestI18nKeys = 'b' | 't' | 'm';

interface IResourceI18n {
	Navigation: Record<NavigationI18nKeys, string>;
	Test: Record<TestI18nKeys, string>;
}
