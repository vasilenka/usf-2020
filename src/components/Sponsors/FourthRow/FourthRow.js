import styles from './FourthRow.module.scss'
import React from 'react'
import classnames from 'classnames'

import pg from './peace-generation.jpg'
import spak from './spak.png'
import kapas from './sahabat-kapas.png'
import toss from './toss-lk.png'
import mavc from './mavc.jpg'
import urdc from './urdc.png'

const FourthRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={pg}
          className={classnames(styles.logo, styles.pg)}
          alt="Habitat for humanity logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={spak}
          className={classnames(styles.logo, styles.spak)}
          alt="ITDP logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={kapas}
          className={classnames(styles.logo, styles.kapas)}
          alt="Kopernik logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={toss}
          className={classnames(styles.logo, styles.toss)}
          alt="Salam toss logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={mavc}
          className={classnames(styles.logo, styles.mavc)}
          alt="MAVC logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={urdc}
          className={classnames(styles.logo, styles.urdc)}
          alt="URDC logo"
        />
      </div>
    </div>
  )
}

export default FourthRow
