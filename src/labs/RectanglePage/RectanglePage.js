import styles from './RectanglePage.module.scss'
import React from 'react'
import cx from 'classnames'
import Section from '../../layouts/Section/Section'
import Text from '../../components/Text/Text'
import Container from '../../layouts/Container/Container'
import { useRect, useWindowSize } from '../../hooks'
import WindowSize from '../WindowSize/WindowSize'

const RectanglePage = ({ children, className, ...restProps }) => {
  const ref = React.useRef()
  const rect = useRect(ref)

  const { width: hookWidth, height: hookHeight } = useWindowSize()

  return (
    <Section ref={ref}>
      <Container>
        <Text heading1={rect && rect.width > 700} heading5={rect && rect.width <= 700} as="h2">
          This is a Heading Text
        </Text>
        <Text large as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam praesentium reiciendis
          molestias. Sit voluptatum quas reiciendis incidunt similique, aut ducimus quo neque quam facilis
          nesciunt vel maiores, iure nemo.
        </Text>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
      </Container>
      <Container>
        <WindowSize>
          {({ width, height }) => (
            <Text heading1={width && width > 700} heading5={width && width <= 700} as="h2">
              This is a Heading Text with WindowSize
            </Text>
          )}
        </WindowSize>
      </Container>
      <Container>
        <Text heading1={hookWidth > 700} heading5={hookWidth <= 700} as="h2">
          This is a Heading Text with useWindowSize Hook
        </Text>
      </Container>
    </Section>
  )
}

export default RectanglePage
