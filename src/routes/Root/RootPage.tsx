import { useEffect } from 'react';
import { Outlet, redirect, useLocation, useNavigate } from 'react-router-dom'
import BodyContent from '../../components/body-content/BodyContent'
import TopHeader from '../../components/top-header/TopHeader';

function RootPage() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname === '/') {
      console.log('redirecting', redirect('/home'));
      
      
      navigate('/home')
    }
  
    // return () => {
    //   second
    // }
  }, [])
  
  console.log('location', location);
  
  return (
    <BodyContent>
      <TopHeader />
      <Outlet />
    </BodyContent>
  )
}

export default RootPage