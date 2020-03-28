import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Landing
          </Link>
        </li>
      </ul>

      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Contact
          </a>
        </li>

        <li>
          <a href="#" className="button fit">
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
