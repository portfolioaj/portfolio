import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Background3D from '@/components/Background3D';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	preload: true,
});

// ✅ Export metadata (excluding viewport + themeColor)
export const metadata: Metadata = {
	title: 'Abhishek Jamkar - Software Developer',
	description: 'Abhishek Jamkar - Full Stack Developer specializing in MERN stack, React.js, Node.js, and modern web technologies. Expert in database development and web applications.',
	keywords: 'Abhishek Jamkar, Abhi, AJ, Software Developer, Full Stack Developer, MERN Stack, Web Developer, React Developer,NodeJs Expert, Database Developer, Frontend Specialist, Backend Developer, JavaScript Expert, TypeScript Developer, MongoDB Expert, SQL Developer',
	authors: [{ name: 'Abhishek Jamkar' }],
	creator: 'Abhishek Jamkar',
	manifest: '/manifest.json',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://niladri1.vercel.app/',
		title: 'Abhishek Jamkar - Full Stack Developer',
		description: 'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
		siteName: 'Abhishek Jamkar Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Abhishek Jamkar - Full Stack Developer',
		description: 'Full-stack developer specializing in MERN stack, React.js, Node.js, and modern web technologies.',
		creator: '@jamkarabhi',
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
		},
	},
	metadataBase: new URL('https://niladri1.vercel.app'),
	alternates: {
		canonical: '/',
	},
	verification: {
		google: '/googlea4a36904e14398c1.html',
	},
};

// ✅ Export viewport separately (fixes warning)
export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
};

// ✅ Export themeColor separately (fixes warning)
export const themeColor = '#000000';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={inter.className}>
			<head>
				<link rel="shortcut icon" href="/nextjs.png" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/nextjs.png" />
				<meta name="theme-color" content="#000000" />
				<link rel="manifest" href="/manifest.json" />
				<meta httpEquiv="Content-Security-Policy" content="default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: data: https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https: http:; font-src 'self' data: https:; connect-src 'self' data: blob: https:; worker-src 'self' blob: data:;" />
			</head>
			<body>
				<div className="min-h-screen flex flex-col">
					<Background3D />
					<Navbar />
					<main className="flex-grow">{children}</main>
					<SpeedInsights />
					<Footer />
				</div>
				<Analytics />
			</body>
		</html>
	);
}
