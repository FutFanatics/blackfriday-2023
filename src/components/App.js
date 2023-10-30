import './../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BannerHomeTop } from "./banner";
import BannerHome from '../img/home/banner-home.png'
import React, { useState, useEffect } from 'react';

function Home() {
  const [conteudo, setConteudo] = useState({ BannerHome });
  const [dataAtingida, setDataAtingida] = useState(false);
  const dataDeMudanca = new Date('2023-10-15');

  useEffect(() => {
    const verificarData = () => {
      const dataAtual = new Date();

      if (dataAtual >= dataDeMudanca) {
        setConteudo(); 
        setDataAtingida(true); 
      }
    };

    verificarData();

    const intervalo = setInterval(verificarData, 60000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className={`c-home ${dataAtingida ? 'cyber' : ''}`}>
    </section>
  );
}

export default Home;