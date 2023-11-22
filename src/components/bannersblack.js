import bannerIntenacional from '../img/banner/banner-internacionais.png';
import bannerNacional from '../img/banner/banner-nacionais.png';
import bannerCasual from '../img/banner/banner-casual.png';
import bannerAcessorios from '../img/banner/banner-acessorios.png';
import { ImgBanner } from "./banner";

function BannersBlack() {
  const Desconto10 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/desconto-10.png';
  const Desconto20 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/desconto-20.png';
  const bannerSelecao = 'https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/selecao.png';
  const bannerlicenciados = 'https://beta.futfanatics.com.br/blackfriday-2023/img/banner/bannersblack/licenciados.png';
  return (
    <>
      <div className="box-banner col-md-3">
        <a href='https://www.futfanatics.com.br/clubes-brasileiros
'>
          <ImgBanner src={bannerIntenacional}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a href='https://www.futfanatics.com.br/clubes-internacionais'>
          <ImgBanner src={bannerNacional}></ImgBanner>
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
