import styles from './SizedElement.module.scss'
import React, { useRef, useState } from 'react'
import cx from 'classnames'

import { useSize } from 'react-use'

import Section from '../../layouts/Section/Section'
import Container from '../../layouts/Container/Container'
import Text from '../../components/Text/Text'

const SizedElement = ({ children, className, ...restProps }) => {
  let ref = useRef()

  const [sized, { width, height }] = useSize(
    <div ref={ref}>
      <Text heading3 as="h3">
        Hello Resizer!
      </Text>
    </div>,
    { width: 100, height: 100 }
  )

  return (
    <Section>
      <Container>
        <div>
          {sized}
          <div>width: {width}</div>
          <div>height: {height}</div>
        </div>
      </Container>
    </Section>
  )
}

export default SizedElement
