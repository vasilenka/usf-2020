import styles from './Graphics.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'

import Satu from './1'
import Dua from './2'
import Tiga from './3'
import Empat from './4'
import Lima from './5'
import Enam from './6'
import Tujuh from './7'
import Delapan from './8'

const Graphics = ({ children, className, ...restProps }) => {
  return (
    <Container as="section" bleed className={cx(styles.root)} {...restProps}>
      <div className={styles.imageWrapper}>
        <Satu className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Dua className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Tiga className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Empat className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Lima className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Enam className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Tujuh className={styles.image} />
      </div>
      <div className={styles.imageWrapper}>
        <Delapan className={styles.image} />
      </div>
    </Container>
  )
}

export default Graphics
