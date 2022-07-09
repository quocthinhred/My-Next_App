import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Slider from '../components/slider'
import CategoryCard from '../components/category/categoryCard'
import styled from 'styled-components'
import Footer from '../components/footer'
import ProductCard from '../components/product/productCard'
import { getCategories } from '../lib/category'
import { getAllProduct, getRecommendProduct } from '../lib/product'
import Link from 'next/link'

const Category = styled.div `
    display: flex;
    justify-content: center;
  `;

  const Product = styled.div `
    display: flex;
    justify-content: center;
  `;

export default function Home(props) {

  

  const collections = props.categories;
  const products = props.products;
  let collectionImages = []

  collections.forEach((collection, index) => {
    collectionImages[index] = '/image/collections/' + collection + '.jpg'
  })

  return (
    <Layout>
      <Slider></Slider>
      <h1 className='text-center mt-5'>Product Categories</h1>
      <Category>
        {collections.map((collection, index) => (
          <Link key={index} href={`/products/${collection}`}><a style={{textDecoration: 'none'}}><CategoryCard name={collection} image={collectionImages[index]}></CategoryCard></a></Link>
        ))}
      </Category>
      <h1 className='text-center mt-5'>Product Recommend</h1>
      <Product>
        {products.map((product, index) => (
          <Link key={index} href={`/products/product/${product.id}`} passHref><a style={{textDecoration: 'none'}}><ProductCard name={product.title} image={product.image} price={product.price}></ProductCard></a></Link>
        ))}
      </Product>
    </Layout>
  )

  

}

export const getStaticProps = async () => {
  const categories = await getCategories();
  const products = await getRecommendProduct();
  return{
    props: {
      categories,
      products
    }
  }
}
