import React from "react";
import img from '../../imgs/imgLogin.jpg'
import {Button} from '@material-ui/core'
import {  Link  } from 'react-router-dom';
import './stylesLista.css';
import elipse1 from '../../imgs/Ellipse1.svg'
import elipse2 from '../../imgs/Ellipse2.svg'
import elipse3 from '../../imgs/Ellipse3.svg'
import elipse4 from '../../imgs/Ellipse4.svg'
import elipse5 from '../../imgs/Ellipse5.svg'
import '../stylesElipse.css'


export default function ListaPets() {

    return (
        <>
            <div className="entire-lista">
            <img src={elipse1} className="elipse1" alt="elipse"/>
                <img src={elipse2} className="elipse2" alt="elipse"/>
                <img src={elipse3} className="elipse3" alt="elipse"/>
                <img src={elipse4} className="elipse4" alt="elipse"/>
                <img src={elipse5} className="elipse5" alt="elipse"/>
                <div className="caixona-lista">
                    <div className="botoes-lista">
                        <Link to="/cadastro-pet1" className="botao-lista"><Button variant="contained" style={{backgroundColor: "#4EBDEA", borderRadius: '50px'}} className="button"><p className="Texto-Botao-Lista">Cadastrar Pet</p></Button></Link>
                        <Link to="/" className="botao-lista"><Button variant="contained" style={{backgroundColor: "#D10000", borderRadius: '50px'}} className="button"><p className="Texto-Botao-Lista">Sair</p></Button></Link>

                    </div>
                    <div className="img-lista">
                        <img src={img} alt="img" />
                    </div>
                    <div className="pesquisa-lista">
                        <input type="text" className="pesquisa-lista-input" placeholder="Pesquise um pet para adotar"/>
                    </div>
                    <a className="botao-pet-lista" href="Descricao-pet" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="img-pet-lista" />
                        <div className="texto-botao-pet-lista">
                            <h2 className="titulo-lista">Nome do Animal<br /></h2>
                            <div className="texto-lista"><h3 className="texto-lista-tipo">Tipo:</h3><h3 className="texto-lista-cachorro">&nbsp;Cachorro</h3></div>
                        </div>
                    </a>
                    <a className="botao-pet-lista" href="Descricao-pet" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="img-pet-lista" />
                        <div className="texto-botao-pet-lista">
                            <h2 className="titulo-lista">Nome do Animal<br /></h2>
                            <div className="texto-lista"><h3 className="texto-lista-tipo">Tipo:</h3><h3 className="texto-lista-cachorro">&nbsp;Cachorro</h3></div>
                        </div>
                    </a>
                    <a className="botao-pet-lista" href="Descricao-pet" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="img-pet-lista" />
                        <div className="texto-botao-pet-lista">
                            <h2 className="titulo-lista">Nome do Animal<br /></h2>
                            <div className="texto-lista"><h3 className="texto-lista-tipo">Tipo:</h3><h3 className="texto-lista-cachorro">&nbsp;Cachorro</h3></div>
                        </div>
                    </a>
                    <a className="botao-pet-lista" href="Descricao-pet" style={{textDecoration: 'none', color: 'black'}}>
                        <div className="img-pet-lista" />
                        <div className="texto-botao-pet-lista">
                            <h2 className="titulo-lista">Nome do Animal<br /></h2>
                            <div className="texto-lista"><h3 className="texto-lista-tipo">Tipo:</h3><h3 className="texto-lista-cachorro">&nbsp;Cachorro</h3></div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )

}