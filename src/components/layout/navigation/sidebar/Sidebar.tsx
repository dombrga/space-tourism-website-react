import { useEffect, useRef } from 'react'
import SidebarLink from '../sidebar-link/SidebarLink'
import s from './Sidebar.module.scss'

interface props {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}


function Sidebar({ isSidebarOpen, setIsSidebarOpen }: props) {
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sidebarClass = [
    s['sidebar'],
    isSidebarOpen ? s['open'] : null
  ].join(' ')
  
  useEffect(() => {
    function closeSidebar(e: MouseEvent) {
      const hamburger = document.querySelector('#btn-nav-mobile')
      const hasClickedHamburger = e.target === hamburger || hamburger?.contains(e.target as Node)
      const hasClickedOutsideSidebar = !sidebarRef.current?.contains(e.target as Node)
      
      if(!hasClickedHamburger && hasClickedOutsideSidebar) {
        setIsSidebarOpen(false)
      }
    }

    if(isSidebarOpen) {
      window.addEventListener('click', closeSidebar)
    }
    
    return () => {
      window.removeEventListener('click', closeSidebar)
    }
  }, [isSidebarOpen])

  return (
    <div className={sidebarClass} ref={sidebarRef}>
      <SidebarLink />
    </div>
  )
}

export default Sidebar