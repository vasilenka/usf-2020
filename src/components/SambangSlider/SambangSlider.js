import styles from './SambangSlider.module.scss'
import React from 'react'
import cx from 'classnames'
import Slider from 'react-slick'

import ChevronLeft from '../icons/ChevronLeft'
import ChevronRight from '../icons/ChevronRight'

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <button
      style={{ ...style }}
      className={cx(styles.prevArrow)}
      onClick={onClick}>
      <ChevronLeft className={cx(styles.arrowIcon, styles.prevArrowIcon)} />
    </button>
  )
}

const NextArrow = ({ className, style, onClick }) => {
  return (
    <button
      style={{ ...style }}
      className={cx(styles.nextArrow)}
      onClick={onClick}>
      <ChevronRight className={cx(styles.arrowIcon, styles.nextArrowIcon)} />
    </button>
  )
}

const SambangSlider = ({ city, photos, children, className, ...restProps }) => {
  const settings = {
    swipeToSlide: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    speed: 1000,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <div className={cx(styles.root)} {...restProps}>
      <Slider className={styles.wrapper} {...settings}>
        {photos &&
          photos.length > 0 &&
          photos.map((Photo, i) => (
            <div key={`sambang-${city}-${i}`} className={styles.container}>
              <Photo className={styles.photo} />
            </div>
          ))}
      </Slider>
    </div>
  )
}

export default SambangSlider
