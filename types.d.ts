interface IWrapper {
	children?: React.ReactNode;
}

interface IPageParams {
	locale: LocaleType;
}

interface IPageProps {
	params: IPageParams;
}

interface ILableDto<ID = string, Label = string> {
	id: ID;
	label: Label;
}

type MainThemeType = 'light' | 'dark';
