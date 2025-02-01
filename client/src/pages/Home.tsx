import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col dark:bg-slate-900 bg-white text-black dark:text-white">
			<Navbar />
			<main className="flex-grow flex items-center justify-center">
				<HeroSection />
			</main>
			<Footer />
		</div>
	);
};

export default Home;
