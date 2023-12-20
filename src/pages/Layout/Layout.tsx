import { Link, Outlet } from "react-router-dom";
import layoutCss from './layout.module.css';

const Layout = () => (
  <>
    <nav className={layoutCss.layout}>
      <ul>
        <li>
          <Link to="/">Par Projektu</Link>
        </li>
        <li>
          <Link to="/films">Filmas</Link>
        </li>
        <li>
          <Link to="/about_author">Par autoru</Link>
        </li>  
      </ul>
    </nav>
    
    <div className={layoutCss.page_data}>
      <Outlet />
    </div>
  </>
);

export default Layout