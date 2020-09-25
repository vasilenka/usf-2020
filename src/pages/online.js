import React, { useState } from 'react'

import Default from './../layouts/Default/Default'

import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import Graphics from '../components/Graphics/Graphics'

const OnlinePage = () => {
  const [active, setActive] = useState('en')

  return (
    <Default>
      <Navbar />
      <PageHeader active={active} setActive={setActive} title="Online Panels" />
      <Graphics />
    </Default>
  )
}

export default OnlinePage
