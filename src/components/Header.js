import Nav from './Nav'
import { Link } from 'react-router-dom';
import logo from '../images/Portfolio Logo.png'

function Header() {


// REMEMBER TO SWITCH THE WHOLE CSS TO MOBILE-FIRST

    return(
      <header className="site-header">
          <Nav />
      </header>  
    );

}


export default Header;