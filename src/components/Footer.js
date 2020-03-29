import React from 'react'
import motion from 'framer-motion'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

const Footer = styled.footer`
  z-index: 40;
  position: relative;
  background: rgba(0, 130, 242, 0.7);
`

export default () => (
  <Footer>
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>

            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>

        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">information@untitled.tld</a>
            </div>
          </section>

          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>

          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                1234 Somewhere Road #5432
                <br />
                Nashville, TN 00000
                <br />
                United States of America
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>

    <div className="inner">
      <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <div>Beyond Recovery &copy; {new Date().getFullYear()}</div>
    </div>
  </Footer>
)
