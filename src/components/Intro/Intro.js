import styles from './Intro.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Text from '../Text/Text'
import Cover from './../images/hero'
import { Facebook, Instagram, Twitter } from './../SocialIcons/SocialIcons'
import Box from '../../layouts/Box/Box'

const Icon = ({ icon, ...restProps }) => {
  return <div className={styles.iconWrapper}>{icon}</div>
}

const Hero = ({ className, ...restProps }) => {
  return (
    <Container className={styles.root}>
      <Cover className={styles.cover} />
      <Text heading1 as="h1" className={styles.header} align="center">
        coming soon
      </Text>
      <Text medium as="p" className={styles.body} align="center">
        In the meantime, let's continue the conversation on our social media
      </Text>
      <Text medium as="p" className={styles.body} align="center">
        Stay in touch
      </Text>
      <Box bleed as="footer">
        <a
          className={styles.socmed}
          href="https://twitter.com/Urban_Forum"
          target="_blank"
          rel="noreferrer noopener">
          <Icon icon={<Twitter className={styles.icon} />} />
        </a>
        <a
          className={styles.socmed}
          href="https://www.facebook.com/UrbanSocialForum/"
          target="_blank"
          rel="noreferrer noopener">
          <Icon icon={<Facebook className={styles.icon} />} />
        </a>
        <a
          className={styles.socmed}
          href="https://www.instagram.com/urbansocialforum/"
          target="_blank"
          rel="noreferrer noopener">
          <Icon icon={<Instagram className={styles.icon} />} />
        </a>
      </Box>
    </Container>
  )
}

export default Hero
