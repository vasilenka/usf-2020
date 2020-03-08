import styles from './Navbar.module.scss'
import React, { Component } from 'react'
import classnames from 'classnames'

import logo from './logo.png'
import Bar from './bar.inline.svg'
import Close from './close.inline.svg'

import Text from '../Text/Text'

import Container from './../../layouts/Container/Container'

const NavbarMenu = ({ to, children, ...restProps }) => {
  return (
    <a href={to} className={styles.menu} {...restProps}>
      <Text heading5>{children}</Text>
    </a>
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

  return (
    <Container bleed as="header" className={classnames(styles.root)}>
      <Container narrow as="nav" className={classnames(styles.container)}>
        <NavbarMenu to="#Header">USF 2020</NavbarMenu>
        <NavbarMenu to="#About">About</NavbarMenu>
        <NavbarMenu to="#Location">Location</NavbarMenu>
        <NavbarMenu to="#Archive">Archive</NavbarMenu>
        <NavbarMenu to="#Partners">Organizers &amp; Partners</NavbarMenu>
        <NavbarMenu to="#Contact">Contact Us</NavbarMenu>
      </Container>
      <nav className={classnames(styles.smallerContainer)}>
        <div className={styles.menuSmaller}>
          <Text className={styles.smallMenuText}>USF 2020</Text>
          <Bar onClick={openOverlay} />
        </div>
        <div
          style={{ display: overlay ? 'flex' : 'none' }}
          className={styles.menuContainer}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={logo}
              alt="Urban Social Forum 2020"
            />
          </div>
          <div className={styles.menus}>
            <NavbarMenu to="#Header" onClick={closeOverlay}>
              USF 2020
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
              Organizers &amp; Partners
            </NavbarMenu>
            <NavbarMenu to="#Contact" onClick={closeOverlay}>
              Contact Us
            </NavbarMenu>
          </div>
          <div className={styles.buttonContainer}>
            <Close className={styles.closeButton} onClick={closeOverlay} />
          </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar
