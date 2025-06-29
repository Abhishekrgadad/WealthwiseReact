import React, { useState, useRef, useEffect } from 'react';

const blogs = [
	{
		id: 1,
		title: 'SIP vs FD: Where Should You Park Your ₹10,000?',
		summary: 'Comprehensive comparison of Systematic Investment Plans vs Fixed Deposits for long-term wealth creation in India.',
		author: 'Rajesh Kumar',
		date: 'Dec 15, 2024',
		readTime: '5 min read',
		content: 'Full article comparing SIP and FD for Indian investors. Covers returns, risk, liquidity, and tax implications in detail.',
		description: 'This is a detailed description for SIP vs FD. Here you can explain the pros and cons, provide charts, and give actionable advice for readers considering these options for their ₹10,000 investment.',
	},
	{
		id: 2,
		title: 'Why Most People Buy the Wrong Insurance',
		summary: "Common mistakes in insurance planning and how to choose the right coverage for your family's needs.",
		author: 'Priya Sharma',
		date: 'Nov 12, 2024',
		readTime: '7 min read',
		content: 'Full article about insurance planning mistakes and how to avoid them.',
		description: 'This is a detailed description for insurance mistakes. Discuss the most common pitfalls, how to assess your needs, and tips for selecting the right insurance products.',
	},
	{
		id: 3,
		title: 'How We Select PMS Funds for Clients',
		summary: 'Our detailed process for evaluating and selecting Portfolio Management Services for high-net-worth individuals.',
		author: 'Amit Patel',
		date: 'Jan 10, 2023',
		readTime: '6 min read',
		content: 'Full article on PMS fund selection process.',
		description: 'This is a detailed description for PMS fund selection. Outline your evaluation criteria, due diligence steps, and how you match funds to client profiles.',
	},
    {
		id: 4,
		title: 'SIP vs FD: Where Should You Park Your ₹10,000?',
		summary: 'Comprehensive comparison of Systematic Investment Plans vs Fixed Deposits for long-term wealth creation in India.',
		author: 'Rajesh Kumar',
		date: 'Dec 15, 2024',
		readTime: '5 min read',
		content: 'Full article comparing SIP and FD for Indian investors. Covers returns, risk, liquidity, and tax implications in detail.',
		description: 'This is a detailed description for SIP vs FD. Here you can explain the pros and cons, provide charts, and give actionable advice for readers considering these options for their ₹10,000 investment.',
	},
	{
		id: 5,
		title: 'Why Most People Buy the Wrong Insurance',
		summary: "Common mistakes in insurance planning and how to choose the right coverage for your family's needs.",
		author: 'Priya Sharma',
		date: 'Nov 12, 2024',
		readTime: '7 min read',
		content: 'Full article about insurance planning mistakes and how to avoid them.',
		description: 'This is a detailed description for insurance mistakes. Discuss the most common pitfalls, how to assess your needs, and tips for selecting the right insurance products.',
	},
	{
		id: 6,
		title: 'How We Select PMS Funds for Clients',
		summary: 'Our detailed process for evaluating and selecting Portfolio Management Services for high-net-worth individuals.',
		author: 'Amit Patel',
		date: 'Jan 10, 2023',
		readTime: '6 min read',
		content: 'Full article on PMS fund selection process.',
		description: 'This is a detailed description for PMS fund selection. Outline your evaluation criteria, due diligence steps, and how you match funds to client profiles.',
	},
    {
		id: 7,
		title: 'SIP vs FD: Where Should You Park Your ₹10,000?',
		summary: 'Comprehensive comparison of Systematic Investment Plans vs Fixed Deposits for long-term wealth creation in India.',
		author: 'Rajesh Kumar',
		date: 'Dec 15, 2024',
		readTime: '5 min read',
		content: 'Full article comparing SIP and FD for Indian investors. Covers returns, risk, liquidity, and tax implications in detail.',
		description: 'This is a detailed description for SIP vs FD. Here you can explain the pros and cons, provide charts, and give actionable advice for readers considering these options for their ₹10,000 investment.',
	},
	{
		id: 8,
		title: 'Why Most People Buy the Wrong Insurance',
		summary: "Common mistakes in insurance planning and how to choose the right coverage for your family's needs.",
		author: 'Priya Sharma',
		date: 'Nov 12, 2024',
		readTime: '7 min read',
		content: 'Full article about insurance planning mistakes and how to avoid them.',
		description: 'This is a detailed description for insurance mistakes. Discuss the most common pitfalls, how to assess your needs, and tips for selecting the right insurance products.',
	},
	{
		id: 9,
		title: 'How We Select PMS Funds for Clients',
		summary: 'Our detailed process for evaluating and selecting Portfolio Management Services for high-net-worth individuals.',
		author: 'Amit Patel',
		date: 'Jan 10, 2023',
		readTime: '6 min read',
		content: 'Full article on PMS fund selection process.',
		description: 'This is a detailed description for PMS fund selection. Outline your evaluation criteria, due diligence steps, and how you match funds to client profiles.',
	},
    {
		id: 10,
		title: 'SIP vs FD: Where Should You Park Your ₹10,000?',
		summary: 'Comprehensive comparison of Systematic Investment Plans vs Fixed Deposits for long-term wealth creation in India.',
		author: 'Rajesh Kumar',
		date: 'Dec 15, 2024',
		readTime: '5 min read',
		content: 'Full article comparing SIP and FD for Indian investors. Covers returns, risk, liquidity, and tax implications in detail.',
		description: 'This is a detailed description for SIP vs FD. Here you can explain the pros and cons, provide charts, and give actionable advice for readers considering these options for their ₹10,000 investment.',
	},
	{
		id: 11,
		title: 'Why Most People Buy the Wrong Insurance',
		summary: "Common mistakes in insurance planning and how to choose the right coverage for your family's needs.",
		author: 'Priya Sharma',
		date: 'Nov 12, 2024',
		readTime: '7 min read',
		content: 'Full article about insurance planning mistakes and how to avoid them.',
		description: 'This is a detailed description for insurance mistakes. Discuss the most common pitfalls, how to assess your needs, and tips for selecting the right insurance products.',
	},
	{
		id: 12,
		title: 'How We Select PMS Funds for Clients',
		summary: 'Our detailed process for evaluating and selecting Portfolio Management Services for high-net-worth individuals.',
		author: 'Amit Patel',
		date: 'Jan 10, 2023',
		readTime: '6 min read',
		content: 'Full article on PMS fund selection process.',
		description: 'This is a detailed description for PMS fund selection. Outline your evaluation criteria, due diligence steps, and how you match funds to client profiles.',
	},
];

const BlogPage: React.FC = () => {
		const [selectedBlog, setSelectedBlog] = useState<null | typeof blogs[0]>(null);
		const modalRef = useRef<HTMLDivElement>(null);

		useEffect(() => {
			if (!selectedBlog) return;
			const handleClickOutside = (event: MouseEvent) => {
				if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
					setSelectedBlog(null);
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [selectedBlog]);

		return (
			<div className="min-h-screen bg-black text-white pt-24 pb-12">
				<div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4">
					{/* Heading */}
					<div className="text-center mb-16">
						<h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
							Insights & Education
						</h2>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto">
							Stay informed with our latest insights on Indian markets, investment strategies, and financial planning tips.
						</p>
					</div>

					{/* Cards */}
					<div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${selectedBlog ? 'blur-sm pointer-events-none' : ''}`}>
						{blogs.map((blog) => (
							<article
								key={blog.id}
								className="bg-black border border-gray-700 rounded-lg p-8 cursor-pointer group transition-all duration-100"
								onClick={() => setSelectedBlog(blog)}
							>
								<div className="mb-6">
									<div className="flex items-center text-sm text-gray-400 space-x-4 mb-4">
										<div className="flex items-center space-x-1">
											<span>{blog.author}</span>
										</div>
										<div className="flex items-center space-x-1">
											<span>{blog.date}</span>
										</div>
									</div>
									<h3 className="text-xl font-bold text-white mb-4 leading-tight">
										{blog.title}
									</h3>
									<p className="text-gray-300 leading-relaxed mb-4">
										{blog.summary}
									</p>
									<div className="flex items-center justify-between">
										<span className="text-sm text-gray-400">{blog.readTime}</span>
										<span className="flex items-center text-white group-hover:text-gray-300 transition-colors duration-300 font-medium">
											Read More
										</span>
									</div>
								</div>
							</article>
						))}
					</div>

					{/* Modal */}
					{selectedBlog && (
						<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-500">
							<div
								ref={modalRef}
								className="bg-black text-white rounded-2xl border border-gray-700 shadow-2xl max-w-lg w-full p-8 relative opacity-0 scale-90 animate-modalShow"
								style={{ animation: 'modalShow 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards' }}
							>
								<button
									className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
									onClick={() => setSelectedBlog(null)}
									aria-label="Close"
								>
									&times;
								</button>
								<div className="flex items-center text-sm text-gray-400 space-x-4 mb-2">
									<span>{selectedBlog.author}</span>
									<span>{selectedBlog.date}</span>
									<span>{selectedBlog.readTime}</span>
								</div>
								<h2 className="text-3xl font-bold mb-4">{selectedBlog.title}</h2>
								<p className="mb-4">{selectedBlog.content}</p>
								<p className="text-gray-300">{selectedBlog.description}</p>
							</div>
							{/* Custom animation keyframes */}
							<style>
								{`
                @keyframes modalShow {
                  0% {
                    opacity: 0;
                    transform: scale(0.85) translateY(60px);
                  }
                  60% {
                    opacity: 1;
                    transform: scale(1.05) translateY(-8px);
                  }
                  100% {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                  }
                }
              `}
							</style>
						</div>
					)}
				</div>
			</div>
		);
};

export default BlogPage;