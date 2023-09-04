import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import '../style/HomeStyle.css'
import Footer from '../components/Footer'
import HardSkills from '../components/HardSkills'

const Home = () => {
  return (
    <div>
        <Header />
        <Intro />
        <HardSkills />
        <Footer />
    </div>
  )
}

export default Home