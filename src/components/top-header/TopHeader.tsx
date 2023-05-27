import logo from '../../assets/shared/logo.svg'
import GlobalNavbar from '../global-navbar/GlobalNavBar';

function TopHeader() {
  return (
    <header>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <GlobalNavbar />
    </header>
  )
}

export default TopHeader