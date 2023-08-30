import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import Marcas from './views/Marcas';
import Banners from './views/banners';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Destaque from './views/Destaque';
import BannerBottom from './views/BannerBottom';
import App from './views/App';
import Descontos from './views/Descontos';
import Home from './views/Home';
import Forms from './views/Forms';
import Footer from './views/Fotter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home></Home>
    <Descontos/>
    <Marcas/>
    <Banners/>
    <Destaque/>
    <BannerBottom/>
    <App/>
    <Forms></Forms>
    <Footer></Footer>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
