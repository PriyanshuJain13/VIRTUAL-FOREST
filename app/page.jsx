import React from 'react'
import Map from '@components/Map'
import Purchase from '@components/Purchase'
import Adspace from '@components/Adspace'
import Nftarea from '@components/Nftarea'
import AboutUs from '@components/AboutUs'
import Faq from '@components/Faq'
import Contact from '@components/Contact'
const Home = () => {
  return (
     <main>
        <Map />
        <Purchase />
        <Adspace />
        <Nftarea />
        <AboutUs />
        <Faq />
        <Contact />
     </main> 
  )
}

export default Home