import React from 'react';
import Specials from "./Specials"
import Reviews from "./Reviews"
import About from "./About"
import Hero from "./Hero"

const HomePage = () => {
  return (
    <div>
    <Hero />
      <Specials />
      <Reviews />
      <About />
    </div>
  )
}

export default HomePage