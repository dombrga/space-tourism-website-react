import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import BodyContent from '../../components/body-content/BodyContent'
import TopHeader from '../../components/top-header/TopHeader';
import s from './RootPage.module.scss'

const mainClass = [s['main']].join(' ')

function RootPage() {
  // console.log('location', location);
  return (
    <BodyContent>
      <TopHeader />
      <main className={mainClass}>
        <Outlet />
      </main>
    </BodyContent>
  )
}

export default RootPage