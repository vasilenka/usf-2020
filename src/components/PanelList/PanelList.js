import styles from './PanelList.module.scss'
import React, { useEffect } from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Panel from '../Panel/Panel'

const PanelList = ({ lang, panels, children, className, ...restProps }) => {
  useEffect(() => {
    console.log({ panels })
  }, [panels])

  return (
    <Container narrow className={cx(styles.root)} {...restProps}>
      {panels.map((panel, index) => (
        <Panel lang={lang} key={`panel-${index}`} panel={panel} />
      ))}
    </Container>
  )
}

export default PanelList
