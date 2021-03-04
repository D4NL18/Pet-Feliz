import React from 'react'
import { useState } from 'react';
import {  Link  } from 'react-router-dom';
import ImgLogin from "../../imgs/imgLogin.jpg"
import './stylesLogin.css'
import elipse1 from '../../imgs/Ellipse1.svg'
import elipse2 from '../../imgs/Ellipse2.svg'
import elipse3 from '../../imgs/Ellipse3.svg'
import elipse4 from '../../imgs/Ellipse4.svg'
import elipse5 from '../../imgs/Ellipse5.svg'
import '../stylesElipse.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleInputChangeEmail(event) {
        setEmail(event.target.value);
    }
    function handleInputChangeSenha(event) {
        setSenha(event.target.value);
    }

    function handleformSubmit(event) {
        event.preventDefault();
        console.log(`${email} ${senha}`)
        window.location.href = "/ListaPets";
    }

    return(
        <>
            <div className="entire-page-login">
                <img src={elipse1} className="elipse1" alt="elipse"/>
                <img src={elipse2} className="elipse2" alt="elipse"/>
                <img src={elipse3} className="elipse3" alt="elipse"/>
                <img src={elipse4} className="elipse4" alt="elipse"/>
                <img src={elipse5} className="elipse5" alt="elipse"/>
                <div className="Caixa-Login">
                    <div className="Img-Login-Div">
                        <img src={ImgLogin} alt="Imagem Pet Shop" className="Img-Login"/>
                    </div>
                    <div className="Tela-Login">
                        <div className="Texto-Login">
                            <h1 className="Titulo-Login">Login</h1>
                            <h2 className="SubTitulo-Login">Bem Vindo!</h2>
                        </div>
                        <form className="Inputs-Login" onSubmit={handleformSubmit}>
                            <input className="input-login" type="email" id="Email" name="Email"  placeholder="Email" required rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}} onChange={handleInputChangeEmail}/>
                            <input className="input-login" type="password" id="Senha" name="Senha" placeholder="Senha" required rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}} onChange={handleInputChangeSenha}/>
                            <div style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-login" type="submit" value="Login"/> </div>
                            <a href="/Cadastro1" className="Cadastro-Login">Cadastre-se</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}