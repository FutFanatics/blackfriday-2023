import bannerinternacionalCyber from '../img/banner/internacional-cyber.png';
import bannerNacionalCyber from '../img/banner/nacionais-cyber.png';
import bannerCasualCyber from '../img/banner/casual-cyber.png';
import bannerAcessoriosCyber from '../img/banner/acessorios-cyber.png';
import { ImgBanner } from "./banner";

function BannersCyber() {
  return (
    <>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerinternacionalCyber}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerNacionalCyber}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerCasualCyber}></ImgBanner>
        </a>
      </div>
      <div className="box-banner col-md-3">
        <a>
          <ImgBanner src={bannerAcessoriosCyber}></ImgBanner>
        </a>
      </div>
    </>
  );
}
export default BannersCyber;
