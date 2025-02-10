import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Client from './components/Client/Client'
import Community from './components/Community/Community'
import Unlock from './components/Unlock/Unlock'
import Acheivement from './components/Acheivement/Acheivement'
import Calender from './components/Calender/Calender'
import CommunityUpdates from './components/CommunityUpdates/CommunityUpdates'
import Custmer from './components/Customer/Custmer'
import FooterAove from './components/FooterAbove/FooterAove'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
      <Client/>
      <Community/>
      <Unlock/>
      <Acheivement/>
      <Calender/>
      <Custmer/>
      <CommunityUpdates/>
      <FooterAove/>
      <Footer/>
    </>
  )
}

export default App
