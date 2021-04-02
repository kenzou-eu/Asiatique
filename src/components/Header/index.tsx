import react from 'react';
import logo from '../../assets/images/logo.svg'
import { HeaderComponents } from './styles';
function Header() {
  return(
    <HeaderComponents>
      <img src={logo} alt="Projeto Asiatique"/>  
      <h1>lista de instituições.</h1>
      <h2>(com as quais você pode contribuir para participar do nosso projeto!)</h2>
    </HeaderComponents>
  )
}

export default Header;