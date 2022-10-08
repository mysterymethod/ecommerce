// square bracets means it is going to be dynamic 

import React from 'react'

import { client, urlFor } from '../../lib/client'

const ProductDetails = ({ product, products }) => {

  const { image, name, details, price } = product

  return (
    <div>
      <div className='product-deatail-container'>
        <div>
          <div className='image-container'>
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
      </div>
    </div>
  )
}


export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }` // give me all the products, but dont return all the datas for all the product, just return current slug detail
  const products = await client.fetch(query)
  
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  })) 

  return {
    paths,
    fallback: 'blocking'
  }
}


// getStaticProps - The data required to render the page is available at build time ahead of user request.
export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product"  && slug.current == '${slug}'][0]` // get all products from sanity dashboard
  const productQuesry = '*[_type == "product"]' // for similar products

  const product = await client.fetch(query)
  const products = await client.fetch(productQuesry)


  return {
    props: {
      product,
      products
    }
  }
}

export default ProductDetails