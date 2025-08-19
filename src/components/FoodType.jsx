import Button from './Button';

const FoodItems = [
	{
		id: 'fruits',
		title: 'Frutas',
		img: 'https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem9.JPG',
		href: 'https://www.todamateria.com.br/fruta',
	},
	{
		id: 'vegetables',
		title: 'Vegetais',
		img: 'https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem8.JPG',
		href: 'https://www.significados.com.br/vegetais',
	},
	{
		id: 'grains',
		title: 'Grãos',
		img: 'https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem10.JPG',
		href: 'https://fundacaocargill.org.br/graos-sementes-e-cereais-qual-a-diferenca',
	},
];

const FoodType = () => {
	return (
		<section id='food'>
			<h2>Tipos de Comida</h2>
			<div className='food-container container'>
				{FoodItems.map(({id, title, img, href}) => (
					<div key={id}>
						<div className='img-container'>
							<img src={img} alt={title} />
							<div className='img-content'>
								<h3>{title}</h3>
								<Button href={href} className='btn btn-primary' target='_blank' rel='noopener noreferrer p'>
									Ler Mais
								</Button>
							</div>
						</div>
					</div>
				))}
			</div>
			{/* <h2>Tipos de Comida</h2>
			<div class='food-container container'>
				<div class='food-type fruite'>
					<div class='img-container'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem9.JPG' alt='error' />
						<div class='img-content'>
							<h3>Frutas</h3>
							<Button href='https://www.todamateria.com.br/fruta' className='bg-yellow-800 text-white hover:opacity-40 mt-2'>
								Ler Mais
							</Button>
						</div>
					</div>
				</div>
				<div class='food-type vegetable'>
					<div class='img-container'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem8.JPG' alt='error' />
						<div class='img-content'>
							<h3>Vegetais</h3>
							<Button href='https://www.significados.com.br/vegetais' className='bg-yellow-800 text-white hover:opacity-40 mt-2'>
								Ler Mais
							</Button>
						</div>
					</div>
				</div>
				<div class='food-type grin'>
					<div class='img-container'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem10.JPG' alt='error' />
						<div class='img-content'>
							<h3>Grãos</h3>
							<Button href='https://fundacaocargill.org.br/graos-sementes-e-cereais-qual-a-diferenca' className='bg-yellow-800 text-white hover:opacity-40 mt-2'>
								Ler Mais
							</Button>
						</div>
					</div>
				</div> 
			</div>*/}
		</section>
	);
};

export default FoodType;
