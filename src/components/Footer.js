import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.footer`
  display: block;
  margin-top: 0;
  z-index: 40;
  position: relative;
  background: rgba(0, 130, 242, 0.7);
  padding-top: 0;
`

export default () => (
  <Footer>
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://twitter.com/ourcity" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/RTCalliance/" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/ourcityrtc/" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="mailto: info@righttothecity.org" className="icon alt fa-envelope">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <div>&copy; {new Date().getFullYear()} Beyond Recovery</div>
    </div>
  </Footer>
)
