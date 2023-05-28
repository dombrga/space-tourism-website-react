import { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import s from './BodyContent.module.scss'


interface props {
  children: ReactNode
}

const bodyContentClass = [].join(' ')

function BodyContent({ children }: props) {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/home')
    }
  }, [])

  useEffect(() => {
    const root = document.querySelector('#root')
    switch(location.pathname) {
      case '/home':
        root?.setAttribute('class', 'bg-home')
        break
      case '/crew':
        root?.setAttribute('class', 'bg-crew')
        break
      case '/destination':
        root?.setAttribute('class', 'bg-destination')
        break
      case '/technology':
        root?.setAttribute('class', 'bg-technology')
        break
    }
  })

  return <>
    { children }
  </>
}

export default BodyContent