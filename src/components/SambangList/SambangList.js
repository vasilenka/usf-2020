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
        <Sambang lang={lang} key={`sambang-${index}`} panel={panel} />
      ))}
    </Container>
  )
}

export default SambangList
