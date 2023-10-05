import City from './City';
import { Link } from 'react-router-dom';

function NavBar() {
   return (
      <div className="nav-bar">
         <ul>
            <Link to="/" style={{ textDecoration: 'none' }}>
               <li>Home</li>
            </Link>
            <City />
            <Link to="/page-two" style={{ textDecoration: 'none' }}>
               <li>Search</li>
            </Link>
         </ul>
      </div>
   );
}

export default NavBar;
