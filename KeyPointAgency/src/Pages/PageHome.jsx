import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import SearchBar from '../Components/SearchBar'
import ContactUs from '../Components/ContactUs'

const PageHome = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <SearchBar/>
    <ContactUs />
    </>
  )
}

export default PageHome