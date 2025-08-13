const Food_type = () => {
    return ( <section id="food">
        <h2>Tipos de Comida</h2>
        <div class="food-container container">
          <div class="food-type fruite">
            <div class="img-container">
              <img src="https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem9.JPG" alt="error" />
              <div class="img-content">
                <h3>Frutas</h3>
                <a
                  href="https://www.todamateria.com.br/frutas"
                  class="btn btn-primary"
                  target="blank"
                  >Ler Mais...</a
                >
              </div>
            </div>
          </div>
          <div class="food-type vegetable">
            <div class="img-container">
              <img src="https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem8.JPG" alt="error" />
              <div class="img-content">
                <h3>Vegetais</h3>
                <a
                  href="https://www.significados.com.br/vegetais"
                  class="btn btn-primary"
                  target="blank"
                  >Ler Mais...</a
                >
              </div>
            </div>
          </div>
          <div class="food-type grin">
            <div class="img-container">
              <img src="https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem10.JPG" alt="error" />
              <div class="img-content">
                <h3>Grãos</h3>
                <a
                  href="https://fundacaocargill.org.br/graos-sementes-e-cereais-qual-a-diferenca"
                  class="btn btn-primary"
                  target="blank"
                  >Ler Mais...</a
                >
              </div>
            </div>
          </div>
        </div>
      </section> );
}
 
export default Food_type;