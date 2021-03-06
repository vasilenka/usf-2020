import styles from './Makasar.module.scss'
import React from 'react'
import cx from 'classnames'

import himahi from './himahi.png'
import kotata from './kotata.png'
import sekolahi from './sekolahi.jpeg'
import kbj from './kbj.jpg'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

export const MakasarOne = ({ sambang, className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer
        src={himahi}
        name="himahi"
        alt="Himpunan Mahasiswa Hubungan International FISIP UNHAS logo"
      />
      <LogoContainer src={kotata} name="kotata" alt="Kotata logo" />
      <LogoContainer src={sekolahi} name="sekolahi" alt="Sekolahi logo" />
      {sambang && (
        <LogoContainer src={kbj} name="kbj" alt="Kedai Buku Jenny logo" />
      )}
    </div>
  )
}
