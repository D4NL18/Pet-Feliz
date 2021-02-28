import React from 'react'
import {useState} from 'react';
import {  Link  } from 'react-router-dom';
import ImgCadastroPets from "../imgs/ImgCadastroPets.jpg"
import swal from 'sweetalert';
import '../Views/stylesCadastroPets.css'

export default function Login() {

    const [historico, setHistorico] = useState('')
    const [img, setImg] = React.useState("")

    function send() {
        swal({
            title: "Login Realizado!",
            text: `Email: ${historico}\nSenha: ${img}`,
            icon: "success",
          }); 
          
    }

    function handleInputChangeHistorico(event){
        setHistorico(event.target.value);
    }
    function onChangePicture(event) {
        setImg([...img, event.target.files[0]]);
    };

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
                            <textarea className="input-Cadastro-Pet-Desc" type="text" id="Historico" name="Historico" onChange={handleInputChangeHistorico} placeholder="Historico" required wrap rows="1" style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}}/>
                            {(img) ? 
                            <div className="input-Cadastro-Pet-Img">
                                <label for='Img' className="input-Cadastro-Pet-Img-label" ><img src={img} style={{width: '100%', height: '100%', display: 'flex'}} alt="Foto"/></label>
                                <input type="file" id="Img" name="Img" onChange={onChangePicture} accept='.png, .jpeg, .jpg' style={{display: 'none'}}/>
                            </div> : 
                            <div className="input-Cadastro-Pet-Img" >
                                <label for='Img' className="input-Cadastro-Pet-Img-label" ><p style={{resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif'}}>Foto</p></label>
                                <input type="file" id="Img" name="Img" onChange={onChangePicture} placeholder="Foto" accept='.png, .jpeg, .jpg' style={{display: 'none'}}/>
                            </div>}
                            <Link to="/ListaPets" style={{width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none'}}><input className="enviar-Cadastro-Pet" type="submit" value="Continuar"/> </Link>
                            <a href="/Cadastro-Pet1" className="CadastroPet-ListaPets">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}