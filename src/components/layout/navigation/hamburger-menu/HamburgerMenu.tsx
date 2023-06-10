import hamburger from '@/assets/shared/icon-hamburger.svg'
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

  const sidebarIcon = isSidebarOpen ? 
                        <img className={closeIconClass} src={closeIcon} alt="close icon for closing sidebar" onClick={handleClick} />
                        :
                        <img className={hamburgerClass} src={hamburger} alt="hamburger menu for opening sidebar for navigation" onClick={handleClick} /> 

  return (
    <>
      { sidebarIcon }
    </>
  )
}

export default HamburgerMenu