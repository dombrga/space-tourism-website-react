import { useRef } from 'react'
import s from './Sidebar.module.scss'

interface props {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const sidebarClass = [s['sidebar']].join(' ')

function Sidebar({ isSidebarOpen }: props) {
  const sidebarRef = useRef<HTMLDivElement>(null)

  if(sidebarRef.current) {
    sidebarRef.current.style.width = isSidebarOpen ? '60%' : '0'
  }
  console.log('sidebar', sidebarRef.current?.style.width);
  

  return (
    <div className={sidebarClass} ref={sidebarRef}>
      asdad
    </div>
  )
}

export default Sidebar