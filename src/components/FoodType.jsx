import Button from './Button';
const FoodType = () => {
	return (
		<section id='food'>
			<h2>Tipos de Comida</h2>
			<div class='food-container container'>
				<div class='food-type fruite'>
					<div class='img-container'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem9.JPG' alt='error' />
						<div class='img-content'>
							<h3>Frutas</h3>

							<Button href='https://www.todamateria.com.br/fruta' className='bg-orange-800 text-white hover:opacity-40 mt-2'>
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
							<a href='https://www.significados.com.br/vegetais' class='btn btn-primary' target='blank'>
								Ler Mais...
							</a>
						</div>
					</div>
				</div>
				<div class='food-type grin'>
					<div class='img-container'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem10.JPG' alt='error' />
						<div class='img-content'>
							<h3>Grãos</h3>
							<a href='https://fundacaocargill.org.br/graos-sementes-e-cereais-qual-a-diferenca' class='btn btn-primary' target='blank'>
								Ler Mais...
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoodType;
