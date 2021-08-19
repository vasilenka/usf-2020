import styles from './Contact.module.scss'
import React from 'react'
import classnames from 'classnames'

import { FaPhone } from 'react-icons/fa'
import { Facebook, Instagram, Twitter } from './../SocialIcons/SocialIcons'

import Text from '../Text/Text'
import SectionHeader from '../SectionHeader/SectionHeader'

import Container from './../../layouts/Container/Container'

export const Icon = ({ icon, ...restProps }) => {
  return <div className={styles.iconWrapper}>{icon}</div>
}

const Contact = ({ className }) => {
  return (
    <Container bleed id="Contact" className={styles.root}>
      <Container narrow className={styles.card}>
        <SectionHeader
          icon={<FaPhone />}
          className={styles.header}
          bleed
          title="Contact us"
        />
        <div className={styles.row}>
          <div className={styles.email}>
            <Text className={styles.label} heading5>
              For more information, please email us at:{' '}
            </Text>
            <a
              className={classnames(styles.link)}
              href="mailto:usf.indonesia@gmail.com"
              target="_blank"
              rel="noreferrer noopener">
              usf.indonesia@gmail.com
            </a>
          </div>

          <div className={styles.socmedWrapper}>
            <a
              className={styles.socmed}
              href="https://twitter.com/UrbanSocForum"
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
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default Contact
