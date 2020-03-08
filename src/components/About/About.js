import styles from './About.module.scss'
import React from 'react'
// import classnames from 'classnames';

import Text from '../Text/Text'
import Button from '../Button/Button'

import Container from './../../layouts/Container/Container'

const About = ({ className, ...restProps }) => {
  return (
    <Container id="About" as="section" bleed className={styles.root}>
      <Container narrow className={styles.container}>
        <Text className={styles.title} heading2 as="h3">
          Join us in imagining, creating, and affirming
          <br />
          “Another City is Possible!”
        </Text>
        <Button
          handleClick="https://bit.ly/informasiusf6"
          className={styles.cta}
          primary
          large>
          View Schedule and Information Booklet
        </Button>
        <Text className={styles.paragraph} medium as="p">
          Greetings from the Organizing Committee of the 7<sup>th</sup> Urban
          Social Forum! Year after year the Urban Social Forum grows, in doing
          so it expands the conversation about better cities to include more and
          more people, communities, and ideas. The Forum believes in the need to
          urgently advocate for and promote a more socially just, sustainable
          and democratic city, and that active citizen participation is needed
          to achieve these goals. We would like to invite you and your
          organisation to play an active role in this year’s Forum.
        </Text>
        <Text className={styles.paragraph} medium as="p">
          There will be different ways you can participate, but ultimately you
          will have the opportunity to raise the awareness of, and connect with,
          people from across Indonesia about the issue that you care about, and
          promote new perspectives, ideas, and innovations.
        </Text>
      </Container>
    </Container>
  )
}

export default About
