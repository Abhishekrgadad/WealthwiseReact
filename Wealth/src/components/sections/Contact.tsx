import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const services = [
	{
		title: 'Wealth Planning',
		description:
			'Comprehensive strategies to help you achieve your life goals and build sustainable wealth.',
	},
	{
		title: 'Investment Advisory',
		description:
			'Expert guidance on mutual funds, stocks, and alternative investments tailored to your needs.',
	},
	{
		title: 'Tax Planning',
		description:
			'Optimize your taxes legally and efficiently to maximize your after-tax returns.',
	},
	{
		title: 'Insurance',
		description:
			'Right-sized life and health insurance coverage to protect your family and assets.',
	},
	{
		title: 'Portfolio Management',
		description:
			'Active monitoring and rebalancing to maintain optimal asset allocation.',
	},
];

const Contact = () => {
	// Carousel state for desktop service cards
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % services.length);
		}, 4000);
		return () => clearInterval(timer);
	}, []);

	return (
		<section id="contact" className="py-20 bg-black font-poppins">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
						Start Your Wealth Journey
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto">
						Ready to take control of your financial future? Let's have a
						conversation about your goals.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
					{/* Contact Information */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl font-bold text-white mb-6">
								Get in Touch
							</h3>
							<p className="text-lg text-gray-300 mb-8 leading-relaxed">
								Whether you're just starting your investment journey or looking
								to optimize your existing portfolio, we're here to help.
								Schedule a free consultation to discuss your financial goals.
							</p>
						</div>

						<div className="space-y-6">
							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
									<Phone size={20} />
								</div>
								<div>
									<p className="font-semibold text-white">Phone</p>
									<p className="text-gray-300">+91 90352 54332</p>
								</div>
							</div>

							<div className="flex items-center space-x-4">
								<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
									<Mail size={20} />
								</div>
								<div>
									<p className="font-semibold text-white">Email</p>
									<p className="text-gray-300">hello@Angel Investments.in</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
									<MapPin size={20} />
								</div>
								<div>
									<p className="font-semibold text-white">Office</p>
									<p className="text-gray-300">
										H 2nd floor, No 19, 1st Main Rd, <br></br>opposite total gas, 3rd Block, <br></br>3rd Stage,Basaveshwar Nagar
										<br />
										Bengaluru, Karnataka 560079
									</p>
								</div>
							</div>
						</div>

						{/* <div className="pt-8 border-t border-gray-800">
							<p className="text-sm text-gray-400 mb-4">Office Hours</p>
							<div className="space-y-2 text-gray-300">
								<p>
									<span className="font-medium">Monday - Friday:</span> 9:00 AM
									- 6:00 PM
								</p>
								<p>
									<span className="font-medium">Saturday:</span> 10:00 AM - 2:00
									PM
								</p>
								<p>
									<span className="font-medium">Sunday:</span> Closed
								</p>
							</div>
						</div> */}
					</motion.div>

					{/* Services Carousel - Desktop only */}
					<div className="hidden lg:flex flex-col items-start justify-center w-full">
						<div className="relative w-full flex flex-col items-start justify-center">
							<AnimatePresence mode="wait">
								<motion.div
									key={currentIndex}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ duration: 0.7 }}
									className="absolute left-0 -top-20 flex flex-col items-start justify-center w-[400px] min-h-[160px]"
								>
									<div className="bg-black rounded-lg px-10 py-8 flex flex-col items-start justify-center text-white shadow-lg w-full text-left">
										<div className="text-2xl font-semibold mb-2">
											{services[currentIndex].title}
										</div>
										<div className="text-gray-300 text-base mt-1">
											{services[currentIndex].description}
										</div>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;