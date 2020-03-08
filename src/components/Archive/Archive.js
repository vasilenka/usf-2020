import styles from './Archive.module.scss'
import React from 'react'
// import classnames from 'classnames';

import { FaArchive } from 'react-icons/fa'

import Container from './../../layouts/Container/Container'

import SectionHeader from '../SectionHeader/SectionHeader'
import ArchiveItem from '../ArchiveItem/ArchiveItem'

import Report from './../images/report'
import Gallery from './../images/gallery'
import Video from './../images/video'
import Transportation from './../images/transportation'

const Archive = ({ className, ...restProps }) => {
  return (
    <div id="Archive" className={styles.root}>
      <div className={styles.artwork}>
        <Transportation />
      </div>
      <Container as="section" className={styles.container}>
        <SectionHeader bleed icon={<FaArchive />} title="Archive" />
        <div className={styles.archiveGrid}>
          <ArchiveItem
            title="Event Report"
            img={<Report alt="report thumbnail" />}
            url="http://bit.ly/eventreportusf"
          />

          <ArchiveItem
            title="Photo Gallery"
            img={<Gallery alt="gallery thumbnail" />}
            url="https://issuu.com/urbansocialforum/docs/urban_social_forum_photo_gallery_lo_a0cab4fe997ddf"
          />

          <ArchiveItem
            title="Video"
            img={<Video alt="video thumbnail" />}
            url="https://www.youtube.com/watch?v=B4H7BhTgv50"
          />
        </div>
      </Container>
    </div>
  )
}

export default Archive
