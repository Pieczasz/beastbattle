import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../../stores/gameStore';
import Card from '../Card';

const HeroSection = () => {
	const navigate = useNavigate();
	const { addPlayer } = useGameStore();

	const handleFindGame = () => {
		addPlayer(`Player_${Math.random().toString(36).substring(7)}`);
		navigate('/game');
	};

	return (
		<div className="relative w-full overflow-hidden">
			{/* Side characters - hidden on mobile */}
			<div className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2  w-[250px]  z-10">
				<img
					src="/assets/cardImages/mamoothit.png"
					alt="Left Character"
					className="w-full h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
				/>
			</div>

			<div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-[250px]  z-10">
				<img
					src="/assets/cardImages/racoonexplosive.png"
					alt="Right Character"
					className="w-full h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
				/>
			</div>

			<div className="relative text-center min-h-screen px-4">
				{/* Gradient blur background */}
				<div
					className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
						w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-r from-orange-400/30 to-purple-400/30 
						blur-[100px] md:blur-[140px] rounded-full pointer-events-none"
					style={{ filter: 'blur(140px)' }}
				/>

				{/* Content */}
				<div className="relative z-10 pt-20 md:pt-0 mt-20">
					<h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white">
						BeastBattle
					</h1>
					<h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300">
						Multiplayer card game
					</h2>
					<div className="space-y-4 mt-8">
						<Button onClick={handleFindGame}>Find Game</Button>
					</div>
					<div className="flex justify-center items-center mt-16">
						<div className="transform rotate-[13deg] transition-all duration-300 hover:translate-y-[-15px]">
							<Card
								description="Force a trade with another player"
								name="Mystic Tiger"
								imageUrl="/assets/cardImages/tiger.png"
								rarity="rare"
							/>
						</div>
						<div className="transform transition-all duration-300 hover:translate-y-[-15px] rotate-[2deg]">
							<Card
								description="Forces the next player to draw 2 cards"
								name="Explosive Racoon"
								imageUrl="/assets/cardImages/racoonexplosive.png"
							/>
						</div>
						<div className="transform -rotate-[10deg] transition-all duration-300 hover:translate-y-[-21px]">
							<Card
								description="Resurrect a player from elimination"
								name="Phoenix Down"
								imageUrl="/assets/cardImages/phoenix.png"
								rarity="legendary"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
