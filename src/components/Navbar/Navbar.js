import styles from './Navbar.module.scss'
import React, { useEffect } from 'react'
import classnames from 'classnames'

import Bar from './bar.inline.svg'
import Close from './close.inline.svg'

import LogoWide from './../images/logo-wide'
import LogoSmall from './../images/logo-small'

import Text from '../Text/Text'

import Container from './../../layouts/Container/Container'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

const NavbarMenu = ({ to, children, ...restProps }) => {
  return (
    <a href={to} className={styles.menu} {...restProps}>
      <Text heading5>{children}</Text>
    </a>
  )
}

const Modal = ({ overlay, setOverlay, closeOverlay }) => {
  useLockBodyScroll()

  return (
    <div
      style={{ display: overlay ? 'flex' : 'none' }}
      className={styles.menuContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <LogoWide />
        </div>
      </div>
      <div className={styles.menus}>
        <NavbarMenu to="#Header" onClick={closeOverlay}>
          Home
        </NavbarMenu>
        <NavbarMenu to="#About" onClick={closeOverlay}>
          About
        </NavbarMenu>
        <NavbarMenu to="#Location" onClick={closeOverlay}>
          Location
        </NavbarMenu>
        <NavbarMenu to="#Archive" onClick={closeOverlay}>
          Archive
        </NavbarMenu>
        <NavbarMenu to="#Partners" onClick={closeOverlay}>
          {/* Organizers &amp; Partners */}
          Organizers
        </NavbarMenu>
        <NavbarMenu to="#Contact" onClick={closeOverlay}>
          Contact Us
        </NavbarMenu>
      </div>
      <div className={styles.buttonContainer}>
        <Close className={styles.closeButton} onClick={closeOverlay} />
      </div>
    </div>
  )
}

const Navbar = ({}) => {
  let [overlay, setOverlay] = React.useState(false)

  const closeOverlay = () => {
    setOverlay(false)
  }

  const openOverlay = () => {
    setOverlay(true)
  }

  useEffect(() => {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.top = '0'
      } else {
        document.getElementById('navbar').style.top = '-96px'
      }
      prevScrollpos = currentScrollPos
    }
  }, [])

  return (
    <Container
      id="navbar"
      bleed
      as="header"
      className={classnames(styles.root)}>
      <Container as="nav" className={classnames(styles.container)}>
        <NavbarMenu to="#Header">
          <div className={styles.logoDesktop}>
            <LogoSmall />
          </div>
        </NavbarMenu>
        <div>
          <NavbarMenu to="#About">About</NavbarMenu>
          <NavbarMenu to="#Location">Location</NavbarMenu>
          <NavbarMenu to="#Archive">Archive</NavbarMenu>
          {/* <NavbarMenu to="#Partners">Organizers &amp; Partners</NavbarMenu> */}
          <NavbarMenu to="#Partners">Organizers</NavbarMenu>
          <NavbarMenu to="#Contact">Contact Us</NavbarMenu>
        </div>
      </Container>
      <nav className={classnames(styles.smallerContainer)}>
        <Container as="nav" className={styles.menuSmaller}>
          <a href="#Header" className={styles.logoMobile}>
            <LogoSmall />
          </a>
          <Bar onClick={openOverlay} />
        </Container>
        {overlay && (
          <Modal
            overlay={overlay}
            setOverlay={setOverlay}
            closeOverlay={closeOverlay}
          />
        )}
      </nav>
    </Container>
  )
}

export default Navbar
