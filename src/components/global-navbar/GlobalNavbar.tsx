import { Link } from "react-router-dom";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

import s from "./GlobalNavbar.module.scss";

// interface props {
//   s: string
// }
function GlobalNavBar() {
  const desktopTabletNav = (
    <ul className={s['nav-non-mobile']}>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/destination">Destination</Link>
      </li>
      <li>
        <Link to="/crew">Crew</Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
    </ul>
  );

  const mobileNav = (
    <div className={s['nav-mobile']}>
      <HamburgerMenu />
    </div>
  );

  return (
    <nav>
      { desktopTabletNav }
      { mobileNav }
    </nav>
  );
}

export default GlobalNavBar;
