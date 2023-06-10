import './Home.module.scss'
import s from './Home.module.scss'

const homePageClass = [s['home-page']].join(' ')

function HomePage() {
  return (
    <div className={homePageClass}>
      home
    </div>
  );
}

export default HomePage