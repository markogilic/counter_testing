import NavBar from './NavBar';

function Header() {
   return (
      <div className="header-color header" data-testid="header-one">
         <div className="frame">
            <div className="logo">Employees - Api</div>
            <NavBar />
         </div>
      </div>
   );
}

export default Header;
