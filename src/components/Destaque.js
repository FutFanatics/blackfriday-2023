import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxTitle } from "./box";
import { Section } from "./section";
import { TitleMarca } from "./Text";
import  { useState, useEffect } from 'react';
import Imagemteste from '../img/banner/destaque-banner.png'
import Destaqueblack from './DestaqueBlack';
import DestaqueCyber from './DestaqueCyber';

function Destaque() {
    const [conteudo, setConteudo] = useState(<Destaqueblack></Destaqueblack>);
    const dataDeMudanca = new Date('2023-11-27');

    useEffect(() => {
        const verificarData = () => {
          const dataAtual = new Date();
    
          if (dataAtual >= dataDeMudanca) {
            setConteudo(<DestaqueCyber></DestaqueCyber>);
          }
        };
        verificarData();

    const intervalo = setInterval(verificarData, 60000);
        return () => clearInterval(intervalo);
    }, []);
        return(
            <Section className='c-destaque'>
                <div className='container'>
                <BoxTitle>
                    <TitleMarca>
                    Destaque
                    </TitleMarca>
                </BoxTitle>

                    {conteudo}
                </div>
            </Section>
        )
    
}

export default Destaque;