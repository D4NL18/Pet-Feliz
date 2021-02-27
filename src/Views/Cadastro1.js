import React from 'react'
import {useState} from 'react';
import {  Link  } from 'react-router-dom';
import ImgCadastro from "../imgs/ImgCadastro.jpg"
import swal from 'sweetalert';
import '../Views/stylesCadastro.css'

export default function Login() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [nascimento, setNascimento] = useState('')

    function send() {
        swal({
            title: "Login Realizado!",
            text: `Email: ${nome}\nSenha: ${sobrenome}\n Data de Nascimento: ${nascimento}`,
            icon: "success",
          }); 
          
    }

    function handleInputChangeNome(event){
        setNome(event.target.value);
    }
    function handleInputChangeSobrenome(event){
        setSobrenome(event.target.value);
    }
    function handleInputChangeNascimento(event){
        setNascimento(event.target.value);
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
                            <input className="input-Cadastro" type="text" id="Nome" name="Nome" onChange={handleInputChangeNome} placeholder="Nome" required rows="1"/>
                            <input className="input-Cadastro" type="text" id="Sobrenome" name="Sobrenome" onChange={handleInputChangeSobrenome} placeholder="Sobrenome" required rows="1"/>
                            <input className="input-Cadastro" type="date" id="Nascimento" name="Nascimento" onChange={handleInputChangeNascimento} required rows="1"/>
                            <Link to="/Cadastro2" style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-Cadastro" type="submit" value="Continuar"/> </Link>
                            <a href="/" className="Login-Cadastro">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}