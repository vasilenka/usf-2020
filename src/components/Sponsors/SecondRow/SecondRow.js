import styles from './SecondRow.module.scss'
import React from 'react'
import cx from 'classnames'

import lokananta from './lokananta.png'
import muara from './muara.png'
import banjarsari from './rumahbanjarsari.png'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

const SecondRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer
        src={lokananta}
        alt="Lokananta records logo"
        name="lokananta"
      />
      <LogoContainer src={muara} alt="Muara market logo" name="muara" />
      <LogoContainer
        src={banjarsari}
        alt="Rumah banjarsari logo"
        name="banjarsari"
      />
    </div>
  )
}

export default SecondRow
