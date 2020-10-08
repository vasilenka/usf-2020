import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Default from '../layouts/Default/Default'

import { cover as coverEn, cities as panelsEn } from '../docs/sambang/en'
import { cover as coverId, cities as panelsId } from '../docs/sambang/id'

import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import Graphics from '../components/Graphics/Graphics'
import Cover from '../components/Cover/Cover'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'
import SambangList from '../components/SambangList/SambangList'
// import PanelList from '../components/PanelList/PanelList'

const SambangPage = () => {
  const [active, setActive] = useState('en')
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Default>
      <Navbar page />
      <span ref={ref}></span>
      <PageHeader active={active} setActive={setActive} title="Sambang Kota" />
      <Graphics />
      <Cover cover={active === 'en' ? coverEn : coverId} />
      <SambangList
        lang={active}
        panels={active === 'en' ? panelsEn : panelsId}
      />
      <div
        style={{
          backgroundImage: inView && 'url("/images/poster.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          paddingBottom: 0,
        }}>
        <Sponsors sambang inView={inView} />
        <Contact />
      </div>
    </Default>
  )
}

export default SambangPage
