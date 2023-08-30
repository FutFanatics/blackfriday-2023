import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "../components/banner";
import { Section } from "../components/section";

import bannerIntenacional from '../assets/img/banner/banner-internacionais.png';
import bannerNacional from '../assets/img/banner/banner-nacionais.png';
import bannerCasual from '../assets/img/banner/banner-casual.png';
import bannerAcessorios from '../assets/img/banner/banner-acessorios.png';

function Banners() {

    return(
        <Section className='c-banners'>
            <div className='container'>
                <div className='row'>
                    <div className='box-banner col-md-3'>
                        <a>
                        <ImgBanner src={bannerIntenacional}></ImgBanner>
                        </a>
                    </div>
                    <div className='box-banner col-md-3'>
                        <a>
                        <ImgBanner src={bannerNacional}></ImgBanner>
                        </a>
                    </div>
                    <div className='box-banner col-md-3'>
                        <a>
                        <ImgBanner src={bannerCasual}></ImgBanner>
                        </a>
                    </div>
                    <div className='box-banner col-md-3'>
                        <a>
                        <ImgBanner src={bannerAcessorios}></ImgBanner>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
    

}

export default Banners;
