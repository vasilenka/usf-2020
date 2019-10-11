import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'

const HomePage = ({ className, ...restProps }) => {
  return (
    <Default>
      <Intro />
      <Footer />
    </Default>
  )
}

export default HomePage
