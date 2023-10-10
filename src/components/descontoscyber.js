import Cyber10 from '../img/descontos/cyber-10.png'
import Cyber20 from '../img/descontos/cyber-20.png'
import Cyber30 from '../img/descontos/cyber-30.png'
import Cyber40 from '../img/descontos/cyber-40.png'
import { BoxDesconto } from './box'

function DescontosCyber() {
  return(
    <>
    <div className="col-md-6 d-flex col-left">
      <BoxDesconto>
        <a>
          <img className="desconto-img" src={Cyber10} />
        </a>
      </BoxDesconto>
      <BoxDesconto>
        <a>
          <img className="desconto-img" src={Cyber20} />
        </a>
      </BoxDesconto>
    </div>
    <div className="col-md-6 d-flex col-right">
      <BoxDesconto>
        <a>
          <img className="desconto-img" src={Cyber30} />
        </a>
      </BoxDesconto>
      <BoxDesconto>
        <a>
          <img className="desconto-img" src={Cyber40} />
        </a>
      </BoxDesconto>
    </div>
  </>
  )
  
}
export default DescontosCyber;
