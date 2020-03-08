import React from 'react'

import Default from './../layouts/Default/Default'

import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Join from '../components/Join/Join'
import Location from '../components/Location/Location'
import Archive from '../components/Archive/Archive'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'

const HomePage = ({ className, ...restProps }) => {
  return (
    <Default>
      <Navbar />
      <Header />
      <About />
      {/* <Join /> */}
      <Location />
      <Archive />
      <div>
        <Sponsors />
        <Contact />
      </div>
    </Default>
  )
}

export default HomePage
