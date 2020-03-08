import styles from './Join.module.scss'
import React from 'react'

import Section from '../Section/Section'
import Button from '../Button/Button'
import Text from '../Text/Text'

const Join = ({ className, ...restProps }) => {
  return (
    <div className={styles.container}>
      <Section narrow className={styles.componentContainer}></Section>
      {/* <img className={styles.artwork} src={artwork} alt="People with disability"/> */}
    </div>
  )
}

export default Join
