import React from 'react'

import {HeroBanner, Product, FooterBanner} from '../components'

function Home() {
  return (
    <>
      <HeroBanner />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'>
        Loop all the products
      </div>

      <FooterBanner />

    </>
  )
}

export default Home