import React from 'react'
import { Hero } from './Components/Hero'
import ChooseYourOwn from './Components/ChooseYourOwn'
import PricingCard from './Components/PricingCard'
import FeatureSection from './Components/FeatureSection'
import UserCategories from './Components/UserCategories'
import DataAttributes from './Components/DataAttributes'
import Testimonials from './Components/Testimonial'
import FAQSection from './Components/FaqSection'
import Footer from './Components/Footer'
import DataAccuracy from './Components/DataAccuracy'


const page = () => {
  return (
    <div>
      <Hero/>
      <ChooseYourOwn/>
      <PricingCard/>
      <FeatureSection/>
      <DataAttributes/>
      <DataAccuracy/>
      <UserCategories/>
      <Testimonials/>
      <FAQSection/>
      <Footer/>
    </div>
  )
}

export default page
