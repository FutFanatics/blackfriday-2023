import Desconto10 from "../img/descontos/Desconto-10.png";
import Desconto20 from "../img/descontos/Desconto-20.png";
import Desconto30 from "../img/descontos/Desconto-30.png";
import Desconto40 from "../img/descontos/Desconto-40.png";
import { BoxDesconto } from "./box";

function DescontosBlack() {
  return (
    <>
      <div className="col-md-6 d-flex col-left">
        <BoxDesconto>
          <a>
            <img className="desconto-img" src={Desconto10} />
          </a>
        </BoxDesconto>
        <BoxDesconto>
          <a>
            <img className="desconto-img" src={Desconto20} />
          </a>
        </BoxDesconto>
      </div>
      <div className="col-md-6 d-flex col-right">
        <BoxDesconto>
          <a>
            <img className="desconto-img" src={Desconto30} />
          </a>
        </BoxDesconto>
        <BoxDesconto>
          <a>
            <img className="desconto-img" src={Desconto40} />
          </a>
        </BoxDesconto>
      </div>
    </>
  );
}
export default DescontosBlack;
