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

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [descricao, setDescricao] = useState('')


    function handleInputChangeNome(event) {
        setNome(event.target.value);
    }
    function handleInputChangeIdade(event) {
        setIdade(event.target.value);
    }
    function handleInputChangeDescricao(event) {
        setDescricao(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(`${nome} ${idade} ${descricao}`)
        window.location.href = "/Cadastro-Pet2";
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
                            <input className="input-Cadastro-Pet" type="text" id="Nome" name="Nome" onChange={handleInputChangeNome} placeholder="Nome" required rows="1" style={{ resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }} />
                            <input className="input-Cadastro-Pet" type="text" id="Idade" name="Idade" onChange={handleInputChangeIdade} placeholder="Idade" required rows="1" style={{ resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }} />
                            <textarea className="input-Cadastro-Pet-Desc" type="text" id="Descricao" name="Descricao" onChange={handleInputChangeDescricao} placeholder="Por que adotar?" required wrap rows="1" style={{ resize: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }} />
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}><input className="enviar-Cadastro-Pet" type="submit" value="Continuar" /> </div>
                            <a href="/ListaPets" className="CadastroPet-ListaPets">Voltar</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}