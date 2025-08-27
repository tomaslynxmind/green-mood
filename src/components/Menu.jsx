import React from 'react';

const pratos = [
	{
		titulo: "Salada Tropical",
		preco: "10€",
		descricao:
			"Mistura fresca de alface, rúcula e agrião, acompanhada de manga, ananás e morango. Com frango grelhado (ou camarão), nozes, queijo feta e molho de iogurte com mel.",
		img: "https://espaconatelie.com.br/wp-content/uploads/2024/04/salada-tropical.jpg",
	},
	{
		titulo: "Salada de Frango",
		preco: "15€",
		descricao:
			"Tiras de frango grelhado com ervas, alface crocante, rúcula, tomate-cereja, cenoura, pepino e molho vinagrete caseiro com croutons.",
		img: "https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem3.JPG",
	},
	{
		titulo: "Peixe Grelhado com Grão-de-bico e Salada",
		preco: "14.5€",
		descricao:
			"Filete de peixe grelhado com flor de sal e ervas, acompanhado de salada de grão-de-bico, tomate, cebola roxa, salsa e vinagre balsâmico.",
		img: "https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem4.JPG",
	},
	{
		titulo: "Salada de Grãos",
		preco: "8€",
		descricao:
			"Grão-de-bico com azeite, cebola roxa, tomate, salsa, atum, ovos, azeitonas e vinagre suave. Leve e mediterrânica.",
		img: "https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem5.JPG",
	},
	{
		titulo: "Torta de Framboesa",
		preco: "2.5€",
		descricao:
			"Cheesecake cremosa com coulis de framboesa e framboesas frescas. Doce e refrescante.",
		img: "https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem6.JPG",
	},
	{
		titulo: "Sobremesa Gelada de Frutas",
		preco: "3€",
		descricao:
			"Sobremesa leve e gelada de frutas, perfeita para fechar a refeição de forma saudável e saborosa.",
		img: "https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem7.JPG",
	},
];

const Menu = () => {
	return (
		<section id="food-menu">
			<h2 className="food-menu-heading">Menu</h2>
			<div className="food-menu-container container">
				{pratos.map((item, index) => (
					<div className="food-menu-item" key={index}>
						<div className="food-img">
							<img src={item.img} alt={item.titulo} />
						</div>
						<div className="food-description">
							<h2 className="food-title">{item.titulo}</h2>
							<p>{item.descricao}</p>
							<p className="food-price">Preço: {item.preco}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Menu;
