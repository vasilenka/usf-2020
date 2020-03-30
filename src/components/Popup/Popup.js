import styles from './Popup.module.scss'
import React, { useEffect, useRef } from 'react'
import cx from 'classnames'

import CloseIcon from '../../assets/svg/close.inline.svg'
import { Facebook, Instagram, Twitter } from './../SocialIcons/SocialIcons'

import Postponed from './../images/postponed'

import Dialog from './../Dialog/Dialog'
import Text from '../Text/Text'
import Container from '../../layouts/Container/Container'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'

export const Icon = ({ icon, ...restProps }) => {
  return <div className={styles.socmedIconWrapper}>{icon}</div>
}

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log('You clicked outside of me!')
        cb()
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const Popup = ({
  children,
  setViewed,
  setDisplay,
  viewed,
  display,
  className,
  ...restProps
}) => {
  useLockBodyScroll()

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, () => setDisplay(false))

  return (
    <Dialog dark>
      <Container narrow as="section" className={styles.wrapper}>
        <div className={styles.iconWrapper} onClick={() => setDisplay(false)}>
          <CloseIcon className={styles.icon} />
        </div>
        <div ref={wrapperRef} className={cx(styles.root)} {...restProps}>
          <header className={styles.header}>
            <Text heading1 as="h1">
              Urban Social Forum 7 Postponement
            </Text>
          </header>
          <main className={styles.content}>
            <aside className={styles.imageContainer}>
              <Postponed className={styles.image} />
            </aside>
            <article className={styles.textContainer}>
              <Text medium as="p" style={{ marginBottom: 12 }}>
                Following the government's direction to help prevent the spread
                of the COVID-19 outbreak by reducing gathering activities
                involving masses, we are postponing the Urban Social Forum 7
                which was originally to be held on April 18, 2020, at the
                National Museum of Indonesia, until further notice. We support
                'social distancing' efforts until the situation returns
                conducive, since our safety and health are all priorities.
              </Text>
              <Text medium as="p" style={{ marginBottom: 12 }}>
                Since its inception in 2013, the Urban Social Forum (USF) has
                created a public, open, and inclusive space for citizens to put
                forward alternative ideas and imagine ‘Another City is
                Possible!’ and has invited social activists and urban
                practitioners from all over Indonesia. We remain committed to
                organize this year's forum in the near future.
              </Text>
              <Text medium as="p" style={{ marginBottom: 24 }}>
                Please stay in touch with us here to know about the updates!
              </Text>
              <div className={styles.row}>
                <a
                  className={cx(styles.link)}
                  href="mailto:usf.indonesia@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener">
                  usf.indonesia@gmail.com
                </a>

                <div className={styles.socmedWrapper}>
                  <a
                    className={styles.socmed}
                    href="https://twitter.com/Urban_Forum"
                    target="_blank"
                    rel="noreferrer noopener">
                    <Icon icon={<Twitter className={styles.socmedIcon} />} />
                  </a>
                  <a
                    className={styles.socmed}
                    href="https://www.facebook.com/UrbanSocialForum/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <Icon icon={<Facebook className={styles.socmedIcon} />} />
                  </a>
                  <a
                    className={styles.socmed}
                    href="https://www.instagram.com/urbansocialforum/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <Icon icon={<Instagram className={styles.socmedIcon} />} />
                  </a>
                </div>
              </div>
            </article>
          </main>
        </div>
      </Container>
    </Dialog>
  )
}

export default Popup
