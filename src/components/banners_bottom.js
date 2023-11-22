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
import BannerFull from '../img/banner/banner-full.png'
import BannerFullMob from '../img/banner/bannersmob/banner-bottom.png'
import BannerBottom1 from '../img/banner/bannerbottom1.png'
import BannerBottom2 from '../img/banner/bannerbottom2.png'
import BannerBottom3 from '../img/banner/bannerbottom3.png'
import BannerBottomBlack from './banners_bottomBlack';
import BannerBottomCyber from './banners_bottomCyber';

function BannerBottom() {
    const [conteudo, setConteudo] = useState(<BannerBottomBlack/>);
    const dataDeMudanca = new Date('2023-11-27');

    useEffect(() => {
        const verificarData = () => {
          const dataAtual = new Date();
    
          if (dataAtual >= dataDeMudanca) {
            setConteudo(<BannerBottomCyber/>);
          }
        };
        verificarData();

    const intervalo = setInterval(verificarData, 60000);
        return () => clearInterval(intervalo);
    }, []);
        return(
            <Section className='c-banners-bottom'>
                {conteudo}
            </Section>

        )
}

export default BannerBottom;