import React from 'react'
import { useState } from 'react';
import ImgCadastroPets from "../../imgs/ImgCadastroPets.jpg"
import './stylesCadastroPets.css'
import elipse1 from '../../imgs/Ellipse1.svg'
import elipse2 from '../../imgs/Ellipse2.svg'
import elipse3 from '../../imgs/Ellipse3.svg'
import elipse4 from '../../imgs/Ellipse4.svg'
import elipse5 from '../../imgs/Ellipse5.svg'
import '../stylesElipse.css'

export default function Login() {

    const [historico, setHistorico] = useState('')
    const [img, setImg] = useState(null);

    function handleInputChangeHistorico(event) {
        setHistorico(event.target.value);
    }

    function handleInputChangeImg(event) {
        setImg(event.target.files[0]);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(`${historico} ${img}`)
        window.location.href = "/ListaPets";
    }

    return (
        <>
            <div className="entire-page-cadastro-pet">
                <img src={elipse1} className="elipse1" alt="elipse" />
                <img src={elipse2} className="elipse2" alt="elipse" />
                <img src={elipse3} className="elipse3" alt="elipse" />
                <img src={elipse4} className="elipse4" alt="elipse" />
                <img src={elipse5} className="elipse5" alt="elipse" />
                <div className="Caixa-Cadastro-Pet">
                    <div className="Img-Cadastro-Div-Pet">
                        <img src={ImgCadastroPets} alt="Imagem Pet Shop" className="Img-Cadastro-Pet" />
                    </div>
                    <div className="Tela-Cadastro-Pet">
                        <div className="Texto-Cadastro-Pet">
                            <h1 className="Titulo-Cadastro-Pet">Cadastro PET</h1>
                            <h2 className="SubTitulo-Cadastro-Pet">Informações do Pet</h2>
                        </div>
                        <form className="Inputs-Cadastro-Pet" onSubmit={handleFormSubmit}>
                            <textarea className="input-Cadastro-Pet-Desc" type="text" id="Historico" name="Historico" onChange={handleInputChangeHistorico} placeholder="Historico" required wrap rows="1" style={{ resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }} />
                            <div className="input-Cadastro-Pet-Img">
                                <label for='Img' className="input-Cadastro-Pet-Img-label" ><p style={{ resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }}>Foto</p></label>
                                <input type="file" id="Img" name="Img" onChange={handleInputChangeImg} accept='.png, .jpeg, .jpg' style={{ display: 'none' }}/>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}><input className="enviar-Cadastro-Pet" type="submit" value="Cadastrar" /> </div>
                            <a href="/Cadastro-Pet1" className="CadastroPet-ListaPets">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}