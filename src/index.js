import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

// Components
import App from "../src/Components/App";
import Header from "./Components/Header/Header";
import Marcas from "./Components/Marcas";
import Footer from "./Components/Footer";
import BannersBottom from "./Components/banners_bottom";
//import Testeira from './Components/Testeira';
// STYLE
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VitrineTop from "./Components/VitrineTop";
import VitrineMiddle from "./Components/VitrineMiddle";
import Descontos from "./Components/Descontos";
import Banners from "./Components/banners";
import Destaque from "./Components/Destaque";
import Install from "./Components/Install";
import Forms from "./Components/Forms";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <App />
    <Descontos></Descontos>
    <Marcas />
    <Banners></Banners>
    <VitrineMiddle />
    <Destaque />
    <BannersBottom />
    <Install></Install>
    <Forms></Forms>
    <Footer />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
