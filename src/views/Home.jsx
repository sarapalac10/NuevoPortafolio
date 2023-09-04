import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import '../style/HomeStyle.css'
import Footer from '../components/Footer'
import HardSkills from '../components/HardSkills'
import ResumenProfile from '../components/ResumenProfile'

const Home = () => {
  return (
    <div>
        <Header />
        <Intro />
        <HardSkills />
        <ResumenProfile />
        <Footer />
    </div>
  )
}

export default Home