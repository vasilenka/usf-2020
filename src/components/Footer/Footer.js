import styles from './Footer.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'

import FooterImage from './../images/footer'

const Footer = ({ className, ...restProps }) => {
  return (
    <Container as="footer" bleed>
      <FooterImage />
    </Container>
  )
}

export default Footer
