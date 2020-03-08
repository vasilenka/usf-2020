import styles from './Venue.module.scss'
import React from 'react'
import classnames from 'classnames'

import Text from './../Text/Text'

const Venue = ({ name, address, url, className, ...restProps }) => {
  return (
    <div className={styles.root}>
      <Text className={styles.name} heading3 as="h3">
        {name}
      </Text>
      <Text className={styles.address} normal as="p">
        {address}
      </Text>
      <a
        className={styles.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer">
        Get Direction
      </a>
    </div>
  )
}

export default Venue
