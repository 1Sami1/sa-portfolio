import Nav from './Nav'
import { Link } from 'react-router-dom';
import logo from '../images/Portfolio Logo.png'

function Header() {




    return(
      <header className="site-header">
          <Link to="/"><img className='site-logo' src={logo} /></Link>
          <Nav />
      </header>  
    );

}


export default Header;