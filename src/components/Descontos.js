import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxDesconto } from "./box";
import { Section } from "./section";
import { TitleMarca } from "./Text";
import {Textdesconto} from "./Text";


import  { useState, useEffect } from 'react';
import DescontosBlack from './descontosblack';
import DescontosCyber from './descontoscyber';
function Descontos() {
    const [conteudo, setConteudo] = useState(<DescontosBlack></DescontosBlack>);
    const dataDeMudanca = new Date('2023-10-15');

    useEffect(() => {
        const verificarData = () => {
          const dataAtual = new Date();
    
          if (dataAtual >= dataDeMudanca) {
            setConteudo(<DescontosCyber></DescontosCyber>);
          }
        };
        verificarData();

    const intervalo = setInterval(verificarData, 60000);
        return () => clearInterval(intervalo);
    }, []);

        return(
         <Section className='c-descontos'>
            <div className='container'>
                <div className='row'>
                    {conteudo}
                </div>
            </div>
            
         </Section>   
        )
}

export default Descontos;