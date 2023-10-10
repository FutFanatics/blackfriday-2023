import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { Section } from "./section";
import  { useState, useEffect } from 'react';
import BannersCyber from './bannerscyber';
import BannersBlack from './bannersblack';

function Banners() {
    const [conteudo, setConteudo] = useState(<BannersBlack/>);
    const dataDeMudanca = new Date('2023-10-15');

    useEffect(() => {
        const verificarData = () => {
          const dataAtual = new Date();
    
          if (dataAtual >= dataDeMudanca) {
            setConteudo(<BannersCyber/>);
          }
        };
        verificarData();

    const intervalo = setInterval(verificarData, 60000);
        return () => clearInterval(intervalo);
    }, []);
    return(
        <Section className='c-banners'>
            <div className='container'>
                <div className='row'>
                    {conteudo}
                </div>
            </div>
        </Section>
    )
    

}

export default Banners;
