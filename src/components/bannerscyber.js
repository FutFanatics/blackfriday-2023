import bannerinternacionalCyber from '../img/banner/internacional-cyber.png';
import bannerNacionalCyber from '../img/banner/nacionais-cyber.png';
import { ImgBanner } from "./banner";

function BannersCyber() {
  const bannerinternacionalCyber = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/internacional.png';
  const bannerNacionalCyber = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/nacional.png';
  const bannerSelecao = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/selecao.png';
  const bannerlicenciados = 'https://blackfriday.futfanatics.com.br/img/banner/bannerscyber/licenciados.png';
  return (
    <>
      <div className="box-banner col-md-3">
      <a href='https://www.futfanatics.com.br/clubes-brasileiros
'>
          <ImgBanner src={bannerNacionalCyber}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
      <a href='https://www.futfanatics.com.br/clubes-internacionais'>
          <ImgBanner src={bannerinternacionalCyber}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
      <a href='https://www.futfanatics.com.br/selecoes'>
          <ImgBanner src={bannerSelecao}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
      <a href='https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_betel&marca=marca_braziline&marca=marca_spr&marca=marca_surf-center&range='>
          <ImgBanner src={bannerlicenciados}></ImgBanner>
        </a>
      </div>
    </>
  );
}
export default BannersCyber;
