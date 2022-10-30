import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Matrimony</h1>
        <img
          src="https://www.thewedcafe.com/wp-content/uploads/2020/08/1DX_7608.jpg"
          alt="clothes to be noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Welcome to Lucky matrimony.ccb.tech! We are a leading Indian
          matrimonial match making service provide. Our experienced and highly
          dedicated team is committed to provide 360 degree solutions to all
          prospective Indian brides and grooms. we are a technology driven
          company providing the best platform to those who are prefect looking
          for their soul mate
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            SignUp
          </button>
        </Link>
      </div>
      <img
        src="https://img2.sangam.com/assets/home/HomePage_Bengali.jpg"
        alt="dresses to be noticed"
        className="home-desktop-img"
      />
    </div>
  </>
)

export default Home
