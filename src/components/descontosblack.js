
import { BoxDesconto } from "./box";

function DescontosBlack() {
  const Desconto10 = 'https://blackfriday.futfanatics.com.br/img/descontos/desconto-10.png';
  const Desconto20 = 'https://blackfriday.futfanatics.com.br/img/descontos/desconto-20.png';
  const Desconto30 = 'https://blackfriday.futfanatics.com.br/img/descontos/desconto-30.png';
  const Desconto40 = 'https://blackfriday.futfanatics.com.br/img/descontos/desconto-40.png';
  return (
    <>
      <div className="col-md-6 d-flex col-left">
        <BoxDesconto>
          <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&range=6.00-31.00">
            <img className="desconto-img" src={Desconto10} />
          </a>
        </BoxDesconto>
        <BoxDesconto>
          <a href="https://www.futfanatics.com.br/loja/busca.php/?loja=311840&range=6.00-61.00">
            <img className="desconto-img" src={Desconto20} />
          </a>
        </BoxDesconto>
      </div>
      <div className="col-md-6 d-flex col-right">
        <BoxDesconto>
          <a href="https://www.futfanatics.com.br/loja/busca.php/?loja=311840&range=6.00-108.00">
            <img className="desconto-img" src={Desconto30} />
          </a> 
        </BoxDesconto>
        <BoxDesconto>
          <a href="https://www.futfanatics.com.br/loja/busca.php/?loja=311840&range=6.00-211.00&order=2
">
            <img className="desconto-img" src={Desconto40} />
          </a>
        </BoxDesconto>
      </div>
    </>
  );
}
export default DescontosBlack;
