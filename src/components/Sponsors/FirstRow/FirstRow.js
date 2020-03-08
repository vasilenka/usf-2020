import styles from './FirstRow.module.scss'
import React from 'react'
import cx from 'classnames'

import kk from './kk.png'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

const FirstRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer src={kk} alt="KotaKita" name="kotakita" />
    </div>
  )
}

export default FirstRow
