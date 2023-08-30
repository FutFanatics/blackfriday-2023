import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "../components/banner";
import { BoxDesconto } from "../components/box";
import { Section } from "../components/section";
import { TitleMarca } from "../components/Text";
import {Textdesconto} from "../components/Text";

import DescontoIcon from "../assets/img/descontos/icon-desconto.png"
import Desconto10 from '../assets/img/descontos/Desconto-10.png'
import Desconto20 from '../assets/img/descontos/Desconto-20.png'
import Desconto30 from '../assets/img/descontos/Desconto-30.png'
import Desconto40 from '../assets/img/descontos/Desconto-40.png'

function Descontos() {
        return(
         <Section className='c-descontos'>
            <div className='slider-desconto'>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                        GANHE 10%OFF
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/> 
                    <div>
                        <Textdesconto>
                        GANHE 10%OFF
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                        GANHE 10%OFF
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                        GANHE 10%OFF
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    <div>
                        <Textdesconto>
                            BAIXE O APP
                        </Textdesconto>
                    </div>
                    <img className='icon' src={DescontoIcon}/>
                    
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 d-flex col-left'>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto10}/>
                            </a>  
                        </BoxDesconto>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto20}/>
                            </a>
                        </BoxDesconto>
                    </div>
                    <div className='col-md-6 d-flex col-right'>
                        <BoxDesconto>
                        <a>
                            <img className='desconto-img' src={Desconto30}/>
                        </a>
                        </BoxDesconto>
                        <BoxDesconto>
                            <a>
                                <img className='desconto-img' src={Desconto40}/>
                            </a>
                        </BoxDesconto>
                    </div>
                </div>
            </div>
            
         </Section>   
        )
}

export default Descontos;