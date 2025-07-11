import Experience from '@/pages/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Experience -Abhishek Jamkar',
	description: 'Abhishek Jamkar\'s professional experience as a Software Developer, including internships and projects at various companies.',
};

export default function ExperiencePage() {
	return <Experience />;
}