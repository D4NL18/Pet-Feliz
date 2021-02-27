import React from 'react'
import {  Link  } from 'react-router-dom';
import ImgLogin from "../imgs/imgLogin.jpg"
import '../Views/stylesLogin.css'

export default function Login() {


    return(
        <>
            <div className="entire-page-login">
                <div className="Caixa-Login">
                    <div className="Img-Login-Div">
                        <img src={ImgLogin} alt="Imagem Pet Shop" className="Img-Login"/>
                    </div>
                    <div className="Tela-Login">
                        <div className="Texto-Login">
                            <h1 className="Titulo-Login">Login</h1>
                            <h2 className="SubTitulo-Login">Bem Vindo!</h2>
                        </div>
                        <form className="Inputs-Login" >
                            <input className="input-login" type="email" id="Email" name="Email"  placeholder="Email" required rows="1"/>
                            <input className="input-login" type="password" id="Senha" name="Senha" placeholder="Senha" required rows="1"/>
                            <Link to="/ListaPets" style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-login" type="submit" value="Login"/> </Link>
                            <a href="/Cadastro1" className="Cadastro-Login">Cadastre-se</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}