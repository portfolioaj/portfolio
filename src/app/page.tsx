'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

// ✅ FIXED: Use relative path instead of alias
const Home = dynamic(() => import('./Home'), {
	loading: () => <Loading />,
	ssr: false, // disables server-side rendering
});

export default function HomePage() {
	return (
		<Suspense fallback={<Loading />}>
			<Home />
		</Suspense>
	);
}
