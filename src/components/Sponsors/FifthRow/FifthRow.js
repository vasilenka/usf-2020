import styles from './FifthRow.module.scss'
import React from 'react'
import classnames from 'classnames'

import nekropolis from './nekropolis.png'
import kbj from './kbj.jpg'

const FifthRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={nekropolis}
          className={classnames(styles.logo, styles.nekropolis)}
          alt="Nekropolis logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={kbj}
          className={classnames(styles.logo, styles.kbj)}
          alt="Kedai Buku Jenny logo"
        />
      </div>
    </div>
  )
}

export default FifthRow
