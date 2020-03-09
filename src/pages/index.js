import React from 'react'
import { useInView } from 'react-intersection-observer'

import Default from './../layouts/Default/Default'

import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
// import Join from '../components/Join/Join'
import Location from '../components/Location/Location'
import Archive from '../components/Archive/Archive'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'

const HomePage = ({ className, ...restProps }) => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Default>
      <Navbar />
      <Header />
      <span ref={ref}></span>
      <About />
      {/* <Join /> */}
      <Location inView={inView} />
      <Archive inView={inView} />
      <div
        style={{
          backgroundImage: inView && 'url("/images/poster.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          paddingBottom: 0,
        }}>
        <Sponsors inView={inView} />
        <Contact />
      </div>
    </Default>
  )
}

export default HomePage
