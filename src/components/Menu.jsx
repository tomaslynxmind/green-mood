const Menu = () => {
	return (
		<section id='food-menu'>
			<h2 class='food-menu-heading'>Menu</h2>
			<div class='food-menu-container container'>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem2.JPG' alt='' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'>Salada Tropical</h2>
						<p>
							Mistura fresca de alface, rúcula e agrião, acompanhada de pedaços suculentos de manga, ananás e morango. Enriquecida com frango grelhado (ou camarão, opcional), nozes tostadas e queijo
							feta. Regada com um delicado molho de iogurte e mel. Uma combinação exótica, refrescante e cheia de cor.
						</p>
						<p class='food-price'>Preço: 10€</p>
					</div>
				</div>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem3.JPG' alt='error' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'> Salada de Frango</h2>
						<p>
							Tiras de peito de frango grelhado, marinadas em ervas finas, sobre uma cama de alface crocante, rúcula, tomate-cereja, cenoura ralada e pepino. Finalizada com molho vinagrete caseiro e
							croutons crocantes. Uma opção leve, saudável e cheia de sabor.
						</p>
						<p class='food-price'>Preço: 15€</p>
					</div>
				</div>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem4.JPG' alt='' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'>Peixe Grelhado com grão-de-bico e salada</h2>
						Filete de peie grelhado no ponto, temperado com flor de sal e ervas aromáticas. Servido com salada fresca de grão-de-bico, tomate, cebola roxa, salsa, azeite virgem extra e um toque de
						vinagre balsâmico. Uma refeição leve, equilibrada e cheia de sabor.
						<p className='food-price'>Preço: 14.5€</p>
					</div>
				</div>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem5.JPG' alt='' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'>Salada de Grãos</h2>
						<p>
							AGrão-de-bico tenro envolvido em azeite virgem extra, cebola roxa laminada, tomate fresco em cubos e salsa picada. Acompanhado de atum de qualidade superior e ovos cozidos, com um toque
							de vinagre suave e azeitonas pretas. Uma combinação leve, rica em sabor e tradição mediterrânica.
						</p>
						<p class='food-price'>Preço: 8€</p>
					</div>
				</div>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem6.JPG' alt='' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'>Torta de Framboesa</h2>
						<p>
							A cheesecake ficou perfeita! Cremosa no ponto certo. Acompanhada de um delicioso coulis de framboesa para equilibrar os sabores, e muitas framboesas frescas para celebrar a minha
							colheita. Não poderia pedir mais nada… apenas mais dias — e sobremesas — como esta
						</p>
						<p class='food-price'>Preço: 2.5€</p>
					</div>
				</div>
				<div class='food-menu-item'>
					<div class='food-img'>
						<img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem7.JPG' alt='' />
					</div>
					<div class='food-description'>
						<h2 class='food-titile'>Sobremesa Gelada de Frutas</h2>
						<p>
							A sobremesa é um dos momentos mais aguardados das refeições. Completa os sabores dos pratos com aquele toque doce e prazeroso ao paladar. No entanto, mesmo nesta altura, é importante
							termos atenção à nossa alimentação.
						</p>
						<p class='food-price'>Preço: 3€</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Menu;
