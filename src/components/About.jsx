import Button from './Button';
const About = () => {
	return (
		<section id='about'>
			<div class='about-wrapper container'>
				<div class='about-text'>
					<p class='small'>Sobre Nós</p>
					<h2>Há 10 anos que fazemos comida saudável durar.</h2>
					<p>
						Há 10 anos que fazemos comida saudável durar. Comida saudável, em suma, é aquela o mais natural possível, livre de conservantes, gorduras saturadas e excessos de gordura, açúcar e sal.
						Para que a comida seja considerada saudável, deve conter todos os nutrientes necessários de uma refeição, ou seja, tem de ser equilibrada. Assim, para que uma refeição seja equilibrada...
					</p>
					<Button href='https://www.instagram.com' className='bg-red-400 text-white hover:opacity-40 mt-2'>
						Segue-nos no instagram
					</Button>
				</div>
				<div class='about-img'>
					<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem11.JPG' alt='food' />
				</div>
			</div>
		</section>
	);
};

export default About;
