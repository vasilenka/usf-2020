import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import Default from './../layouts/Default/Default'

import { cover as coverEn, panels as panelsEn } from '../docs/online/en'
import { cover as coverId, panels as panelsId } from '../docs/online/id'

import Navbar from '../components/Navbar/Navbar'
import PageHeader from '../components/PageHeader/PageHeader'
import Graphics from '../components/Graphics/Graphics'
import Cover from '../components/Cover/Cover'
import PanelList from '../components/PanelList/PanelList'
import Sponsors from '../components/Sponsors/Sponsors'
import Contact from '../components/Contact/Contact'

const OnlinePage = () => {
  const [active, setActive] = useState('en')
  const [ref, inView] = useInView({
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
    triggerOnce: true,
  })

  return (
    <Default>
      <Navbar />
      <span ref={ref}></span>
      <PageHeader active={active} setActive={setActive} title="Online Panels" />
      <Graphics />
      <Cover cover={active === 'en' ? coverEn : coverId} />
      <PanelList lang={active} panels={active === 'en' ? panelsEn : panelsId} />
      <div
        style={{
          backgroundImage: inView && 'url("/images/poster.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          paddingBottom: 0,
        }}>
        <Sponsors online inView={inView} />
        <Contact />
      </div>
    </Default>
  )
}

export default OnlinePage
