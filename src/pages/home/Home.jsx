
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HeroSection2 from './components/HeroSection2'
import Footer from './components/Footer'
import Design from './components/mini/Design'
import img1 from '../../assets/image1.webp'
import img2 from '../../assets/image2.webp'
import Footer2 from './components/Footer2'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <HeroSection2/>
      <Footer/>
      <Design title={"buy your first home with better"} secTitle={"one day mortage"} img1={img1} img2={img2} />
      <Design title={"buy your first home with better"} secTitle={"one day mortage"} img1={img1} img2={img2} />
      <Footer2/>
    </div>
  )
}

export default Home
