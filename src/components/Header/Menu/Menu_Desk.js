
import icondown from '../../../img/icon/icon-down.svg';

function Menu_Desk(){
    let bannerLoja = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/loja.png';
            let bannerBrasileiro = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/brasileiro.png';
            let bannerInternacionais = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/internacional.png';
            let bannerSelecoes = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/selecoes.png';
            let bannerFutebol = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/futebol.png';
            let bannerTreino = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/treino.png';
            let bannerEsportes = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/esportes.png';
            let bannerCalcados = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/calcado.png';
            let bannerCasual = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/black/casual.png';
     
            const getBannerForDate = () => {
                const currentDate = new Date();
                const blackFridayDate = new Date('2023-11-27'); 
        
                if (currentDate >= blackFridayDate) {
        
            bannerLoja = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/loja.png';
            bannerBrasileiro = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/brasileiro.png';
            bannerInternacionais = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/internacional.png';
            bannerSelecoes = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/selecoes.png';
            bannerFutebol = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/futebol.png';
            bannerTreino = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/treino.png';
            bannerEsportes = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/esportes.png';
            bannerCalcados = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/calcados.png';
            bannerCasual = 'https://beta.futfanatics.com.br/blackfriday-2023/img/menu/cyber/casual.png';
        }
        
    };
    getBannerForDate();
    
  
    return(
        <div className="container-fluid menu-desk">
            <div className="row">
                <div className="col-12">
                    <nav>
                        <ul className="d-flex justify-content-between align-items-center">
                            <li className="parent">
                                <a href="">Loja <img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Departamentos</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros">Clubes Brasileiros</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais">Clubes Internacionais</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes">Seleções</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol">Futebol</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino">Treino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes">Esportes</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados">Calçados</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual">Casual</a></li>
                                                                
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Destaque</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/novas-convocadas?order=lancamento">Novas Convocadas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/camisas-classNameicas?order=lancamento">Camisas Clássicas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/novas-chuteiras?order=lancamento">Novas Chuteiras</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&variacao=camisa-oficial_sim">Camisas Oficiais</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/camisas-personalizadas">Camisas Personalizadas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-regionais?order=lancamento">Clubes Regionais</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li className="d-none">
                                                            <a className="menu-title" href="">Novidades</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/compre-ganhe-coca-cola">Compre e Ganhe - Coca-Cola</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/compre-ganhe-umbro">Compre e Ganhe - Umbro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/compre-ganhe-under-armour">Compre e Ganhe - Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links mt-0">
                                                            <a href="https://www.futfanatics.com.br/app">App da Fut</a>
                                                            <a href="https://www.futfanatics.com.br/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/app" target="{{ settings.menu_loja_link_target }}">
                                                            <img className='bannermenu' src={ bannerLoja } alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/clubes-brasileiros">Brasileiros <img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/">São Paulo</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/corinthians">Corinthians</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/palmeiras">Palmeiras</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/ponte-preta">Ponte Preta</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/santos">Santos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/sao-paulo">São Paulo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/sao-paulo/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/">Rio de Janeiro</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/botafogo">Botafogo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/flamengo">Flamengo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/fluminense">Fluminense</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/vasco-da-gama">Vasco</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-de-janeiro/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/parana/">Paraná</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/athletico-pr">Athletico-PR</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/coritiba">Coritiba</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/parana/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/">Santa Catarina</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/avai">Avaí</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/chapecoense">Chapecoense</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/figueirense">Figueirense</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/santa-catarina/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/">Rio Grande do Sul</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/gremio">Grêmio</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/internacional">Internacional</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/rio-grande-do-sul/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/">Minas Gerais</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/america-mineiro">América-MG</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/atletico-mineiro">Atlético-MG</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/cruzeiro">Cruzeiro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/minas-gerais/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/">Centro Oeste</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/atletico-goianiense">Atlético-GO</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/goias">Goiás</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/centro-oeste/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/">Nordeste</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/bahia">Bahia</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/ceara">Ceará</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/fortaleza">Fortaleza</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/nautico">Náutico</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/santa-cruz">Santa Cruz</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/sampaio-correa">Sampaio Corrêa</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/sport-recife">Sport Recife</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/vitoria">Vitória</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/nordeste/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros/norte/">Norte</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/clube-do-remo">Remo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/paysandu">Paysandu</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros/norte/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-none">
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros">Indicado para</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_casual">Casual</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=indicado-para_goleiro">Goleiro</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-brasileiros">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/clubes-brasileiros?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/clubes-brasileiros?order=lancamento">Lançamentos</a>
                                                            <a href="https://www.futfanatics.com.br/clubes-brasileiros?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/clubes-brasileiros?loja=311840&categoria=11&range=&variacao=camisa-oficial_sim" target="{{ settings.menu_brasileiros_link_target }}">
                                                            <img className='bannermenu' src={bannerBrasileiro} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/clubes-internacionais">Internacionais <img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-espanhola/">Liga Espanhola</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-espanhola/atletico-de-madrid">Atletico de Madrid</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/barcelona">Barcelona</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/real-madrid">Real Madrid</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=clube-de-futebol_valencia">Valencia</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-espanhola/villarreal">Villarreal</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-espanhola/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-alema/">Liga Alemã</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-alema/bayern-de-munique">Bayern de Munique</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-alema/borussia-dortmund">Borussia Dortmund</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-alema/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/">Liga Inglesa</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/arsenal">Arsenal</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/liverpool">Liverpool</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/manchester-city">Manchester City</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/manchester-united">Manchester United</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/tottenham">Tottenham</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-inglesa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-italiana/">Liga Italiana</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-italiana/juventus">Juventus</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-italiana/milan">Milan</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/liga-italiana?variacao=clube-de-futebol_roma">Roma</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-italiana/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-francesa/">Liga Francesa</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-francesa/olympique-de-marseille">Olympique de Marseille</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-europeus/liga-francesa/paris-saint-germain">Paris Saint-Germain</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus/liga-francesa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-europeus">Clubes Europeus</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/concacaf/">CONCACAF</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais/clubes-sul-americanos/">Sulamericanos</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais">Indicado para</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=indicado-para_casual">Casual</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/clubes-internacionais">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/clubes-internacionais?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/clubes-internacionais?order=lancamento">Lançamentos</a>
                                                            <a href="https://www.futfanatics.com.br/clubes-internacionais?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/loja/busca.php?categoria=523-racing-club" target="{{ settings.menu_internacionais_link_target }}">
                                                        <img className='bannermenu' src={bannerInternacionais} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/selecoes">Seleções <img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes/africa/">África</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=clube-de-futebol_senegal">Senegal</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/africa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes/america-do-sul/">América do Sul</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/argentina">Argentina</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/brasil">Brasil</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/colombia">Colômbia</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/uruguai">Uruguai</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/america-do-sul/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes/asia/">Ásia</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/asia/japao">Japão</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/asia/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes/concacaf/">CONCACAF</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/costa-rica">Costa Rica</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/mexico">México</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/concacaf/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes/europa/">Europa</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/alemanha">Alemanha</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/belgica">Bélgica</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/dinamarca">Dinamarca</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/espanha">Espanha</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/franca">França</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/inglaterra">Inglaterra</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/islandia">Islândia</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/italia">Itália</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/russia">Rússia</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes/europa/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes">Indicado para</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=indicado-para_casual">Casual</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/selecoes">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/selecoes?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/selecoes?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/selecoes?order=lancamento">Lançamentos</a>
                                                            <a href="https://www.futfanatics.com.br/selecoes?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/selecoes?loja=311840&categoria=4&marca=marca_puma&range=" target="{{ settings.menu_selecoes_link_target }}">
                                                        <img className='bannermenu' src={bannerSelecoes} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/futebol">Futebol<img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol/artigos-de-futebol/">Artigos de Futebol</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_caneleira">Caneleira</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_bomba-de-ar">Bomba de ar</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?variacao=tipo-de-produto_luva-de-goleiro">Luva de Goleiro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_porta-chuteira">Porta Chuteira</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol?variacao=tipo-de-produto_joelheira">Joelheira</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?variacao=tipo-de-produto_meiao">Meião</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/artigos-de-futebol/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol/bolas/">Bolas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/acessorios/bolas/campo">Campo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/acessorios/bolas/futsal">Salão</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/acessorios/bolas/society">Society</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/bolas/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol/chuteiras">Chuteiras</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/campo">Campo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/futsal">Salão</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/society">Society</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol/uniformes/">Uniformes</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/calcoes">Calções</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/camisas">Camisas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/coletes">Coletes</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/meioes">Meiões</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/goleiro">Goleiro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/arbitros">Árbitro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/uniformes/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_dal-ponte">Dalponte</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_dray">Dray</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_kappa">Kappa</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_lotto">Lotto</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_oxn">OXN</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_penalty">Penalty</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_placar">Placar</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_poker">Poker</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_puma">Puma</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_super-bolla">Super Bolla</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_three-stars">Three Stars</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_topper">Topper</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?marca=marca_umbro">Umbro</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol">Indicado para</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_jogo">Jogo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_treino">Treino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?variacao=indicado-para_goleiro">Goleiro</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/futebol?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/futebol?order=lancamento">Lançamentos</a>
                                                            <a href="https://www.futfanatics.com.br/loja/busca.php?variacao=camisa-oficial_sim:esporte_futebol">Camisas de Time</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/futebol/chuteiras?loja=311840&categoria=1161&marca=marca_kappa&range=" target="{{ settings.menu_futebol_link_target }}">
                                                        <img className='bannermenu' src={bannerFutebol} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/treino">Treino<img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino/artigos-esportivos">Acessórios</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino/artigos-esportivos?variacao=tipo-de-produto_toalha">Toalha</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_corda">Corda</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_viseira">Viseira</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_luva-academia">Luva</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_extensor-elastico">Extensor de Elástico</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?palavra_busca=bola">Bola</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/loja/busca.php?variacao=tipo-de-produto_mochila_bolsa_mala">Mochilas e Bolsas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_anilha_barra_halter_kettlebell">Pesos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_colchonete_tatame">Colchonete</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=tipo-de-produto_cone-de-agilidade_cone-de-marcacao_suporte-para-cone">Cones</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/artigos-esportivos" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino/roupas">Roupas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/camisetas-e-polos">Camisetas e Polos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/bermudas-e-shorts">Bermudas e Shorts</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/saias-e-leggings">Saias e Leggings</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/regatas-e-tops">Regatas e Tops</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/calcas">Calças</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas/termicos-e-compressao">Térmicos e Compressão</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/roupas" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino/calcados/">Calçados</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino/calcados/caminhada">Para caminhar</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/calcados/corrida">Para correr</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/calcados/academia">Para treinar</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino/calcados/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_asics">Asics</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_fila">Fila</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_kanxa">Kanxa</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_kappa">Kappa</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_live-up">Live up</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_lupo">Lupo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_mizuno">Mizuno</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_olympikus">Olympikus</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_penalty">Penalty</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_poker">Poker</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_puma">Puma</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_reusch">Reusch</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_super-bolla">Super Bolla</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_umbro">Umbro</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?marca=marca_under-armour">Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/treino">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/treino?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/treino?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/treino?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/treino?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=float&marca=marca_fila&range=" target="{{ settings.menu_treino_link_target }}">
                                                        <img className='bannermenu' src={bannerTreino} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/esportes">Esportes<img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/automobilismo/">Automobilismo</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_bone">Bonés</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_tenis">Calçados</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/automobilismo?variacao=tipo-de-produto_jaqueta_moletom">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/automobilismo/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/basquete/">Basquete</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bola">Bolas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bone">Bonés</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Regatas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_agasalho_colete_jaqueta_moletom_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete?variacao=tipo-de-produto_tenis">Tênis</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/basquete/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/beisebol/">Beisebol</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_bermuda_calca">Bermudas e Calças</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/beisebol?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/beisebol/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/natacao/">Natação</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_kit-de-natacao">Kits de Natação</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_maio">Maiôs</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_prancha-de-natacao">Pranchas e Apoio</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_protetor-de-ouvido">Protetores de Ouvido</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_bermuda_sunga">Sungas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao?variacao=tipo-de-produto_touca">Toucas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/natacao/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/futebol-americano/">Futebol Americano</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_bola">Bolas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_bone_gorro">Bonés e Gorros</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_camisa_camiseta">Camisetas e Polos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano?variacao=tipo-de-produto_jaqueta_moletom_agasalho_blusao">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes/futebol-americano/" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/volei/">Vôlei</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/artes-marciais">Artes Marciais</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/ciclismo">Ciclismo</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes?variacao=esporte_handebol">Handebol</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/tenis">Tênis</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/esportes/rugby/">Rugby</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/beach-tennis">Beach Tennis</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/trilha-e-trekking">Trilha e Trekking</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/esportes?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/esportes?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/esportes?order=lancamento">Lançamentos</a>
                                                            <a href="https://www.futfanatics.com.br/futebol">Futebol</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/esportes/automobilismo/" target="{{ settings.menu_esportes_link_target }}">
                                                        <img className='bannermenu' src={bannerEsportes} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/calcados">Calçados<img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/calcados">Indicado para</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/automobilismo">Automobilismo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/tenis-basquete">Basquete</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/caminhada">Caminhada</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/tenis/casual">Casual</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/tenis/corrida">Corrida</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/tenis/fitness-e-musculacao">Fitness e Musculação</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/tennis">Tênis</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/futebol/chuteiras">Chuteira</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/campo">Campo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/futsal">Futsal</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras/society">Society</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/futebol/chuteiras" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/calcados/chinelos-e-sandalias/">Chinelos e Sandálias</a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/calcados/meias/">Meias</a>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/calcados">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_asics">Asics</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_cavalera">Cavalera</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_coca-cola">Coca-Cola</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_converse">Converse</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_everlast">Everlast</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_fila">Fila</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_freeday">Freeday</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_lupo">Lupo</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_mizuno">Mizuno</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_new-balance">New Balance</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_olympikus">Olympikus</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_oakley">Oakley</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_puma">Puma</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_reserva">Reserva</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?marca=marca_under-armour">Under Armour</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/calcados">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/calcados?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/calcados?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/tenis-adidas-ultraboost-light-branco-e-preto" target="{{ settings.menu_calcados_link_target }}">
                                                        <img className='bannermenu' src={bannerCalcados} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="parent">
                                <a href="https://www.futfanatics.com.br/casual">Casual<img src={icondown} className="icon-down-menu"/></a>
                                <div className="child-container">
                                    <div className="container-fluid py-3">
                                        <div className="row">
                                            <div className="col-12 d-flex">
                                                <div className="flex-grow-1 d-flex">
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo">Acessórios</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/casual/bolsas-e-mochilas">Bolsas e Mochilas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/bones-e-gorros">Bonés e Gorros</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/relogios">Relógios</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_bolsa_bone_cueca_gorro_kit-de-cueca_mochila_relogio_mala_pochete_oculos-de-sol_viseira_estojo" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_tenis_meia_chinelo_sandalia">Calçados</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/casual/chinelos-e-sandalias">Chinelos e Sandálias</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/tenis-casual">Tênis Casual</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/calcados/meias/">Meias</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_tenis_meia_chinelo_sandalia" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_agasalho_baby-look_bermuda_blusao_calca_camisa_camiseta_colete_jaqueta_moletom_parka">Roupas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/linha-casual/bermudas-shorts">Bermudas e Shorts</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/calcas">Calças</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/camisetas-e-polos">Camisetas e Polos</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/cuecas">Cuecas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual/jaquetas-e-moletons">Jaquetas e Moletons</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=tipo-de-produto_agasalho_baby-look_bermuda_blusao_calca_camisa_camiseta_colete_jaqueta_moletom_parka" className="see-all">+ Ver todos</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column">
                                                        <li>
                                                            <a className="menu-title" href="">Principais Marcas</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_adidas">Adidas</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_cavalera">Cavalera</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_coca-cola">Coca-Cola</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_ecko">Ecko</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_fatal">Fatal</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_fila">Fila</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_hang-loose">Hang Loose</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_hd">HD</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_new-balance">New Balance</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_nicoboco">Nicoboco</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_new-era">New Era</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_oakley">Oakley</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_o-neill">O'Neill</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_puma">Puma</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_reserva">Reserva</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?marca=marca_volcom">Volcom</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <ul className="column d-flex flex-column">
                                                        <li>
                                                            <a className="menu-title" href="">Gênero</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=genero_masculino">Masculino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=genero_feminino">Feminino</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?variacao=idade_infantil">Infantil</a></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="menu-title" href="">Faixa de preço</a>
                                                            <ul>
                                                                <li><a href="https://www.futfanatics.com.br/casual?min=0.01&max=50">Até R$ 50,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?min=50&max=100">R$ 50,00 a R$ 100,00</a></li>
                                                                <li><a href="https://www.futfanatics.com.br/casual?min=100&max=10000">Acima de R$ 100,00</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="d-flex flex-column align-items-start menu-links">
                                                            <a href="https://www.futfanatics.com.br/casual?order=hot">Ofertas</a>
                                                            <a href="https://www.futfanatics.com.br/casual?order=lancamento">Lançamentos</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="flex-shrink-0 d-none d-lg-block">
                                                    <div className="menu-img">
                                                        <a href="https://www.futfanatics.com.br/loja/busca.php?loja=311840&palavra_busca=klin&marca=marca_klin&range=" target="{{ setclasstings.menu_casual_link_target }}">
                                                        <img className='bannermenu' src={bannerCasual} alt="banner intercionais" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Menu_Desk;
