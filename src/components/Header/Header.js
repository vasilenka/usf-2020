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
          alt="The 7th Urban Social Forum"
          title="The 7th Urban Social Forum"
        />
      </Container>
      <Container as="section" bleed>
        <div className={classnames(styles.card)}>
          <Hero
            className={classnames(styles.cover)}
            alt="Urban social forum (USF) 2020 cover"
            title="Urban social forum (USF) 2020 cover"
          />
          <div className={classnames(styles.text)}>
            <Text className={classnames(styles.subtitle)} heading2 as="h2">
              {/* Jakarta, 18 April 2020 */}
              Jakarta, 2020
            </Text>
            <Text className={classnames(styles.description)} normal as="p">
              The Urban Social Forum is an annual event that provides an open
              and inclusive space for exchanging of knowledge, debating ideas,
              and networking between civil society organisations, activists,
              academics, and students working on pressing urban issues.
              Ultimately, the Forum is a truly public and democratic space for
              people to put forward alternative ideas and imagine ‘Another City
              is Possible!’
            </Text>
            {/* <Text className={classnames(styles.description)} normal as="p">
              We invite you to be a part of the movement.
            </Text> */}
            <Link
              to="/online#header"
              style={{
                textDecoration: 'none',
                marginBottom: 12,
                display: 'block',
              }}>
              <Button primary large className={styles.cta}>
                USF Online
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
                Sambang Kota
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Header
