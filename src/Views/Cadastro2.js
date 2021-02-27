import React from 'react'
import {useState} from 'react';
import {  Link  } from 'react-router-dom';
import ImgCadastro from "../imgs/ImgCadastro.jpg"
import swal from 'sweetalert';
import '../Views/stylesCadastro.css'

export default function Login() {

    const [telefone, setTelefone] = useState('')
    const [senha, setSenha] = useState('')
    const [Email, setEmail] = useState('')

    function send() {
        swal({
            title: "Login Realizado!",
            text: `Telefone: ${telefone}\nData de Nascimento: ${Email}\nSenha: ${senha}`,
            icon: "success",
          }); 
          
    }

    function handleInputChangeTelefone(event){
        setTelefone(event.target.value);
    }
    function handleInputChangeEmail(event){
        setEmail(event.target.value);
    }
    function handleInputChangeSenha(event){
        setSenha(event.target.value);
    }

    function handleFormSubmit(event){ 
        event.preventDefault(); 
        send()
      }

    return(
        <>
            <div className="entire-page-cadastro">
                <div className="Caixa-Cadastro">
                    <div className="Img-Cadastro-Div">
                        <img src={ImgCadastro} alt="Imagem Pet Shop" className="Img-Cadastro"/>
                    </div>
                    <div className="Tela-Cadastro">
                        <div className="Texto-Cadastro">
                            <h1 className="Titulo-Cadastro">Cadastro</h1>
                            <h2 className="SubTitulo-Cadastro">Insira suas informações</h2>
                        </div>
                        <form className="Inputs-Cadastro" onSubmit={handleFormSubmit}>
                            <input className="input-Cadastro" type="tel" id="Telefone" name="Telefone" onChange={handleInputChangeTelefone} placeholder="Telefone" required rows="1"/>
                            <input className="input-Cadastro" type="email" id="Email" name="Email" onChange={handleInputChangeEmail} placeholder="E-mail" required rows="1"/>
                            <input className="input-Cadastro" type="text" id="Senha" name="Senha" onChange={handleInputChangeSenha} placeholder="Senha" required rows="1"/>
                            <Link to="/" style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-Cadastro" type="submit" value="Continuar"/> </Link>
                            <a href="/Cadastro1" className="Login-Cadastro">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}