import React from 'react'
import Header from './Header'
import Footer from './Footer';
import Footertwo from './Footertwo';
import Navigation from './Navigation';
import Statics from './Statics';
import Artical from './articalCon/Artical';
function Home() {
  return (
    <div className='home'>
      <Header />
      <Navigation />
      <Statics />
      <Artical/>
      <Footer />
      <Footertwo/>
      
    </div>
  )
}

export default Home
