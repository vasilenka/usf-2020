import styles from './Default.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

import './Default.module.scss'
import SEO from './../../utils/seo'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Default = ({ children }) => (
  <>
    <SEO />
    <main className={styles.root}>{children}</main>
  </>
)

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
