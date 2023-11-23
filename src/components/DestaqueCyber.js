import "./../assets/css/style.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxTitle } from "./box";
import { Section } from "./section";
import { TitleMarca } from "./Text";

import Imagemteste from "../img/banner/destaque-banner.png";

function DestaqueCyber() {
  const DestaqueSlick = {
    dots: false,
    arrows: true,
    infinite:true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  const Aprrove = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/approve.png';
  const Betel = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/betel.png';
  const Braziline = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/braziline.png';
  const Coca = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/coca-cola.png';
  const colcci = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/colcci.png';
  const Diversao = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/diversao.png';
  const Fila = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/fila.png';
  const Hang = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/hang loose.png';
  const Hurley = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/hurley.png';
  const Kenner = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/kenner.png';
  const Mizuno= 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/mizuno.png';
  const Nicoboco= 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/nicoboco.png';
  const Oakley = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/oakley.png';
  const Olympikus = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/olympikus.png';
  const Oxn= 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/oxn.png';
  const Puma = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/puma.png';
  const Redley = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/redley.png';
  const Retromania = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/retro-mania.png';
  const SurfCenter = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/surf-center.png';
  const Umbro = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/umbro.png';
  const UnderArmour = 'https://blackfriday.futfanatics.com.br/img/destaque/destaque-cyber/under-armour.png';

  return (
    <Slider {...DestaqueSlick} className="slick-destaque">
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=puma&order=0">
        <ImgBanner src={Puma} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1&marca=marca_coca-cola">
        <ImgBanner src={Coca} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_approve&range="
>
        <ImgBanner src={Aprrove} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_betel&range=">
        <ImgBanner src={Betel} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_braziline&range=">
        <ImgBanner src={Braziline} />
      </a>
    </div>
    
    <div className="item">
      <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_colcci&range=">
        <ImgBanner src={colcci} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_diversao&range=">
        <ImgBanner src={Diversao} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/treino?loja=311840&categoria=2&marca=marca_fila&range=">
        <ImgBanner src={Fila} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=hang-loose">
        <ImgBanner src={Hang} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=hurley
">
        <ImgBanner src={Hurley} />
      </a>
    </div>
    <div className="item">
    <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=kenner">
        <ImgBanner src={Kenner} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=under&marca=marca_under-armour&range=
">
        <ImgBanner src={UnderArmour} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=redley
">
        <ImgBanner src={Redley} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/camisas-classicas?loja=311840&categoria=1879&marca=marca_retromania&range=">
        <ImgBanner src={Retromania} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_surf-center&range=
">
        <ImgBanner src={SurfCenter} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1051&marca=marca_umbro
">
        <ImgBanner src={Umbro} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=mizuno">
        <ImgBanner src={Mizuno} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=nicoboco">
        <ImgBanner src={Nicoboco} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=oakley
">
        <ImgBanner src={Oakley} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=2&marca=marca_olympikus">
        <ImgBanner src={Olympikus} />
      </a>
    </div>
    <div className="item">
      <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1051&marca=marca_oxn">
        <ImgBanner src={Oxn} />
      </a>
    </div>
  </Slider>
  );
}

export default DestaqueCyber;
