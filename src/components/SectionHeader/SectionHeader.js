import styles from './SectionHeader.module.scss'
import React from 'react'
import classnames from 'classnames'

import Text from '../Text/Text'

const SectionHeader = ({
  bleed,
  full,
  narrow,
  icon,
  className,
  title,
  subtitle,
  center,
  ...restProps
}) => {
  return (
    <header
      className={classnames({
        [styles.root]: true,
        [styles.narrow]: narrow,
        [styles.bleed]: bleed,
        [styles.full]: full,
        [styles.center]: center,
        [className]: className,
      })}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <div className={styles.titleContainer}>
        <Text
          className={classnames(styles.title)}
          heading2
          as="h2"
          {...restProps}>
          {title}
        </Text>
        {subtitle && (
          <Text className={classnames(styles.subtitle)} normal>
            {subtitle}
          </Text>
        )}
      </div>
    </header>
  )
}

export default SectionHeader
