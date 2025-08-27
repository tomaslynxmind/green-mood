import React, { useState } from 'react';
import Button from './Button';

const Contact = () => {
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        data: '',
        mensagem: '',
    });
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('https://webhook.site/be52cfa7-9e13-4562-9142-2375d23afa07', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                mode: 'no-cors' // 👈 aqui é o truque
            });

            // Como no-cors não permite ler resposta, assumimos que deu certo
            setConfirmationMessage('Sua marcação foi enviada com sucesso!');
            setFormData({ fname: '', email: '', data: '', mensagem: '' });
        } catch (error) {
            console.error('Erro na requisição:', error);
            setConfirmationMessage('Erro na conexão. Tente novamente mais tarde.');
        }
    };

    return (
        <section id='contact'>
            <div className='contact-container container'>
                <div className='contact-img'>
                    <img src='https://raw.githubusercontent.com/claudineiaga/Site-de-Restaurante/refs/heads/main/imagem12.JPG' alt='' />
                </div>
                <form className='form-container' onSubmit={handleSubmit}>
                    <h2>Entre em Contato:</h2>
                    <input 
                        type='text'
                        name='fname'
                        value={formData.fname}
                        onChange={handleChange}
                        placeholder='Nome completo'
                        required
                    />
                    <input 
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='E-Mail'
                        required
                    />
                    <input 
                        type='date'
                        name='data'
                        className='w-full p-2 border rounded'
                        value={formData.data}
                        onChange={handleChange}
                        required
                    />
                    <textarea 
                        name='mensagem'
                        cols='30'
                        rows='6'
                        value={formData.mensagem}
                        onChange={handleChange}
                        placeholder='Escreva sua Mensagem'
                        required
                    ></textarea>
                    <Button type='submit' className='bg-yellow-800 text-white hover:opacity-40 mt-2'>
                        Enviar Marcação
                    </Button>
                </form>
                {confirmationMessage && <p>{confirmationMessage}</p>}
            </div>
        </section>
    );
};

export default Contact;
