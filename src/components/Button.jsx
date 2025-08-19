const Button = ({href, variant = 'primary', size = 'md', className = '', children}) => {
	const sizeClasses = {
		sm: 'h-9 px-3 text-xl rounded-full',
		md: 'h-14 mx-auto px-6 text-xl rounded-full',
	};

	const variantClasses = {
		primary: 'bg-brown-200 text-white inline-flex font-semibold items-center justify-center hover:opacity-90',
	};

	const Tag = href ? 'a' : 'button';

	return (
		<Tag href={href} className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
			{children}
		</Tag>
	);
};

export default Button;
