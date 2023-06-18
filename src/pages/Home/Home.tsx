import './Home.module.scss'
import s from './Home.module.scss'

const homePageClass = [s['home-page']].join(' ')
const exploreClass = [s['explore']].join(' ')

function HomePage() {
  return (
    <div className={homePageClass}>
      <div>
        <h5>So, you want to travel to</h5>
        <h1>Space</h1>
        <p className='body-text'>
          testing. Let's face it; if you want to go to space, you might as well genuinely go to outer space and not 
          hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this
          world experience!
        </p>
      </div>
      <div className={exploreClass}>
        Explore
      </div>
    </div>
  );
}

export default HomePage