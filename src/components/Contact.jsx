import Button from './Button';
const Contact = () => {
	return (
		<section id='contact'>
			<div class='contact-container container'>
				<div class='contact-img'>
					<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem12.JPG' alt='' />
				</div>

				<div class='form-container'>
					<h2>Entre em Contato:</h2>
					<input type='text' placeholder='Seu Nome' />
					<input type='email' placeholder='E-Mail' />
					<textarea cols='30' rows='6' placeholder='Escreva sua Mensagem'></textarea>

					<Button href='https://fundacaocargill.org.br/graos-sementes-e-cereais-qual-a-diferenca' className='bg-yellow-800 text-white hover:opacity-40 mt-2'>
						Ler Mais
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
