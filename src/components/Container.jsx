const Container = ({ children, className }) => {
	return (
		<>
			<div className={`container-max ${className}`}>{children}</div>
		</>
	);
};

export default Container;
