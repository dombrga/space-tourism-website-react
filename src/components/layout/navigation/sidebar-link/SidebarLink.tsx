import { routeLinkInfo } from '@/constants';
import { NavLink } from 'react-router-dom';
import s from './SidebarLink.module.scss'

const liClass = [s['li']].join(' ')
const linkClass = ({ isActive, isPending }: {isActive: boolean, isPending: boolean}) => {
  return [
    s["link"],
    isPending ? "pending-link" : isActive ? "active-link-sidebar" : null,
  ].join(' ')
}

function SidebarLink() {
  const desktopTabletNavLinks = routeLinkInfo.map((routeLink) => (
    <li className={liClass} key={routeLink.name}>
      <NavLink to={routeLink.path} className={linkClass} aria-label={`link to ${routeLink.name} page`}>
        <span>{ routeLink.order }</span>   {routeLink.name}
      </NavLink>
    </li>
  ));

  
  return (
    <ul>
      { desktopTabletNavLinks }
    </ul>
  )
}

export default SidebarLink