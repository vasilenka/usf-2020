import styles from './SambangList.module.scss'
import React, { useEffect } from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Sambang from '../Sambang/Sambang'

const SambangList = ({ lang, panels, children, className, ...restProps }) => {
  useEffect(() => {
    console.log({ panels })
  }, [panels])

  return (
    <Container narrow className={cx(styles.root)} {...restProps}>
      {panels.map((panel, index) => (
        <Sambang
          city={index === 0 ? 'surabaya' : index === 1 ? 'solo' : 'makassar'}
          lang={lang}
          index={index}
          key={`sambang-${index}`}
          panel={panel}
        />
      ))}
    </Container>
  )
}

export default SambangList
