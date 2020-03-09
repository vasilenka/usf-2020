import styles from './FirstRow.module.scss'
import React from 'react'
import cx from 'classnames'

import kk from './kk.png'

export const LogoContainer = ({ to, src, alt, name }) => {
  return (
    <a
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      title={alt}
      className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </a>
  )
}

const FirstRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer
        to="http://www.kotakita.org"
        src={kk}
        alt="Kota Kita"
        name="kotakita"
      />
    </div>
  )
}

export default FirstRow
