import logo from '../../assets/shared/logo.svg'
import GlobalNavbar from '../global-navbar/GlobalNavbar';
import s from './TopHeader.module.scss'


const headerClass = [s.header].join(' ')

function TopHeader() {
  console.log('s', s);
  return (
    <header className={headerClass}>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <GlobalNavbar />
    </header>
  )
}

// export default (TopHeader)
export default TopHeader