import styles from './SambangSlider.module.scss'
import React from 'react'
import cx from 'classnames'
import Slider from 'react-slick'

const SambangSlider = ({ children, className, ...restProps }) => {
  const settings = {
    lazyLoad: true,
    swipeToSlide: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
  }

  return (
    <div className={cx(styles.root)} {...restProps}>
      <Slider className={styles.wrapper} {...settings}>
        <div className={styles.container}>
          <h2>This is a good Item 1</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 2</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 3</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 4</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 5</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 6</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 7</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 8</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 9</h2>
        </div>
        <div className={styles.container}>
          <h2>This is a good Item 10</h2>
        </div>
      </Slider>
    </div>
  )
}

export default SambangSlider