import "./../assets/css/style.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "./banner";
import { BoxInstall, BoxTitle } from "./box";
import { Section } from "./section";
import { Title } from "./Text";
import { BoxApp } from "./box";

import ImageCelphone from "../img/app/app-img.png";
import Imgapp from "../img/app/app-store.png";
import Imggoogle from "../img/app/google-play.png";

function Install() {
  const [dataAtingida, setDataAtingida] = useState(false);
  const dataDeMudanca = new Date("2023-11-27");

  useEffect(() => {
    const verificarData = () => {
      const dataAtual = new Date();

      if (dataAtual >= dataDeMudanca) {
        setDataAtingida(true);
      }
    };

    verificarData();

    const intervalo = setInterval(verificarData, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Section className="c-Install">
      <div className="container">
        <div className="row justify-content-center container-app">
          <BoxApp className="col-11 col-md-10">
            <div className="row justify-content-between">
              <div className="col-md-3 position-relative">
                <img
                  className="app-install"
                  src={`${
                    dataAtingida
                      ? "https://beta.futfanatics.com.br/blackfriday-2023/img/app/app-cyber.png"
                      : "https://beta.futfanatics.com.br/blackfriday-2023/img/app/app-black.png"
                  }`}
                />
              </div>
              <div className="col-md-7 d-flex flex-column justify-content-center">
                <Title className="d-md-block d-none">
                  Faça a sua torcida com o App da FutFanatics
                </Title>
                <div className="container-install d-flex">
                  <BoxInstall className={` ${dataAtingida ? "cyber" : ""}`}>
                    <a href="https://apps.apple.com/br/app/futfanatics/id1422835821">
                      <img className="image-install" src={Imgapp} />
                    </a>
                  </BoxInstall>
                  <BoxInstall className={` ${dataAtingida ? "cyber" : ""}`}>
                    <a href="https://play.google.com/store/apps/details?id=com.futfanatics">
                      <img className="image-install" src={Imggoogle} />
                    </a>
                  </BoxInstall>
                </div>
              </div>
            </div>
          </BoxApp>
        </div>
      </div>
    </Section>
  );
}

export default Install;
