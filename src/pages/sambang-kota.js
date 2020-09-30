import React, { useState } from 'react'

import Default from '../layouts/Default/Default'

import { cover as coverEn, panels as panelsEn } from '../docs/sambang/en'
import { cover as coverId, panels as panelsId } from '../docs/sambang/id'

import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import Graphics from '../components/Graphics/Graphics'
import Cover from '../components/Cover/Cover'
// import PanelList from '../components/PanelList/PanelList'

const SambangPage = () => {
  const [active, setActive] = useState('en')

  return (
    <Default>
      <Navbar />
      <PageHeader active={active} setActive={setActive} title="Sambang Kota" />
      <Graphics />
      <Cover cover={active === 'en' ? coverEn : coverId} />
    </Default>
  )
}

export default SambangPage
