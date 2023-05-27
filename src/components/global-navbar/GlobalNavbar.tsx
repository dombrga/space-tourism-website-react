import { memo } from "react";
import { Link } from "react-router-dom";

function GlobalNavBar() {
  console.log('Link', Link);
    return (
      <nav>
        <Link to='/home'>Home</Link>
        <Link to='/destination'>Destination</Link>
        <Link to='/crew'>Crew</Link>
        <Link to='/technology'>Technology</Link>
      </nav>
    );
}


// export default GlobalNavBar;
export default memo(GlobalNavBar);