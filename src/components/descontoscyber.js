import Cyber10 from '../img/descontos/cyber-10.png'
import Cyber20 from '../img/descontos/cyber-20.png'
import Cyber30 from '../img/descontos/cyber-30.png'
import Cyber40 from '../img/descontos/cyber-40.png'
import { BoxDesconto } from './box'

function DescontosCyber() {
  const Cyber10 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/cyber-10.png';
  const Cyber20 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/cyber-20.png';
  const Cyber30 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/cyber-30.png';
  const Cyber40 = 'https://beta.futfanatics.com.br/blackfriday-2023/img/descontos/cyber-40.png';
  return(
    
    <>
    <div className="col-md-6 d-flex col-left">
      <BoxDesconto>
        <a href='https://www.futfanatics.com.br/clubes-brasileiros
'>
          <img className="desconto-img" src={Cyber10} />
        </a>
      </BoxDesconto>
      <BoxDesconto>
        <a href='https://www.futfanatics.com.br/clubes-internacionais'>
          <img className="desconto-img" src={Cyber20} />
        </a>
      </BoxDesconto>
    </div>
    <div className="col-md-6 d-flex col-right">
      <BoxDesconto>
        <a href='https://www.futfanatics.com.br/selecoes'>
          <img className="desconto-img" src={Cyber30} />
        </a>
      </BoxDesconto>
      <BoxDesconto>
        <a href='https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&marca=marca_betel&marca=marca_braziline&marca=marca_spr&marca=marca_surf-center&range=
'>
          <img className="desconto-img" src={Cyber40} />
        </a>
      </BoxDesconto>
    </div>
  </>
  )
  
}
export default DescontosCyber;
