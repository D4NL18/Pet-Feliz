import React from 'react'
import { useState } from 'react';
import ImgCadastro from "../../imgs/ImgCadastro.jpg"
import './stylesCadastro.css'
import elipse1 from '../../imgs/Ellipse1.svg'
import elipse2 from '../../imgs/Ellipse2.svg'
import elipse3 from '../../imgs/Ellipse3.svg'
import elipse4 from '../../imgs/Ellipse4.svg'
import elipse5 from '../../imgs/Ellipse5.svg'
import '../stylesElipse.css'

export default function Login() {

    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')

    function handleInputChangeTelefone(event) {
        setTelefone(event.target.value);
    }
    function handleInputChangeEmail(event) {
        setEmail(event.target.value);
    }
    function handleInputChangeSenha(event) {
        setSenha(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(`${telefone} ${email} ${senha}`)
        window.location.href = "/";
    }

    return (
        <>
            <div className="entire-page-cadastro">
                <img src={elipse1} className="elipse1" alt="elipse" />
                <img src={elipse2} className="elipse2" alt="elipse" />
                <img src={elipse3} className="elipse3" alt="elipse" />
                <img src={elipse4} className="elipse4" alt="elipse" />
                <img src={elipse5} className="elipse5" alt="elipse" />
                <div className="Caixa-Cadastro">
                    <div className="Img-Cadastro-Div">
                        <img src={ImgCadastro} alt="Imagem Pet Shop" className="Img-Cadastro" />
                    </div>
                    <div className="Tela-Cadastro">
                        <div className="Texto-Cadastro">
                            <h1 className="Titulo-Cadastro">Cadastro</h1>
                            <h2 className="SubTitulo-Cadastro">Insira suas informações</h2>
                        </div>
                        <form className="Inputs-Cadastro" onSubmit={handleFormSubmit}>
                            <input className="input-Cadastro" type="tel" id="Telefone" name="Telefone" onChange={handleInputChangeTelefone} placeholder="Telefone" required rows="1" />
                            <input className="input-Cadastro" type="email" id="Email" name="Email" onChange={handleInputChangeEmail} placeholder="E-mail" required rows="1" />
                            <input className="input-Cadastro" type="password" id="Senha" name="Senha" onChange={handleInputChangeSenha} placeholder="Senha" required rows="1" />
                            <div to="/" style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}><input className="enviar-Cadastro" type="submit" value="Continuar" /> </div>
                            <a href="/Cadastro1" className="Login-Cadastro">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}