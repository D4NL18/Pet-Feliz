import React from "react";
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './stylesDesc.css'
import elipse1 from '../../imgs/Ellipse1.svg'
import elipse2 from '../../imgs/Ellipse2.svg'
import elipse3 from '../../imgs/Ellipse3.svg'
import elipse4 from '../../imgs/Ellipse4.svg'
import elipse5 from '../../imgs/Ellipse5.svg'
import '../stylesElipse.css'

export default function DescPet() {

    return (
        <>
            <div className="entire-page-desc">
                <img src={elipse1} className="elipse1" alt="elipse"/>
                <img src={elipse2} className="elipse2" alt="elipse"/>
                <img src={elipse3} className="elipse3" alt="elipse"/>
                <img src={elipse4} className="elipse4" alt="elipse"/>
                <img src={elipse5} className="elipse5" alt="elipse"/>
                <div className="caixona-desc">
                    <div className="azul-desc">
                        <div className="caixinha-bolinha-desc">
                            <div className="bolinha-desc" />
                        </div>
                        <div className="textos-azul-desc">
                            <h1 className="titulo-azul-desc">Nome do Animal</h1>
                            <div className="subtitulo-azul-desc"><h2 className="categoria-desc">Raça:</h2><h2 className="conteudo-azul-desc">&nbsp;Cachorro&nbsp;|&nbsp;</h2><h2 className="categoria-desc">Idade:</h2><h2 className="conteudo-azul-desc">&nbsp;23&nbsp;|&nbsp;</h2><h2 className="categoria-desc">Tipo:</h2><h2 className="conteudo-azul-desc">&nbsp;Cachorro</h2></div>
                        </div>
                    </div>
                    <div className="branco-desc">
                        <div className="botoes-desc">
                            <Link to="/cadastro-pet1" className="botao-desc"><Button variant="contained" style={{ backgroundColor: "#4EBDEA", borderRadius: '50px' }} className="button"><p className="Texto-Botao-Lista">Cadastrar Pet</p></Button></Link>
                            <Link to="/" className="botao-desc"><Button variant="contained" style={{ backgroundColor: "#D10000", borderRadius: '50px' }} className="button"><p className="Texto-Botao-Lista">Sair</p></Button></Link>
                        </div>
                        <div className="textos-branco-desc">
                            <div className="pq">
                                <h1 className="titulo-desc">Por que adotar?</h1>
                                <p className="conteudo-desc" style={{marginBottom: '10%'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="historico">
                                <h1 className="titulo-desc">Historico</h1>
                                <p className="conteudo-desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                        </div>
                        <div className="voltar">
                            <Link to="/ListaPets" className="botao-desc-voltar"><Button variant="contained" style={{ backgroundColor: "white", borderRadius: '50px', boxShadow: '0px 4px 4px 0px gray', boxSizing: 'border-box', border: '2px solid #CBCBCB'}} className="button-desc"><p className="Texto-Botao-desc" style={{color: 'rgba(8, 99, 205, 0.79)', fontWeight: 'bold'}}>Voltar</p></Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}