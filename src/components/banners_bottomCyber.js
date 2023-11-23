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

import BannerFull from '../img/banner/banner-full.png'
import BannerFullMob from '../img/banner/bannersmob/banner-bottom.png'
import BannerBottom1 from '../img/banner/bannerbottom1.png'
import BannerBottom2 from '../img/banner/bannerbottom2.png'
import BannerBottom3 from '../img/banner/bannerbottom3.png'

function BannerBottomCyber() {
    const bannersbottom={
        dots:true,
        arrows:false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
          {
              breakpoint: 600,
              settings : {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows:false,
              }
            },
        ]
    }
    const BannerFull = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/banner-middle-desk.png';
  const BannerFullMob = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/banner-middle_mobile.png';
  const BannerBottom1 = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/trio-bottom_cyber.png';
  const BannerBottom2 = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/trio-bottom_cyber2.png';
  const BannerBottom3 = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/trio-bottom_cyber3.png';

        return(
            <>
                <div className='box-banner-full'>
                    <a href='https://www.futfanatics.com.br/esportes/automobilismo/?order=4'>
                     <img className='banner-full d-md-block d-none' src={BannerFull}/>
                    <img className='banner-full d-md-none' src={BannerFullMob}/>   
                    </a>
                    
                </div>
                <div className='container mt-3'>
                    <Slider {...bannersbottom} className='slick-banners_bottom'>
                        <div className='item'>
                            <a href='https://www.futfanatics.com.br/esportes/basquete?order=0'>
                                <img className='bannersBottom' src={BannerBottom1}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href='https://www.futfanatics.com.br/esportes/beisebol?order=0
'>
                                <img className='bannersBottom' src={BannerBottom2}/>
                            </a>
                        </div>
                        <div className='item'>
                            <a href='https://www.futfanatics.com.br/esportes/natacao?order=0'>
                                <img className='bannersBottom' src={BannerBottom3}/>
                            </a>
                        </div>
                    </Slider>
                </div>
          
            </>
        )
}

export default BannerBottomCyber;