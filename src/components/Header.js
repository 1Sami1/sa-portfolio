import Nav from './Nav'
import { Link } from 'react-router-dom';

function Header() {




    return(
      <header className="site-header">
          <Link to="/"><h1>Logo IMG</h1></Link>
          <Nav />
      </header>  
    );

}


export default Header;