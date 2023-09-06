import React from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import '../style/HomeStyle.css'
import Footer from '../components/Footer'
import HardSkills from '../components/HardSkills'
import ResumenProfile from '../components/ResumenProfile'
import PreviewProjects from '../components/PreviewProjects'

const Home = () => {
  return (
    <div>
        <Header />
        <Intro />
        <HardSkills />
        <ResumenProfile />
        <PreviewProjects />
        <Footer />
    </div>
  )
}

export default Home