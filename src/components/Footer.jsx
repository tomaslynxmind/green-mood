const Footer = () => {
	return (
		<footer id='footer' className='text-center text-3xl bg-amber-700 h-20 fixed bottom-0 w-full'>
			<p className='text-center bg-amber-900 text-white py-4 text-sm'>© {new Date().getFullYear()} Todos os direitos reservados</p>
		</footer>
	);
};

export default Footer;
