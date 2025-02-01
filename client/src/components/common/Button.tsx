interface ButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
	variant?: 'primary' | 'secondary';
	className?: string;
}

const Button = ({
	onClick,
	children,
	variant = 'primary',
	className = '',
}: ButtonProps) => {
	const baseStyle = 'px-8 py-3 rounded-lg text-white transition-colors';
	const variants = {
		primary: 'bg-blue-600 hover:bg-blue-700',
		secondary: 'bg-green-600 hover:bg-green-700',
	};

	return (
		<button
			onClick={onClick}
			className={`${baseStyle} ${variants[variant]} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
