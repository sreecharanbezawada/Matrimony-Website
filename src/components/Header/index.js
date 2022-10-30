import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3qGfas0kwxcFwJVye_USZ7ujTFvTxo7tlQ&usqp=CAU"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              About
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Sign In
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/001/963/616/original/logout-isolated-icon-symbol-free-vector.jpg"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/products">
            <li className="nav-menu-item-mobile">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/007/407/996/small/user-icon-person-icon-client-symbol-login-head-sign-icon-design-vector.jpg"
                alt="nav products"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/cart">
            <li className="nav-menu-item-mobile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ScMjmn1m8D8xVvRYP4szWKZP6a2nKQEfMA&usqp=CAU"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
