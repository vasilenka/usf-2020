import styles from './Panel.module.scss'
import React, { useState } from 'react'
import cx from 'classnames'
import Chevron from './chevronUp'
import Text from '../Text/Text'

const Panel = ({ lang, panel, children, className, ...restProps }) => {
  const [show, setShow] = useState(false)

  return (
    <article className={cx(styles.root)} {...restProps}>
      <button className={styles.cta} onClick={() => setShow(!show)}>
        <Chevron
          className={cx({ [styles.chevron]: true, [styles.rotate]: show })}
        />
      </button>
      <div className={styles.content}>
        <header className={styles.header}>
          <Text
            as="h2"
            heading2
            className={styles.title}
            onClick={() => setShow(!show)}>
            {panel.title}
          </Text>
          {show && (
            <span>
              <Text heading4 as="p" className={styles.item}>
                {lang === 'en' ? 'Organizers' : 'Penyelenggara'}:{' '}
                {panel.organizers && panel.organizers.length > 1 ? (
                  <span className={styles.value}>
                    <a
                      className={styles.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={panel.organizers[0].link}>
                      {panel.organizers[0].name}
                    </a>{' '}
                    and{' '}
                    <a
                      className={styles.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={panel.organizers[1].link}>
                      {panel.organizers[1].name}
                    </a>
                  </span>
                ) : (
                  <span className={styles.value}>
                    <a
                      className={styles.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      href={panel.organizers[0].link}>
                      {panel.organizers[0].name}
                    </a>
                  </span>
                )}
              </Text>
              <Text heading4 as="p" className={styles.item}>
                {lang === 'en' ? 'Date' : 'Tanggal'}:{' '}
                <span className={styles.value}>{panel.date}</span>
              </Text>
              <Text heading4 as="p" className={styles.item}>
                {lang === 'en' ? 'Participants/Viewers' : 'Peserta/Penonton'}:{' '}
                <span className={styles.value}>{panel.viewers}</span>
              </Text>
            </span>
          )}
        </header>
        {show && (
          <section className={styles.videoWrapper}>
            <iframe
              width="560px"
              height="315px"
              src={`https://www.youtube.com/embed/${panel.code}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </section>
        )}
        {show && (
          <Text medium as="p" className={styles.paragraph}>
            {panel.body}
          </Text>
        )}
      </div>
    </article>
  )
}

export default Panel
