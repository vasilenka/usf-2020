import styles from './FirstRow.module.scss'
import React from 'react'
import classnames from 'classnames'

import kk from './kk.png'

const FirstRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={kk}
          className={classnames(styles.logo, styles.kotakita)}
          alt="KotaKita logo"
        />
      </div>
    </div>
  )
}

export default FirstRow
