import styles from './Default.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

import './Default.module.scss'
import SEO from './../../utils/seo'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Layout = ({ children }) => (
  <main className={styles.root}>
    <SEO />
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
