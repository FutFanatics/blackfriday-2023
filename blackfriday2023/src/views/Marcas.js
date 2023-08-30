import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import { TitleMarca } from "../components/Text";
import { NameMarca } from "../components/Text";
import { StyledButton } from "../components/Button";
import { BoxTitle } from "../components/box";
import { BoxMarca } from "../components/box";
import { Section } from "../components/section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import marca from '../assets/img/marcas/marca-teste.png';



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
  return (
    <Section className='c-marcas'>
        <div className='container'>
          <BoxTitle>
            <TitleMarca>
              Marcas
            </TitleMarca>
          </BoxTitle>
          
          <Slider {...marcasSlick}>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Puma</NameMarca>
                </BoxMarca>
              </div>
              <div className='item'>
                <BoxMarca>
                  <img src={marca} className="img-marca lozad" alt="categoria internacional"/>
                  <NameMarca>Adidas</NameMarca>
                </BoxMarca>
              </div>          
              </Slider>
        </div>
    </Section>
    
  );
}

export default Marcas;
