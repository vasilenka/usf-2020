import styles from './Surabaya.module.scss'
import React from 'react'
import cx from 'classnames'

import fitra from './fitra-jatim.jpg'
import garda from './garda-pangan.png'
import mti from './mti.png'
import subcyclist from './subcyclist.png'
import tfs from './tfs.png'
import uclg from './uclg.png'
import unipa from './unipa.png'

export const LogoContainer = ({ src, alt, name, container }) => {
  return (
    <div className={cx(styles.logoContainer, styles[container])}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

export const SurabayaOne = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer src={fitra} name="fitra" alt="Fitra Jawa Timur logo" />
      <LogoContainer
        src={mti}
        name="mti"
        alt="Masyarakat Tangguh Indonesia logo"
      />
      <LogoContainer
        src={subcyclist}
        name="subcyclist"
        alt="Subcyclist (Suroboyo Cycling Institute) logo"
      />
      <LogoContainer src={unipa} name="unipa" alt="Unipa Surabaya logo" />
    </div>
  )
}

export const SurabayaTwo = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer
        container="containerTfs"
        src={tfs}
        name="tfs"
        alt="TFS (Transport for Surabaya) logo"
      />
      <LogoContainer
        src={uclg}
        name="uclg"
        alt="UCLG (United Cities and Local Governments) logo"
      />
      <LogoContainer src={garda} name="garda" alt="Garda Pangann logo" />
    </div>
  )
}
