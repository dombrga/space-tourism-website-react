import hamburgerIcon from '@/assets/shared/icon-hamburger.svg'
import closeIcon from '@/assets/shared/icon-close.svg'
import { useState } from 'react';
import s from './HamburgerMenu.module.scss'

interface props {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const hamburgerClass = [s['hamburger']].join('')
const closeIconClass = [s['close-icon']].join('')

function HamburgerMenu({ isSidebarOpen, setIsSidebarOpen }: props) {

  function handleClick() {
    setIsSidebarOpen(prev => !prev)
  }

  const icon = isSidebarOpen ? closeIcon : hamburgerIcon
  const alt = isSidebarOpen ? 'close icon for closing sidebar' : 'hamburger menu for opening sidebar for navigation'
  const iconClass = isSidebarOpen ? closeIconClass : hamburgerClass

  return (
    <button 
      type='button' 
      id='btn-nav-mobile'
      onClick={handleClick} 
    >
      <img 
        className={iconClass} 
        src={icon} 
        alt={alt}
      />
    </button>
)
}

export default HamburgerMenu