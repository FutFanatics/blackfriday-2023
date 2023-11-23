import icons from "./svgmarcas.js"
import "./../assets/css/style.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TitleMarca } from "./Text";
import { NameMarca } from "./Text";
import { StyledButton } from "./Button";
import { BoxTitle } from "./box";
import { BoxMarca } from "./box";
import { Section } from "./section";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MarcasBlack() {
  const marcasSlick = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Slider {...marcasSlick}>
      <div className="item" >
        <BoxMarca>
          <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=puma&order=0">
            <img
            src={icons.item1}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          </a>
          
          <NameMarca>Puma</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1&marca=marca_coca-cola">
          <img
            src={icons.item2}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>coca-cola</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/treino?loja=311840&categoria=2&marca=marca_fila&range=">
          <img
            src={icons.item3}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>fila</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1051&marca=marca_umbro
        ">
          <img
            src={icons.item4}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>umbro</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_braziline&range=">
          <img
            src={icons.item5}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>Braziline</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=1051&marca=marca_oxn">
          <img
            src={icons.item6}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>oxn</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/catalogo.php?loja=311840&categoria=2&marca=marca_olympikus">
          <img
            src={icons.item7}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          <NameMarca>olympikus</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=new%20era">
          <img
            src={icons.item20}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>New Era</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=redley
"><img
            src={icons.item8}
            className="img-marca lozad"
            alt="categoria internacional"
          /></a>
          
          <NameMarca>redley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=kenner">
          <img
            src={icons.item9}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>kenner</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=mizuno">
          <img
            src={icons.item10}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>mizuno</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=oakley
"><img
            src={icons.item11}
            className="img-marca lozad"
            alt="categoria internacional"
          /></a>
          
          <NameMarca>oakley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/camisas-classicas?loja=311840&categoria=1879&marca=marca_retromania&range=">
          <img
            src={icons.item12}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          </a>
          
          <NameMarca>retrôMania</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=nicoboco">
         <img
            src={icons.item13}
            className="img-marca lozad"
            alt="categoria internacional"
          /> 
        </a>
          
          <NameMarca>nicoboco</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=under&marca=marca_under-armour&range=
">
  <img
            src={icons.item14}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>under armoUr</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_approve&range="
>
  <img
            src={icons.item15}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>APPROVE</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_colcci&range=">
          <img
            src={icons.item16}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>COLCCI</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_diversao&range=">
          <img
            src={icons.item17}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>DIVERSÃO</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=hang-loose">
          <img
            src={icons.item18}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
        <NameMarca>hang loose</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=hurley
">
  <img
            src={icons.item19}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>hurley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_surf-center&range=
">
  <img
            src={icons.item23}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>surf center</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_betel&range=">
          <img
            src={icons.item22}
            className="img-marca lozad"
            alt="categoria internacional"
          />
        </a>
          
          <NameMarca>betel</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=kappa">
            <img
            src={icons.item24}
            className="img-marca lozad"
            alt="categoria internacional"
          />
          </a>
          
          <NameMarca>kappa</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=reebok">
           <img
            src={icons.item25}
            className="img-marca lozad"
            alt="categoria internacional"
          /> 
          </a>
          
          <NameMarca>Reebok</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
          <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=klin&marca=marca_klin&range=&order=1">
           <img
            src={icons.item26}
            className="img-marca lozad"
            alt="categoria internacional"
          /> 
          </a>
          
          <NameMarca>klin</NameMarca>
        </BoxMarca>
      </div>
    </Slider>
  );
}

export default MarcasBlack;
