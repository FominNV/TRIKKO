import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from 'primereact/button';
import { FC } from 'react';

export interface INavbarLink {
	title: string;
	route: string;
}

interface INavbarProps {
	links?: INavbarLink[];
}

export const Navbar: FC<INavbarProps> = ({ links = [] }) => {
	const pathname = usePathname();

	const linkItems = links.map((elem) => (
		<li key={elem.route}>
			<Link href={elem.route}>
				<Button
					label={elem.title}
					severity={elem.route === pathname ? undefined : 'secondary'}
					size='small'
					text
					raised
					outlined={false}
				/>
			</Link>
		</li>
	));

	return (
		<nav>
			<ul className='flex gap-4'>{linkItems}</ul>
		</nav>
	);
};
