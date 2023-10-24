import "./svgmarcas.js"
import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { TitleMarca } from "./Text";
import { NameMarca } from "./Text";
import { StyledButton } from "./Button";
import { BoxTitle } from "./box";
import { BoxMarca } from "./box";
import { Section } from "./section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import  { useState, useEffect } from 'react';
import MarcasBlack from "./marcasBlack.js";


function Marcas() {
  const marcasSlick={
    dots:false,
    arrows:false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive:[
      {
          breakpoint: 600,
          settings : {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            arrows:false,
          }
        },
    ]
  }
  const [conteudo, setConteudo] = useState(<MarcasBlack></MarcasBlack>);
    const dataDeMudanca = new Date('2023-10-15');

    useEffect(() => {
        const verificarData = () => {
          const dataAtual = new Date();
    
          if (dataAtual >= dataDeMudanca) {
            setConteudo(<MarcasBlack></MarcasBlack>);
          }
        };
        verificarData();

    const intervalo = setInterval(verificarData, 60000);
        return () => clearInterval(intervalo);
    }, []);
  return (
    <Section className='c-marcas'>
        <div className='container'>
          <BoxTitle>
            <TitleMarca>
              Marcas
            </TitleMarca>
          </BoxTitle>
          {conteudo}
        </div>
    </Section>
    
  );
}

export default Marcas;
