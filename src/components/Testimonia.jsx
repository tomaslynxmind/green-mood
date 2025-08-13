const Testimonial = () => {
    return (  
   <section id="testimonials">
        <h2 class="testimonial-title">O que nossos Clientes Falam sobre nós:</h2>
        <div class="testimonial-container container">
          <div class="testimonial-box">
            <div class="customer-detail">
              <div class="customer-photo">
                <img src="https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem13.JPG" alt="" />
                <p class="customer-name">Jorge Lee</p>
              </div>
            </div>
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Comida maravilhosa e atendimento maravilhoso.
              Volto sempre que estou na cidade.
            </p>
          </div>
          <div class="testimonial-box">
            <div class="customer-detail">
              <div class="customer-photo">
                <img
                  src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg"
                  alt=""
                />
                <p class="customer-name">Amelia Gonçalves</p>
              </div>
            </div>
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Amei o restaurante, a comida, e todo atendimento.
              Espero sempre voltar neste lugar maravilhoso!
            </p>
          </div>
          <div class="testimonial-box">
            <div class="customer-detail">
              <div class="customer-photo">
                <img src="https://i.postimg.cc/fy90qvkV/male-photo3.jpg" alt="" />
                <p class="customer-name">João Lucas Silva</p>
              </div>
            </div>
            <div class="star-rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </div>
            <p class="testimonial-text">
              Excelente ambiente, com variedade de comidas
              deliciosas.
            </p>
          </div>
        </div>
      </section>      
    );
}
 
export default Testimonial;