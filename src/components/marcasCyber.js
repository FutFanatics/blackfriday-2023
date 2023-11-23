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
    arrows: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3,
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
            src={icons.item27}
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
            src={icons.item28}
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
            src={icons.item29}
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
            src={icons.item30}
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
            src={icons.item31}
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
            src={icons.item32}
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
            src={icons.item33}
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
              src={icons.item46}
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
">
  <img
            src={icons.item34}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>redley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/loja/busca.php?palavra_busca=kenner">
          <img
            src={icons.item35}
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
            src={icons.item36}
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
            src={icons.item37}
            className="img-marca lozad"
            alt="categoria internacional"
          />

</a>
          
          <NameMarca>oakley</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/camisas-classicas?loja=311840&categoria=1879&marca=marca_retromania&range=">
          <img
            src={icons.item38}
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
            src={icons.item39}
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
            src={icons.item40}
            className="img-marca lozad"
            alt="categoria internacional"
          />
</a>
          
          <NameMarca>underarmoUr</NameMarca>
        </BoxMarca>
      </div>
      <div className="item">
        <BoxMarca>
        <a href="https://www.futfanatics.com.br/casual?loja=311840&categoria=1&marca=marca_approve&range="
>
  <img
            src={icons.item41}
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
            src={icons.item42}
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
            src={icons.item43}
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
            src={icons.item44}
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
            src={icons.item45}
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
            src={icons.item47}
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
            src={icons.item48}
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
            src={icons.item49}
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
            src={icons.item50}
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
            src={icons.item51}
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

export default MarcasCyber;
