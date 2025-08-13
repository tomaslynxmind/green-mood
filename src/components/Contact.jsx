const Contact = () => {
    return ( 
  <section id="contact">
        <div class="contact-container container">
          <div class="contact-img">
            <img src="https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem12.JPG" alt="" />
          </div>
  
          <div class="form-container">
            <h2>Entre em Contato:</h2>
            <input type="text" placeholder="Seu Nome" />
            <input type="email" placeholder="E-Mail" />
            <textarea
              cols="30"
              rows="6"
              placeholder="Escreva sua Mensagem"
            ></textarea>
            <a href="#" class="btn btn-primary">Enviar</a>
          </div>
        </div>
      </section>

     );
}
 
export default Contact;