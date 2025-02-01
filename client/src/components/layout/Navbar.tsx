import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-transparent relative">
			<div className="container mx-auto flex justify-between items-center max-w-5xl p-4">
				<Link to="/" className="text-white text-2xl font-bold">
					Beast Battle
				</Link>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-x-8">
					<Link
						to="/leaderboard"
						className="dark:hover:text-gray-300 hover:text-gray-700"
					>
						Leaderboard
					</Link>
					<Link
						to="/beast-pass"
						className="dark:hover:text-gray-300 hover:text-gray-700"
					>
						Beast Pass
					</Link>
					<Link
						to="/tutorial"
						className="dark:hover:text-gray-300 hover:text-gray-700"
					>
						Tutorial
					</Link>
					<Link
						to="/cards"
						className="dark:hover:text-gray-300 hover:text-gray-700"
					>
						Cards
					</Link>
				</div>

				{/* Mobile Burger Button */}
				<button
					className="md:hidden w-[30px] h-[30px] relative focus:outline-none z-[51]"
					onClick={() => setIsOpen(!isOpen)}
				>
					<span
						className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
							isOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
						}`}
					></span>
					<span
						className={`block absolute h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
							isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
						}`}
					></span>
					<span
						className={`block absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
							isOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
						}`}
					></span>
				</button>

				{/* Mobile Menu */}
				<div
					className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 transform transition-transform duration-300 ${
						isOpen ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					<div className="flex flex-col items-center justify-center h-full gap-y-8">
						<Link
							to="/leaderboard"
							className="text-white text-xl"
							onClick={() => setIsOpen(false)}
						>
							Leaderboard
						</Link>
						<Link
							to="/beast-pass"
							className="text-white text-xl"
							onClick={() => setIsOpen(false)}
						>
							Beast Pass
						</Link>
						<Link
							to="/tutorial"
							className="text-white text-xl"
							onClick={() => setIsOpen(false)}
						>
							Tutorial
						</Link>
						<Link
							to="/cards"
							className="text-white text-xl"
							onClick={() => setIsOpen(false)}
						>
							Cards
						</Link>
						<Link
							to="/"
							className="text-white text-lg bg-red-500 p-2 px-4 rounded-4xl"
							onClick={() => setIsOpen(false)}
						>
							Sign Up
						</Link>
					</div>
				</div>

				{/* Desktop Sign Up Button */}
				<Link
					to="/"
					className="hidden md:block text-lg font-bold bg-red-500 p-1 px-3 rounded-4xl dark:hover:bg-red-500/80"
				>
					Sign Up
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
