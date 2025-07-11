import Education from '@/pages/Education';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Education - Abhishek Jamkar',
	description: 'Abhishek Jamkar\'s educational background including B.Tech in Computer Science and Engineering from Dharmsinh Desai University.',
};

export default function EducationPage() {
	return <Education />;
}