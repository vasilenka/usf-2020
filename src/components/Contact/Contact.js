import styles from './Contact.module.scss'
import React from 'react'
import classnames from 'classnames'

import { FaPhone } from 'react-icons/fa'

import Text from '../Text/Text'
import Section from '../Section/Section'
import SectionHeader from '../SectionHeader/SectionHeader'

const Contact = ({ className }) => {
  return (
    <Section id="Contact" className={styles.bleed}>
      <Section narrow className={styles.root}>
        <SectionHeader bleed icon={<FaPhone />} title="Contact us" />
        <div className={styles.row}>
          <div className={styles.email}>
            <Text className={styles.label} component="h3" label highlight>
              Email us at
            </Text>
            <a
              className={classnames(styles.link, styles.email__address)}
              href="mailto:usf.indonesia@gmail.com"
              target="_blank"
              rel="noreferrer noopener">
              <Text large>usf.indonesia@gmail.com</Text>
            </a>
          </div>

          <div className={styles.socmed}>
            <Text className={styles.label} component="h3" label highlight>
              Connect with us on social media
            </Text>
            <a
              className={styles.socmed__account}
              href="http://facebook.com/urban.social.forum"
              target="_blank"
              rel="noopener noreferrer">
              <span className={styles.iconContainer}>
                <i
                  className={classnames(styles.socmed__icon, 'fab fa-facebook')}
                />
              </span>
              <Text large className={styles.link}>
                Urban Social Forum
              </Text>
            </a>
            <a
              className={styles.socmed__account}
              href="http://twitter.com/urban_forum"
              target="_blank"
              rel="noopener noreferrer">
              <span className={styles.iconContainer}>
                <i
                  className={classnames(styles.socmed__icon, 'fab fa-twitter')}
                />
              </span>
              <Text large className={styles.link}>
                @Urban_Forum
              </Text>
            </a>
            <a
              className={styles.socmed__account}
              href="http://instagram.com/urbansocialforum"
              target="_blank"
              rel="noopener noreferrer">
              <span className={styles.iconContainer}>
                <i
                  className={classnames(
                    styles.socmed__icon,
                    'fab fa-instagram'
                  )}
                />
              </span>
              <Text large className={styles.link}>
                @urbansocialforum
              </Text>
            </a>
          </div>
        </div>
      </Section>
    </Section>
  )
}

export default Contact
