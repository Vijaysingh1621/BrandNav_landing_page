import React from 'react'
import { Hero } from './Components/Hero'
import ChooseYourOwn from './Components/ChooseYourOwn'
import PricingCard from './Components/PricingCard'
import FeatureSection from './Components/FeatureSection'


const page = () => {
  return (
    <div>
      <Hero/>
      <ChooseYourOwn/>
      <PricingCard/>
      <FeatureSection/>
    </div>
  )
}

export default page
