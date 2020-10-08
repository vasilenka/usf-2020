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
import { SurabayaOne, SurabayaTwo } from './Surabaya/Surabaya'
import { SoloOne } from './Solo/Solo'
import { MakasarOne } from './Makasar/Makasar'

const Sponsors = ({ online, landing, sambang, inView, className }) => {
  return (
    <Container id="Partners" className={styles.root}>
      <Container narrow className={styles.card}>
        <SectionHeader bleed center title="Organizer &amp; Partners" />
        {inView && <FirstRow />}
        {(landing || sambang) && (
          <>
            <SurabayaOne />
            <SurabayaTwo />
            <SoloOne />
            <MakasarOne sambang={sambang} />
          </>
        )}
        {(online || landing) && inView && (
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
