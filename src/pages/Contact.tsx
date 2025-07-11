'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
	Mail, Phone, MapPin, Github, Linkedin,
	MessageCircle, Clock, Send, MessageSquare
} from 'lucide-react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
	const [captchaToken, setCaptchaToken] = useState('');

	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://www.google.com/recaptcha/api.js';
		script.async = true;
		script.defer = true;
		document.body.appendChild(script);

		(window as any).onCaptchaVerified = (token: string) => {
			setCaptchaToken(token);
		};
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!captchaToken) {
			alert('Please verify that you are not a robot.');
			setIsSubmitting(false);
			return;
		}

		const formBody = new URLSearchParams();
		formBody.append('name', formData.name);
		formBody.append('email', formData.email);
		formBody.append('subject', formData.subject);
		formBody.append('message', formData.message);
		formBody.append('_captcha', 'false');
		formBody.append('_template', 'table');
		formBody.append('_autoresponse', 'Thanks for contacting me! I’ll reply soon.');
		formBody.append('_subject', `New Portfolio Message from ${formData.name}`);

		try {
			const response = await fetch('https://formsubmit.co/contact.ajportfolio@gmail.com', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formBody.toString()
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({ name: '', email: '', subject: '', message: '' });
				setCaptchaToken('');
				(window as any).grecaptcha?.reset();
			} else {
				setSubmitStatus('error');
			}
		} catch (err) {
			setSubmitStatus('error');
		}

		setIsSubmitting(false);
	};

	const contactInfo = [
		{
			icon: <Mail className="w-5 h-5" />,
			label: 'Email',
			value: 'contact.ajportfolio@gmail.com',
			link: 'mailto:contact.ajportfolio@gmail.com'
		},
		{
			icon: <Phone className="w-5 h-5" />,
			label: 'Phone',
			value: '+91 8238596742',
			link: 'tel:+918238596742'
		},
		{
			icon: <MapPin className="w-5 h-5" />,
			label: 'Location',
			value: 'Navsari, Gujarat, India'
		},
		{
			icon: <Clock className="w-5 h-5" />,
			label: 'Time Zone',
			value: 'IST (UTC+5:30)'
		}
	];

	const socialLinks = [
		{
			icon: <Github className="w-5 h-5" />,
			label: 'GitHub',
			link: 'https://github.com/AbhishekJamkar'
		},
		{
			icon: <Linkedin className="w-5 h-5" />,
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/abhishekjamkar'
		},
		{
			icon: <MessageCircle className="w-5 h-5" />,
			label: 'WhatsApp',
			link: 'https://wa.me/918238596742'
		}
	];

	return (
		<div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-6xl mx-auto pb-16 sm:pb-20">
			<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
				<motion.div className="flex items-center gap-3 mb-8 sm:mb-12"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}>
					<MessageSquare className="w-7 h-7 sm:w-8 sm:h-8" />
					<h2 className="text-3xl sm:text-4xl font-bold gradient-text">Get in Touch</h2>
				</motion.div>

				<div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 sm:gap-12">
					{/* Left Column */}
					<div className="space-y-6 sm:space-y-8">
						{/* Contact Info */}
						<motion.div className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}>
							<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Information</h3>
							<div className="space-y-3 sm:space-y-4">
								{contactInfo.map((info, index) => (
									<motion.div key={info.label}
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
										className="group">
										{info.link ? (
											<a href={info.link} className="flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors">
												<div className="text-gray-400 group-hover:text-white">{info.icon}</div>
												<div>
													<p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
													<p className="text-sm sm:text-base text-white">{info.value}</p>
												</div>
											</a>
										) : (
											<div className="flex items-center space-x-3 p-2 sm:p-3">
												<div className="text-gray-400">{info.icon}</div>
												<div>
													<p className="text-xs sm:text-sm text-gray-400">{info.label}</p>
													<p className="text-sm sm:text-base text-white">{info.value}</p>
												</div>
											</div>
										)}
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div className="bg-gray-800/50 p-5 sm:p-6 rounded-xl backdrop-blur-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}>
							<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Connect with Me</h3>
							<div className="flex flex-wrap gap-3 sm:gap-4">
								{socialLinks.map((social, index) => (
									<motion.a key={social.label} href={social.link} target="_blank" rel="noopener noreferrer"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
										className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group flex-1 justify-center sm:justify-start">
										<span className="text-gray-400 group-hover:text-white">{social.icon}</span>
										<span className="text-gray-400 group-hover:text-white text-sm">{social.label}</span>
									</motion.a>
								))}
							</div>
						</motion.div>
					</div>

					{/* Contact Form */}
					<motion.div className="bg-gray-800/50 p-6 sm:p-8 rounded-xl backdrop-blur-sm"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h3 className="text-lg sm:text-xl font-semibold mb-6">Send a Message</h3>
						<form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
							<input type="text" name="name" placeholder="Name" required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm sm:text-base" />
							<input type="email" name="email" placeholder="Email" required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm sm:text-base" />
							<input type="text" name="subject" placeholder="Subject" required
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm sm:text-base" />
							<textarea name="message" placeholder="Message" required rows={5}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm resize-none" />

							<div className="g-recaptcha" data-sitekey="6LflOX4rAAAAAJMm9jlHUudyvgkkDUSv15qcNzWw" data-callback="onCaptchaVerified"></div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-sm sm:text-base">
								{isSubmitting ? 'Sending...' : <>Send Message <Send className="w-4 h-4" /></>}
							</button>

							{submitStatus === 'success' && (
								<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center">
									Message sent successfully! I'll get back to you soon.
								</motion.p>
							)}
							{submitStatus === 'error' && (
								<motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-center">
									Submission failed. Try again.
								</motion.p>
							)}
						</form>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
