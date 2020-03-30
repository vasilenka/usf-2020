import styles from './Location.module.scss'
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import Load from 'external-load'
import Loadable from 'react-loadable'

import { FaMapMarkedAlt } from 'react-icons/fa'
import Betawi from './../images/betawi'

// import Map from '../Map/Map'
// import Mapbox from '../Mapbox/Mapbox'
import Text from '../Text/Text'
import SectionHeader from '../SectionHeader/SectionHeader'
import Venue from '../Venue/Venue'

import Container from './../../layouts/Container/Container'

const onWindow = () => typeof window !== 'undefined'
const Loading = () => (
  <div>
    <Text heading4 as="p">
      Loading Map...
    </Text>
  </div>
)

const LoadableComponent = Loadable({
  loader: () => import('../Mapbox/Mapbox'),
  loading: Loading,
  render(loaded, props) {
    let Component = loaded.default
    return <Component {...props} />
  },
})

const Location = ({ inView }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    Load.css('https://api.tiles.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css')
      .then(() => setMounted(true))
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Container bleed id="Location" className={classnames(styles.root)}>
      {inView && (
        <div className={styles.betawiWrapper}>
          <Betawi />
        </div>
      )}
      <Container>
        <SectionHeader
          bleed
          icon={<FaMapMarkedAlt />}
          title="Location"
          // subtitle="The forum will be held at Museum Nasional Indonesia, Jakarta"
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

        {/* {inView && <Map isMarkerShown />} */}
        {onWindow ? inView && mounted && <LoadableComponent /> : null}
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
