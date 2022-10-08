import React from 'react'

import {HeroBanner, Product, FooterBanner} from '../components'

import {client} from '../lib/client'

function Home({products, bannerData}) {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>

      <div className='products-container'> 
        {
          products?.map((product) => product.name)
        }
      </div>

      <FooterBanner />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]' // get all products from sanity dashboard
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]' // get all products from sanity dashboard
  const bannerData = await client.fetch(bannerQuery)

  return {
    props: {
      products,
      bannerData
    }
  }
}

export default Home