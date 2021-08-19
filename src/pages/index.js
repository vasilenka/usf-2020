import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import createPersistedState from 'use-persisted-state'

import Default from './../layouts/Default/Default'

import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
// import Join from '../components/Join/Join'
import Location from '../components/Location/Location'
import Archive from '../components/Archive/Archive'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'
import Popup from '../components/Popup/Popup'

const usePersistedView = createPersistedState('view-popup')

const HomePage = ({ className, ...restProps }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  })

  const [viewed, setViewed] = usePersistedView(false)
  const [display, setDisplay] = useState(true)

  return (
    <Default>
      <Navbar />
      <div style={{ overflow: 'hidden' }}>
        <Header setViewed={setViewed} setDisplay={setDisplay} />
        <span ref={ref}></span>
        <About />
        <Archive inView={inView} />
        <div
          style={{
            backgroundImage: inView && 'url("/images/poster.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            paddingBottom: 0,
          }}>
          <Sponsors landing inView={inView} />
          <Contact />
        </div>
      </div>
    </Default>
  )
}

export default HomePage
