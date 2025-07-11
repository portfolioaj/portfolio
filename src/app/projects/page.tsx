import Projects from '@/pages/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Projects - Abhishek Jamkar',
	description: 'View Abhishek Jamkar\'s portfolio of projects including Live Docs, Figma Clone, Video Conferencing App, and more.',
};

export default function ProjectsPage() {
	return <Projects />;
}