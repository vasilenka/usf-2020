import styles from './Header.module.scss'
import React from 'react'
import classnames from 'classnames'

import Logo from '../images/logo'
import Hero from './../images/hero'

import Text from '../Text/Text'
import Button from '../Button/Button'

import Container from './../../layouts/Container/Container'

const Header = ({ className, setDisplay, setViewed, ...restProps }) => {
  return (
    <Container as="section" id="header">
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
            <a
              href="http://bit.ly/usf7jakarta"
              target="_blank"
              style={{
                textDecoration: 'none',
                marginBottom: 12,
                display: 'block',
              }}
              rel="noopener noreferrer">
              <Button primary large className={styles.cta}>
                Join as a Participant
              </Button>
            </a>
            {/* <a
              href="http://bit.ly/usf7volunteer"
              target="_blank"
              style={{ textDecoration: 'none' }}
              rel="noopener noreferrer">
              <Button primary large className={styles.cta}>
                Join as a Volunteer
              </Button>
            </a> */}
            <Button
              default
              large
              onClick={() => {
                setDisplay(true), setViewed(false)
              }}
              className={styles.cta}>
              Postponement Info
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Header
