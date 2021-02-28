import React from 'react'
import {useState} from 'react';
import {  Link  } from 'react-router-dom';
import ImgCadastroPets from "../imgs/ImgCadastroPets.jpg"
import swal from 'sweetalert';
import '../Views/stylesCadastroPets.css'

export default function Login() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [descricao, setDescricao] = useState('')

    function send() {
        swal({
            title: "Login Realizado!",
            text: `Nome: ${nome}\nIdade: ${idade}\nDescrição: ${descricao}`,
            icon: "success",
          }); 
          
    }

    function handleInputChangeNome(event){
        setNome(event.target.value);
    }
    function handleInputChangeIdade(event){
        setIdade(event.target.value);
    }
    function handleInputChangeDescricao(event){
        setDescricao(event.target.value);
    }

    function handleFormSubmit(event){ 
        event.preventDefault(); 
        send()
      }

    return(
        <>
            <div className="entire-page-cadastro-pet">
                <div className="Caixa-Cadastro-Pet">
                    <div className="Img-Cadastro-Div-Pet">
                        <img src={ImgCadastroPets} alt="Imagem Pet Shop" className="Img-Cadastro-Pet"/>
                    </div>
                    <div className="Tela-Cadastro-Pet">
                        <div className="Texto-Cadastro-Pet">
                            <h1 className="Titulo-Cadastro-Pet">Cadastro PET</h1>
                            <h2 className="SubTitulo-Cadastro-Pet">Informações do Pet</h2>
                        </div>
                        <form className="Inputs-Cadastro-Pet" onSubmit={handleFormSubmit}>
                            <input className="input-Cadastro-Pet" type="text" id="Nome" name="Nome" onChange={handleInputChangeNome} placeholder="Nome" required rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}}/>
                            <input className="input-Cadastro-Pet" type="text" id="Idade" name="Idade" onChange={handleInputChangeIdade} placeholder="Idade" required rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}}/>
                            <textarea className="input-Cadastro-Pet-Desc" type="text" id="Descricao" name="Descricao" onChange={handleInputChangeDescricao} placeholder="Por que adotar?" required wrap rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}}/>
                            <Link to="/Cadastro-Pet2" style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-Cadastro-Pet" type="submit" value="Continuar"/> </Link>
                            <a href="/ListaPets" className="CadastroPet-ListaPets">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}