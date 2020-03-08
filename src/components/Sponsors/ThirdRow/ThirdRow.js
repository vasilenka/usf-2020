import styles from './ThirdRow.module.scss'
import React from 'react'
import cx from 'classnames'

import habitat from './habitat.jpg'
import itdp from './itdp.jpg'
import kopernik from './kopernik.png'
import bareng from './ngebikin-bareng.png'

export const LogoContainer = ({ src, alt, name }) => {
  return (
    <div className={styles.logoContainer}>
      <img src={src} className={cx(styles.logo, styles[name])} alt={alt} />
    </div>
  )
}

const ThirdRow = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <LogoContainer
        src={habitat}
        name="habitat"
        alt="Habitat for humanity logo"
      />
      <LogoContainer src={itdp} name="itdp" alt="ITDP logo" />
      <LogoContainer src={kopernik} name="kopernik" alt="Kopernik logo" />
      <LogoContainer src={bareng} name="bareng" alt="Ngebikin Bareng logo" />
    </div>
  )
}

export default ThirdRow
