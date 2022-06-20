import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Slider from '../components/slider'
import CategoryCard from '../components/category/categoryCard'
import styled from 'styled-components'
import Footer from '../components/footer'
import ProductCard from '../components/product/productCard'

export default function Home() {

  const Category = styled.div `
    display: flex;
    justify-content: center;
  `

  const Product = styled.div `
    display: flex;
    justify-content: center;
  `

  const collections = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
    ]

  return (
    <Layout>
      <Slider></Slider>
      <h1 className='text-center mt-5'>Product Categories</h1>
      <Category>
        {collections.map((collection, index) => (
          <CategoryCard key={index} name={collection} image="/image/slider1.jpg"></CategoryCard>
        ))}
      </Category>
      <h1 className='text-center mt-5'>Product Recommend</h1>
      <Product>
        <ProductCard name="Product Name" image="/image/slider1.jpg" price='50$'></ProductCard>
        <ProductCard name="Product Name" image="/image/slider1.jpg" price='50$'></ProductCard>
        <ProductCard name="Product Name" image="/image/slider1.jpg" price='50$'></ProductCard>
        <ProductCard name="Product Name" image="/image/slider1.jpg" price='50$'></ProductCard>
      </Product>
      <Footer></Footer>
    </Layout>
  )
}
