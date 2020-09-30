import styles from './ThirdRow.module.scss'
import React from 'react'
import cx from 'classnames'

import asumsi from './asumsi.png'
import itdp from './itdp.jpg'
import rame from './rame-jakarta.jpg'
import iap from './iap-jawatengah.png'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

const ThirdRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer src={itdp} name="itdp" alt="ITDP logo" />
      <LogoContainer src={asumsi} name="asumsi" alt="Asumsi logo" />
      <LogoContainer src={rame} name="rame" alt="Rame-Rame Jakarta logo" />
      <LogoContainer src={iap} name="iap" alt="IAP Jawa Tengah logo" />
    </div>
  )
}

export default ThirdRow
