import React, { useState, useEffect } from 'react';
import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function BannerBottomBlack() {
    const [BannerFull, setBannerFull] = useState('https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/banner-middle_desk.png');
    const [BannerFullMob, setBannerFullMob] = useState('https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/banner-middle_mobile.png');
  
    const bannersbottom = {
      dots: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
          },
        },
      ],
    };
  
    const BannerBottom1 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/trio-bottom_1.png';
    const BannerBottom2 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/trio-bottom_2.png';
    const BannerBottom3 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/trio-bottom_3.png';
  
    useEffect(() => {
      const dataCondicao = new Date('2023-11-10');
      const dataAtual = new Date();
  
      if (
        dataAtual.getTime() >= dataCondicao.getTime()
      ) {
        setBannerFull('https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/banner-middle-prorrogado.png');
        setBannerFullMob('https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/banner-middle_mobile-prorrogado.png');
      }
    }, []); 
  
  return (
    <>
      <div className='box-banner-full'>
      <img className='banner-full d-md-block d-none' src={BannerFull} alt="BannerFull" />
        <img className='banner-full d-md-none' src={BannerFullMob} alt="BannerFullMob" />
      </div>
      <div className='container mt-3'>
        <Slider {...bannersbottom} className='slick-banners_bottom'>
          <div className='item'>
            <a href='https://www.futfanatics.com.br/calcados/corrida/?order=4'>
              <img className='bannersBottom' src={BannerBottom1} alt="BannerBottom1" />
            </a>
          </div>
          <div className='item'>
            <a href='https://www.futfanatics.com.br/calcados/corrida/?order=4
'>
              <img className='bannersBottom' src={BannerBottom2} alt="BannerBottom2" />
            </a>
          </div>
          <div className='item'>
            <a href='https://www.futfanatics.com.br/casual'>
              <img className='bannersBottom' src={BannerBottom3} alt="BannerBottom3" />
            </a>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default BannerBottomBlack;
