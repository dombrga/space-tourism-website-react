import { RouteLink, routeLinkInfo } from "@/constants/routes";
import { Link, NavLink } from "react-router-dom";
import s from "./SingleLink.module.scss";

interface props {
  // link: RouteLink;
  isDesktop: boolean
}

interface RouteStatus {
  isActive: boolean
  isPending: boolean
}

const liClass = [s['li']].join(' ')

const linkClass = ({ isActive, isPending }: {isActive: boolean, isPending: boolean}) => {
  return [
    s["link"],
    isPending ? "pending-link" : isActive ? "active-link" : null,
  ].join(' ')
}


function SingleLink( { isDesktop }: props) {
  const desktopTabletNavLinks = routeLinkInfo.map((routeLink) => (
    <li className={liClass} key={routeLink.name}>
      <NavLink to={routeLink.path} className={linkClass}>
        { isDesktop && <span>{routeLink.order}</span> }
        <span>{routeLink.name}</span>
      </NavLink>
    </li>
  ));

  return (
    <ul>
      { desktopTabletNavLinks }
    </ul>
  );
}

export default SingleLink;
