import styles from './Solo.module.scss'
import React from 'react'
import cx from 'classnames'

import baku from './baku.jpg'
import urdc from './urdc.jpg'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

export const SoloOne = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer src={baku} name="baku" alt="Baku Dapan logo" />
      <LogoContainer src={urdc} name="urdc" alt="URDC logo" />
    </div>
  )
}
