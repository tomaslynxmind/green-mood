import Button from './Button';
const Banner = () => {
	return (
		<section class='showcase-area' id='showcase'>
			<div class='showcase-container'>
				<h1 className='text-4xl font-bold uppercase mb-2.5' id='home'>
					Coma a Comida Certa
				</h1>
				<p>Comer Saudável, é bom para a nossa saúde</p>
				<Button href='#food-menu' className='bg-orange-800 text-white hover:opacity-40 mt-2'>
					Menu
				</Button>
			</div>
		</section>
	);
};

export default Banner;
