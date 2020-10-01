import styles from './PageHeader.module.scss'
import React from 'react'
import cx from 'classnames'

import Logo from '../images/logo'

import Container from './../../layouts/Container/Container'
import Text from '../Text/Text'

const PageHeader = ({
  title,
  overview,
  active,
  setActive,
  className,
  ...restProps
}) => {
  return (
    <Container
      bleed
      as="section"
      id="header"
      className={cx(styles.root)}
      {...restProps}>
      <Container as="header" className={styles.langWrapper}>
        <button
          className={cx({
            [styles.lang]: true,
            [styles.active]: active === 'en',
          })}
          onClick={() => setActive('en')}>
          English
        </button>
        <span className={styles.langSeparator}>|</span>
        <button
          className={cx({
            [styles.lang]: true,
            [styles.active]: active === 'id',
          })}
          onClick={() => setActive('id')}>
          Indonesia
        </button>
      </Container>
      <Container className={styles.logoContainer}>
        <Logo
          className={cx(styles.logo)}
          alt="The 7th Urban Social Forum"
          title="The 7th Urban Social Forum"
        />
      </Container>
      <Container bleed as="footer" className={styles.footer}>
        <Text align="center" heading2 as="h1" className={styles.title}>
          {title}
        </Text>
      </Container>
    </Container>
  )
}

export default PageHeader
