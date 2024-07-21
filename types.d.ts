interface IWrapper {
	children?: React.ReactNode;
}

type PageType<P = object> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode;
	layout?: ComponentType;
};
