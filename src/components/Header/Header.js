import styles from './Header.module.scss'
import React from 'react'
import classnames from 'classnames'

import Logo from '../images/logo'
import Hero from './../images/hero'

import Text from '../Text/Text'
import Button from '../Button/Button'

import Container from './../../layouts/Container/Container'
import Link from './../Link/Link'

const Header = ({ className, setDisplay, setViewed, ...restProps }) => {
  return (
    <Container as="section" id="Header">
      <Container as="section" bleed className={styles.headerLogo}>
        <Logo
          className={classnames(styles.logo)}
          alt="Urban Social Forum"
          title="Urban Social Forum"
        />
      </Container>
      <div>
        <div className={classnames(styles.card)}>
          <Hero
            className={classnames(styles.cover)}
            alt="Urban social forum (USF) 2020 cover"
            title="Urban social forum (USF) 2020 cover"
          />
          <div className={classnames(styles.text)}>
            <Text className={classnames(styles.description)} normal as="p">
              Since 2013, the Urban Social Forum has been an annual event that
              provides an open and inclusive space for exchanging of knowledge,
              debating ideas, and networking between civil society
              organisations, activists, academics, and students working on
              pressing urban issues. Ultimately, the Forum is a truly public and
              democratic space for people to put forward alternative ideas and
              imagine ‘Another City is Possible!’
            </Text>
            <Link
              to="/online#header"
              style={{
                textDecoration: 'none',
                marginBottom: 12,
                display: 'block',
              }}>
              <Button primary large className={styles.cta}>
                <span className={styles.buttonText}>
                  7<sup>th</sup> Urban Social Forum Online
                </span>
              </Button>
            </Link>
            <Link
              to="/sambang-kota#header"
              style={{
                textDecoration: 'none',
                marginBottom: 12,
                display: 'block',
              }}>
              <Button default large className={styles.cta}>
                <span className={styles.buttonText}>
                  7<sup>th</sup> Urban Social Forum “Sambang Kota”
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Header
