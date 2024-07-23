'use client';
import { RouterPaths } from '@/shared/enums';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

const HomeView: NextPage = () => {
	const router = useRouter();
	router.push(RouterPaths.Monitoring);
	return null;
};

export default HomeView;
