import styles from './ThirdRow.module.scss'
import React from 'react'
import classnames from 'classnames'

import habitat from './habitat.jpg'
import itdp from './itdp.jpg'
import kopernik from './kopernik.png'
import bareng from './ngebikin-bareng.png'

const ThirdRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={habitat}
          className={classnames(styles.logo, styles.habitat)}
          alt="Habitat for humanity logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={itdp}
          className={classnames(styles.logo, styles.itdp)}
          alt="ITDP logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={kopernik}
          className={classnames(styles.logo, styles.kopernik)}
          alt="Kopernik logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={bareng}
          className={classnames(styles.logo, styles.bareng)}
          alt="Ngebikin Bareng logo"
        />
      </div>
    </div>
  )
}

export default ThirdRow
