import './../assets/css/style.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ImgBanner } from "../components/banner";
import { BoxInstall, BoxTitle } from "../components/box";
import { Section } from "../components/section";
import { Title } from "../components/Text";
import { BoxApp } from "../components/box";

import ImageCelphone from '../assets/img/app/app-img.png'
import Imgapp from '../assets/img/app/app-store.png'
import Imggoogle from '../assets/img/app/google-play.png'

function App() {
    return(
        <Section className='c-App'>
            <div className='container'>
                <div className='row justify-content-center container-app'>
                    <BoxApp className='col-md-10'>
                        <div className='row justify-content-between'>
                            <div className='col-md-3 position-relative'>
                                <img className='app-install' src={ImageCelphone}/>
                            </div>
                            <div className='col-md-7 d-flex flex-column justify-content-center'>
                                <Title>Faça a sua torcida com o App da FutFanatics</Title>
                                <div className='container-install d-flex mt-4'>
                                    <BoxInstall>
                                        <img className='image-install' src={Imgapp}/>
                                    </BoxInstall>
                                    <BoxInstall>
                                        <img className='image-install' src={Imggoogle}/>
                                    </BoxInstall>
                                </div>
                            </div>
                        </div>
                    </BoxApp>
                </div>
            </div>
        </Section>
    )
}

export default App;