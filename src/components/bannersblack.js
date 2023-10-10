import bannerIntenacional from '../img/banner/banner-internacionais.png';
import bannerNacional from '../img/banner/banner-nacionais.png';
import bannerCasual from '../img/banner/banner-casual.png';
import bannerAcessorios from '../img/banner/banner-acessorios.png';
import { ImgBanner } from "./banner";

function BannersBlack() {
  return (
    <>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerIntenacional}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerNacional}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerCasual}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerAcessorios}></ImgBanner>
        </a>
      </div>
    </>
  );
}
export default BannersBlack;
