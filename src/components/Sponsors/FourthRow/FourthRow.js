import styles from './FourthRow.module.scss'
import React from 'react'
import cx from 'classnames'

import pg from './peace-generation.jpg'
import spak from './spak.png'
import kapas from './sahabat-kapas.png'
import toss from './toss-lk.png'
import mavc from './mavc.jpg'
import urdc from './urdc.png'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

const FourthRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer src={pg} name="pg" alt="Habitat for humanity logo" />
      <LogoContainer src={spak} name="spak" alt="ITDP logo" />
      <LogoContainer src={kapas} name="kapas" alt="Kopernik logo" />
      <LogoContainer src={toss} name="toss" alt="Salam toss logo" />
      <LogoContainer src={mavc} name="mavc" alt="MAVC logo" />
      <LogoContainer src={urdc} name="urdc" alt="URDC logo" />
    </div>
  )
}

export default FourthRow
