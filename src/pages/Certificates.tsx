'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { ScrollAnimation } from '@/components/ScrollAnimation';

const certificates = [
	{
		title: "CCC Certificare",
		issuer: "ICS",
		date: "11th May 2019",
		link: "./files/certificates_pdf/Ccc.pdf",
		description: "Provides foundational knowledge of computers, including operating systems, file management, word processing, spreadsheets, internet usage, and digital services. Equips learners with essential IT literacy to operate efficiently in a digital environment.",
		skills: ["Basic Computer Operation", "MS Office (Word, Excel, PowerPoint)", "Internet Browsing", "Email Communication", "Digital Payments", "Operating Systems", "File Management", "Cyber Security Awareness", "Government Digital Services"]
	},
	{
		title: "Microsoft Digital Office",
		issuer: "My City Computer Education",
		date: "25th May 2019",
		link: "./files/certificates_pdf/Digital_Office.pdf",
		description: "Covers the use of Microsoft 365 tools like Word, Excel, PowerPoint, Outlook, Teams, and SharePoint to support digital collaboration, document management, communication, and productivity in a modern office environment. Emphasizes integration and cloud-based workflows.",
		skills: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Outlook", "Microsoft Teams", "SharePoint", "OneDrive", "Office 365", "Cloud Collaboration", "Productivity Tools"]
	},
	{
		title: "Karate Certificare",
		issuer: "K.K.D.F",
		date: "20th Feb 2017",
		link: "./files/certificates_pdf/Karate.pdf",
		description: "Certified training in Karate under the KKDF, focusing on physical fitness, self-discipline, self-defense techniques, and martial arts ethics. Includes practice in katas, sparring, and tournament participation.",
		skills: ["Karate", "Self-Defense", "Discipline", "Physical Fitness", "Kata", "Sparring", "Martial Arts", "Focus & Concentration", "Coordination", "Confidence Building"]
	},
		{
		title: "Running Certificare",
		issuer: "S.D.P.V",
		date: "15 Jan 2017",
		link: "./files/certificates_pdf/Running.pdf",
		description: "Awarded for securing first place in the 100-meter sprint at the school level. Demonstrates athleticism, speed, determination, and consistent physical training.",
		skills: ["Sprint Running", "Athletic Performance", "Speed & Agility", "Stamina", "Discipline", "Focus", "Time Management", "Goal Setting"]
	}
];

const Certificates = () => {
	return (
		<div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
			<ScrollAnimation>
				<motion.div
					className="flex items-center gap-3 mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
				>
					<Award className="w-8 h-8" />
					<h2 className="text-4xl font-bold gradient-text">Certificates</h2>
				</motion.div>
			</ScrollAnimation>

			<div className="grid md:grid-cols-2 gap-6">
				{certificates.map((cert, index) => (
					<ScrollAnimation key={cert.title}>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
						>
							<h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
							<div className="text-gray-400 space-y-2">
								<div className="flex items-center justify-between">
									<span className="text-lg">{cert.issuer}</span>
									<div className="flex items-center gap-2">
										<Calendar className="w-4 h-4" />
										<span>{cert.date}</span>
									</div>
								</div>
								<p className="text-gray-300 line-clamp-2">{cert.description}</p>
								<div className="flex flex-wrap gap-2 mt-4">
									{cert.skills.map((skill) => (
										<span
											key={skill}
											className="px-2 py-1 text-sm bg-white/10 rounded-full"
										>
											{skill}
										</span>
									))}
								</div>
								<motion.a
									href={cert.link}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 group-hover:translate-x-2 transition-transform"
									whileHover={{ scale: 1.05 }}
								>
									View Certificate
									<ExternalLink className="w-4 h-4" />
								</motion.a>
							</div>
						</motion.div>
					</ScrollAnimation>
				))}
			</div>
		</div>
	);
};

export default Certificates;