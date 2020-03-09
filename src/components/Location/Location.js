import styles from './Location.module.scss'
import React from 'react'
import classnames from 'classnames'

import { FaMapMarkedAlt } from 'react-icons/fa'
import Betawi from './../images/betawi'

import Map from '../Map/Map'
import Text from '../Text/Text'
import SectionHeader from '../SectionHeader/SectionHeader'
import Venue from '../Venue/Venue'

import Container from './../../layouts/Container/Container'

const Location = () => {
  return (
    <Container bleed id="Location" className={classnames(styles.root)}>
      <div className={styles.betawiWrapper}>
        <Betawi />
      </div>
      <Container>
        <SectionHeader
          bleed
          icon={<FaMapMarkedAlt />}
          title="Location"
          // subtitle="The forum will be held Museum Nasional Indonesia, Jakarta"
        />
      </Container>

      <Container className={styles.container}>
        <div className={styles.addressContainer}>
          <div className={styles.card}>
            <Text className={styles.title} heading5 as="h3">
              Main Venue
            </Text>
            <Venue
              name="Museum Nasional Indonesia"
              address="Jl. Medan Merdeka Barat No.12, Gambir, Kota Jakarta Pusat"
              url="https://goo.gl/maps/Xkqz9JKq42ZPAkLX6"
            />
          </div>
        </div>

        <Map isMarkerShown />
      </Container>
      <div className={styles.addressPhone}>
        <div className={styles.card}>
          <Text className={styles.title} heading4 as="h3">
            Main Venue
          </Text>
          <Venue
            name="Museum Nasional Indonesia"
            address="Jl. Medan Merdeka Barat No.12, Gambir, Kota Jakarta Pusat"
            url="https://goo.gl/maps/Xkqz9JKq42ZPAkLX6"
          />
        </div>
      </div>
    </Container>
  )
}

export default Location
