import { useRef } from 'react'
import SidebarLink from '../sidebar-link/SidebarLink'
import s from './Sidebar.module.scss'

interface props {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}


function Sidebar({ isSidebarOpen }: props) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sidebarClass = [
    s['sidebar'],
    isSidebarOpen ? s['open'] : null
  ].join(' ')

  if(sidebarRef.current) {
    // sidebarRef.current.style.width = isSidebarOpen ? '60%' : '0'
    // sidebarRef.current.style.padding = isSidebarOpen ? '5rem 1.5rem 1.5rem 1.5rem' : '0'
  }
  // console.log('sidebar', sidebarRef.current?.style.width);
  

  return (
    <div className={sidebarClass} ref={sidebarRef}>
      <SidebarLink />
    </div>
  )
}

export default Sidebar