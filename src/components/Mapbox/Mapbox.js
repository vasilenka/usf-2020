import styles from './Mapbox.module.scss'
import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import ReactMapboxGl, { ZoomControl, Marker } from 'react-mapbox-gl'

import Text from '../Text/Text'
import LogoSmall from './../images/logo-small'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoib25na2loZXJsYW1iYW5nIiwiYSI6ImNrN3Q1aHkweTB3MWgza3A0aHRxazRmeWQifQ.pv7_t-dOJ0FGFcUXh-R0_g',
})

// const mapConfig = {
//   zoom: [14],
//   style: 'mapbox://styles/mapbox/streets-v9',
//   containerStyle: {
//     height: '100vh',
//     width: '100vw',
//   },
//   center: [106.8221926689148, -6.1761503010470475],
// }

const location = {
  coordinates: [106.8221926689148, -6.1761503010470475],
}

const Mapbox = props => {
  let [active, setActive] = useState(false)
  let [config, setConfig] = useState(undefined)

  useEffect(() => {
    if (config) {
      setActive(true)
    }
  }, [config])

  useEffect(() => {
    setConfig({
      zoom: [14],
      style: 'mapbox://styles/mapbox/streets-v9',
      containerStyle: {
        height: '100vh',
        width: '100vw',
      },
      center: [106.8221926689148, -6.1761503010470475],
    })
  }, [])

  return (
    <div className={styles.container}>
      {active && (
        <Map
          style={config.style}
          zoom={config.zoom}
          className={styles.container}
          center={config.center}>
          <ZoomControl />
          <Marker
            className={styles.logoWrapper}
            coordinates={location.coordinates}>
            <LogoSmall className={styles.logo} />
          </Marker>
        </Map>
      )}
    </div>
  )
}

export default Mapbox
