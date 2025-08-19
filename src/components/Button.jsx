const Button = ({href, children, className = '', ...rest}) => {
	const Tag = href ? 'a' : 'button';

	return (
		<Tag
			href={href}
			className={`inline-flex items-center justify-center px-6 py-2 rounded-full font-medium uppercase tracking-wide bg-yellow-800 text-white hover:opacity-80 transition ${className}`}
			{...rest}>
			{children}
		</Tag>
	);
};

export default Button;
