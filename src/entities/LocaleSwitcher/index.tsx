'use client';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'primereact/dropdown';
import i18nConfig from '@root/i18nConfig';

export const LocaleSwitcher = () => {
	const { i18n } = useTranslation();
	const currentLocale = i18n.language;
	const router = useRouter();
	const currentPathname = usePathname();

	const handleChange = (newLocale: LocaleType) => {
		const days = 30;
		const date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		const expires = date.toUTCString();
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

		if (currentLocale === i18nConfig.defaultLocale) {
			router.push('/' + newLocale + currentPathname);
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
		}

		router.refresh();
	};

	const options: ILableDto<LocaleType>[] = i18nConfig.locales.map((elem) => ({
		id: elem,
		label: elem,
	}));

	return (
		<Dropdown
			value={{ id: currentLocale, label: currentLocale }}
			onChange={(e) => handleChange(e.target.value.id as LocaleType)}
			optionLabel='label'
			options={options}
		/>
	);
};
