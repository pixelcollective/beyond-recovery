import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/demands">
            Demands
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/festival">
            #CancelRent Festival
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/debt-free-future">
            Debt Free Future
          </Link>
        </li>
      </ul>

      <ul className="actions vertical">
        <li>
          <Link onClick={props.onToggleMenu} to="/about" className="button special fit">
            About
          </Link>
        </li>

        <li>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdbGN61jHfXPEzE7G5Cw2Jb6a1T1XHFufYTuXniaw5eVos2Nw/viewform"
            className="button fit">
            Take Action
          </a>
        </li>
      </ul>
    </div>

    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
