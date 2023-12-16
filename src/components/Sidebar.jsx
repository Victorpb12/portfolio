import SocialNetworksContainer from './SocialNetworksContainer';
import InformationContainer from './InformationContainer';

import Imagem from '../img/foto.jpg';
import Curriculo from '../img/curriculo.pdf';

import "../styles/components/sidebar.sass";

const sidebar = () => {
    return (
    <aside id="sidebar">
            <img src={Imagem} alt='Victor'/>
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworksContainer />
            <InformationContainer/>
            <a href={Curriculo} download="Curriculo" className="btn"> 
                Download currículo
            </a>
    </aside>
    );
};

export default sidebar