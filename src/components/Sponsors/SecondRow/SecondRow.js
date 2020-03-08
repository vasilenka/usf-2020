import styles from './SecondRow.module.scss'
import React from 'react'
import classnames from 'classnames'

import lokananta from './lokananta.png'
import muara from './muara.png'
import banjarsari from './rumahbanjarsari.png'

const SecondRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={lokananta}
          className={classnames(styles.logo, styles.lokananta)}
          alt="Lokananta records logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={muara}
          className={classnames(styles.logo, styles.muara)}
          alt="Muara market logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={banjarsari}
          className={classnames(styles.logo, styles.banjarsari)}
          alt="Rumah banjarsari logo"
        />
      </div>
    </div>
  )
}

export default SecondRow
