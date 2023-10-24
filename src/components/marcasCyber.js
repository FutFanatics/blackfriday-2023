import icons from "./svgmarcas.js"
import "./../assets/css/style.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TitleMarca } from "./Text.js";
import { NameMarca } from "./Text.js";
import { StyledButton } from "./Button.js";
import { BoxTitle } from "./box.js";
import { BoxMarca } from "./box.js";
import { Section } from "./section.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MarcasCyber() {
  const marcasSlick = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...marcasSlick}>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item1}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>Puma</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item2}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>coca-cola</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item3}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>fila</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item4}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>umbro</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item5}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>Braziline</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item6}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>oxn</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item7}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>olympikus</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item8}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>redley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item9}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>kenner</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item10}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>mizuno</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item11}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>oakley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item12}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>retrôMania</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item13}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>nicoboco</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item14}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>underarmoUr</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item15}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>APPROVE</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item16}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>COLCCI</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item17}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>DIVERSÃO</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item18}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>hang loose</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <img
            src={icons.item19}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          <NameMarca>hurley</NameMarca>
        </BoxMarca>
      </div>
    </Slider>
  );
}

export default MarcasCyber;
