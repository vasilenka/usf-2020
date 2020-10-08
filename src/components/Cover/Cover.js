import styles from './Cover.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from './../../layouts/Container/Container'
import Text from '../Text/Text'

const Cover = ({ cover, children, className, ...restProps }) => {
  return (
    <Container bleed className={cx(styles.root)} {...restProps}>
      <Container narrow className={cx(styles.wrapper)} {...restProps}>
        {cover &&
          cover.map((c, index) => {
            return index === 0 ? (
              <Text
                key={`cover-text-${index}`}
                as="p"
                className={styles.paragraph}>
                <strong>{c.bold}</strong> {c.text}
              </Text>
            ) : (
              <Text
                key={`cover-text-${index}`}
                as="p"
                className={styles.paragraph}>
                {c}
              </Text>
            )
          })}
      </Container>
    </Container>
  )
}

export default Cover
