import bannerNacional from '../img/banner/banner-nacionais.png';
import bannerCasual from '../img/banner/banner-casual.png';
import bannerAcessorios from '../img/banner/banner-acessorios.png';
import { ImgBanner } from "./banner";

function BannersBlack() {
  const bannerInternacional = 'https://blackfriday.futfanatics.com.br/img/banner/bannersblack/internacional.png';
  const bannerNacional = 'https://blackfriday.futfanatics.com.br/img/banner/bannersblack/nacional.png';
  const bannerSelecao = 'https://blackfriday.futfanatics.com.br/img/banner/bannersblack/selecao.png';
  const bannerlicenciados = 'https://blackfriday.futfanatics.com.br/img/banner/bannersblack/licenciados.png';
  return (
    <>
      <div className="box-banner col-md-3">
        <a href='https://www.futfanatics.com.br/clubes-brasileiros
'>
          <ImgBanner src={bannerNacional}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a href='https://www.futfanatics.com.br/clubes-internacionais'>
          <ImgBanner src={bannerInternacional}></ImgBanner>
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
export default BannersBlack;
