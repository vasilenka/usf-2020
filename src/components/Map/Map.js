import styles from './Map.module.scss'
import React from 'react'
import classnames from 'classnames'
import { compose, withProps } from 'recompose'
import { withScriptjs, GoogleMap, withGoogleMap } from 'react-google-maps'
const {
  MarkerWithLabel,
} = require('react-google-maps/lib/components/addons/MarkerWithLabel')

const Map = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBtt5qkiiJDRnrkzlGkgmMwU5JovC2QHdE&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className={classnames(styles.container)} />,
    mapElement: <div className={classnames(styles.map)} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, className, ...restProps }) => {
  const marks = [
    {
      label: `Museum Nasional Indonesia`,
      address: 'Jl. Medan Merdeka Barat No.12, Gambir, Kota Jakarta Pusat',
      position: {
        lat: -6.1761059,
        lng: 106.8214622,
      },
    },
  ]

  // const screenSize =
  //   document.body.clientWidth > 600
  //     ? { lat: -6.1761059, lng: 106.8214622 }
  //     : { lat: -6.1761059, lng: 106.8214622 }
  // const zoom = document.body.clientWidth > 600 ? 14 : 12

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: -6.1761059, lng: 106.8214622 }}
      gestureHandling="greedy"
      options={{
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
      }}>
      {marks.map((mark, index) => {
        return (
          <MarkerWithLabel
            key={index}
            position={mark.position}
            labelAnchor={mark.position}
            labelStyle={{ position: 'relative' }}>
            <div
              style={{
                backgroundColor: '#5a5eaa',
                borderRadius: 12,
                color: '#ffe609',
                fontSize: '16px',
                padding: '12px 16px',
                textAlign: 'center',
                fontWeight: 500,
              }}>
              Museum <br />
              Nasional <br />
              Indonesia
            </div>
          </MarkerWithLabel>
        )
      })}
    </GoogleMap>
  )
})

export default Map
