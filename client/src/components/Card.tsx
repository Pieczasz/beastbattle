import React from 'react';

interface CardProps {
	name: string;
	description: string;
	imageUrl: string;
	rarity?: 'common' | 'rare' | 'epic' | 'legendary';
	onClick?: () => void;
}

const getRarityClasses = (rarity: string = 'common') => {
	switch (rarity) {
		case 'legendary':
			return 'bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-600';
		case 'epic':
			return 'bg-gradient-to-br from-purple-700 via-indigo-800 to-purple-600';
		case 'rare':
			return 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400';
		default:
			return 'bg-gradient-to-br from-gray-500 via-gray-400 to-gray-300';
	}
};

const Card: React.FC<CardProps> = ({
	name,
	description,
	imageUrl,
	rarity = 'common',
	onClick,
}) => {
	return (
		<div
			onClick={onClick}
			className={`relative w-[200px] md:w-[250px] h-[280px] md:h-[350px] rounded-xl p-[3px] cursor-pointer 
      ${getRarityClasses(rarity)}
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
		>
			<div className="bg-gray-900 rounded-xl h-full p-2 md:p-4 flex flex-col items-center">
				<img
					src={imageUrl}
					alt={name}
					className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] rounded-lg object-cover mb-2 md:mb-4"
				/>
				<h2 className="text-white text-lg md:text-xl font-bold mb-1 md:mb-2 text-center">
					{name}
				</h2>
				<p
					className="text-gray-300 text-xs md:text-sm text-center overflow-y-auto max-h-[60px] md:max-h-[80px] 
          scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
				>
					{description}
				</p>
			</div>
		</div>
	);
};

export default Card;
