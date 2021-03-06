import styles from './Sambang.module.scss'
import React, { useState } from 'react'
import cx from 'classnames'
import Chevron from './chevronUp'
import Text from '../Text/Text'
import SambangSlider from '../SambangSlider/SambangSlider'

import { surabayaPhotos } from './../images/surabaya/surabaya'
import { soloPhotos } from './../images/solo/solo'
import { makasarPhotos } from './../images/makasar/makasar'

const Sambang = ({
  index,
  city,
  lang,
  panel,
  children,
  className,
  ...restProps
}) => {
  const [show, setShow] = useState(false)

  return (
    <article className={cx(styles.root)} {...restProps}>
      <div className={styles.wrapper}>
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
              <span className={styles.details}>
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
              </span>
            )}
          </header>
          {show && (
            <section className={styles.sliderWrapper}>
              <SambangSlider
                city={city}
                photos={
                  index === 0
                    ? surabayaPhotos
                    : index === 1
                    ? soloPhotos
                    : makasarPhotos
                }
              />
            </section>
          )}
          {show && (
            <>
              <Text medium as="p" className={styles.paragraph}>
                {panel.body}
              </Text>
              <Text medium as="p" className={styles.paragraph}>
                {lang === 'en' ? (
                  <>
                    Download the event report
                    <a
                      href={panel.download}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.link}>
                      here
                    </a>
                    (in Indonesian Language)
                  </>
                ) : (
                  <>
                    Unduh laporan acara
                    <a
                      href={panel.download}
                      rel="noopener noreferrer"
                      target="_blank"
                      className={styles.link}>
                      di sini
                    </a>
                  </>
                )}
              </Text>
            </>
          )}
        </div>
      </div>
      {show && (
        <section className={styles.detailMobile}>
          <Text small as="p" className={styles.item}>
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
          <Text small as="p" className={styles.item}>
            {lang === 'en' ? 'Date' : 'Tanggal'}:{' '}
            <span className={styles.value}>{panel.date}</span>
          </Text>
        </section>
      )}
      {show && (
        <section className={styles.sliderWrapperMobile}>
          <SambangSlider
            city={city}
            photos={
              index === 0
                ? surabayaPhotos
                : index === 1
                ? soloPhotos
                : makasarPhotos
            }
          />
        </section>
      )}
      {show && (
        <>
          <Text medium as="p" className={styles.paragraphMobile}>
            {panel.body}
          </Text>
          <Text medium as="p" className={styles.paragraphMobile}>
            {lang === 'en' ? (
              <>
                Download the event report
                <a
                  href={panel.download}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.link}>
                  here
                </a>
                (in Indonesian Language)
              </>
            ) : (
              <>
                Unduh laporan acara
                <a
                  href={panel.download}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.link}>
                  di sini
                </a>
              </>
            )}
          </Text>
        </>
      )}
    </article>
  )
}

export default Sambang
