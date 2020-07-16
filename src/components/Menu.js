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
          <Link onClick={props.onToggleMenu} to="/press">
            Press
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/donate">
            Donate
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/take-action">
            Take Action
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/training">
            Training
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYUyCzVw4RQ-HIvY1fhZbsE3u1TXOf2YxRrJxzakNpeAaysA/viewform"
            className="button fit">
            Join Us
          </a>
        </li>
      </ul>
    </div>

    <Link className="close" onClick={props.onToggleMenu}>
      Close
    </Link>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
