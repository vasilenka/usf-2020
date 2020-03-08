import styles from './MediaPartners.module.scss'
import React from 'react'
import classnames from 'classnames'

import kabar from './media/kabar-solo.jpg'
import event from './media/event-solo.jpg'
import agenda from './media/agenda-solo.jpg'

const MediaPartners = ({ className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <div className={styles.logoContainer}>
        <img
          src={kabar}
          className={classnames(styles.logo, styles.kabar)}
          alt="Kabar solo logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={event}
          className={classnames(styles.logo, styles.event)}
          alt="Event solo logo"
        />
      </div>
      <div className={styles.logoContainer}>
        <img
          src={agenda}
          className={classnames(styles.logo, styles.agenda)}
          alt="Agenda Solo logo"
        />
      </div>
    </div>
  )
}

export default MediaPartners
