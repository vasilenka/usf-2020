import styles from './Sponsors.module.scss'
import React from 'react'
// import classnames from 'classnames';

import { FaStar } from 'react-icons/fa'

import Text from '../Text/Text'
import Section from '../Section/Section'
import SectionHeader from '../SectionHeader/SectionHeader'

import Container from './../../layouts/Container/Container'

import FirstRow from './FirstRow/FirstRow'
import SecondRow from './SecondRow/SecondRow'
import ThirdRow from './ThirdRow/ThirdRow'
import FourthRow from './FourthRow/FourthRow'
import FifthRow from './FifthRow/FifthRow'
import MediaPartners from './MediaPartners/MediaPartners'

const Sponsors = ({ online, sambang, inView, className }) => {
  return (
    <Container id="Partners" className={styles.root}>
      <Container narrow className={styles.card}>
        <SectionHeader
          bleed
          center
          title={online ? 'Organizer & Partners' : 'Organizer'}
        />
        {inView && <FirstRow />}
        {online && inView && (
          <>
            <ThirdRow />
            <FifthRow />
          </>
        )}
      </Container>
    </Container>
  )
}

export default Sponsors
