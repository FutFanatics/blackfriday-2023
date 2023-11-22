import React, { useState, useEffect } from 'react';
import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BannerHomeTop } from "./banner";
import BannerHome from '../img/home/banner-home.png';

function Home() {
  const [conteudo, setConteudo] = useState({ classe: "" });
  const [dataAtingida, setDataAtingida] = useState(false);
  const dataBlackFriday = new Date('2023-11-22');
  const dataProrrogado = new Date('2023-11-25');
  const dataCyberMonday = new Date('2023-11-27');

  useEffect(() => {
    const verificarData = () => {
      const dataAtual = new Date();

      if (dataAtual >= dataBlackFriday && dataAtual < dataProrrogado) {
        setConteudo({ classe: "black" });
        setDataAtingida(true);
      } else if (dataAtual >= dataProrrogado && dataAtual < dataCyberMonday) {
        setConteudo({ classe: "prorrogado" });
        setDataAtingida(true);
      } else if (dataAtual >= dataCyberMonday) {
        setConteudo({ classe: "cyber" });
        setDataAtingida(true);
      }
    };

    verificarData();

    const intervalo = setInterval(verificarData, 60000);

    return () => clearInterval(intervalo);
  }, []);

  const linkHref = () => {
    switch (conteudo.classe) {
      case "black":
        return "https://www.futfanatics.com.br/black-friday?order=0";
      case "prorrogado":
        return "https://www.futfanatics.com.br/black-friday?order=0";
      case "cyber":
        return "https://www.futfanatics.com.br/cyber-week?order=0";
      default:
        return "https://www.futfanatics.com.br"; 
    }
  };

  return (
    <a className="w-100" href={linkHref()}>
      
    <section className={`c-home ${dataAtingida ? conteudo.classe : ''}`}>
    </section>
    </a>
  );
}

export default Home;
