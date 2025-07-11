'use client';

import Link from 'next/link';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const pageLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Education', path: '/education' },
		{ name: 'Experience', path: '/experience' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Certificates', path: '/certificates' },
		{ name: 'Contact', path: '/contact' },
	];

	const column1 = pageLinks.slice(0, 3);
	const column2 = pageLinks.slice(3, 6);
	const column3 = pageLinks.slice(6, 9); // May contain fewer than 3

	return (
		<footer className="relative mt-24">
			<div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
					{/* Branding */}
					<div className="space-y-4">
						<Link href="/" className="flex items-center space-x-3">
							<Code2 className="w-8 h-8 text-white" />
							<span className="text-xl font-bold text-white">Abhishek Jamkar</span>
						</Link>
						<p className="text-sm text-gray-400">
							Software Developer based in Navsari, Gujarat, India.
						</p>
					</div>

					{/* Contact */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Contact</h3>
						<ul className="space-y-3">
							<li>
								<a
									href="mailto:jamkarabhishek@gmail.com"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Mail className="w-4 h-4" />
									jamkarabhishek@gmail.com
								</a>
							</li>
							<li>
								<a
									href="tel:+918238596742"
									className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
								>
									<Phone className="w-4 h-4" />
									+918238596742
								</a>
							</li>
						</ul>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Quick Links</h3>
						<div className="grid grid-cols-3 gap-x-6 gap-y-3">
							{/* Column 1 */}
							<div>
								{column1.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>

							{/* Column 2 */}
							<div>
								{column2.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
							</div>

							{/* Column 3 (safe for hydration) */}
							<div>
								{column3.map(link => (
									<Link
										key={link.path}
										href={link.path}
										className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
									>
										{link.name}
									</Link>
								))}
								{column3.length < 3 &&
									Array.from({ length: 3 - column3.length }).map((_, i) => (
										<div
											key={`placeholder-${i}`}
											className="block text-sm invisible mb-2"
											aria-hidden="true"
										>
											Placeholder
										</div>
									))}
							</div>
						</div>
					</div>

					{/* Social Links */}
					<div className="space-y-4">
						<h3 className="text-sm font-semibold text-white">Social</h3>
						<div className="flex space-x-4">
							<a
								href="https://github.com/AbhishekJamkar"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/abhishekjamkar/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							<a
								href="mailto:jamkarabhishek@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								<Mail className="w-5 h-5" />
							</a>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-white/10 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm text-gray-400">
							© {currentYear} Abhishek Jamkar. All rights reserved.
						</p>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<a
								href="#"
								rel="noopener noreferrer"
								className="text-sm text-gray-400 hover:text-white transition-colors"
							>
								Abhishek's Portfolio
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
