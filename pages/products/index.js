import React from 'react'
import Layout from '../../components/Layout'
import ProductCard from '../../components/product/productCard'
import { getAllProduct } from '../../lib/product'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

function Product(props) {

  return (
    <Layout>
        <Container>
            {props.products.map((product, index) => (
                <Link key={index} href={`/products/${product.category}/${product.id}`} passHref><a style={{textDecoration: 'none'}}><ProductCard name={product.title} price={product.price} image={product.image}></ProductCard></a></Link>
            ))}
        </Container>
    </Layout>
  )
}

export default Product

export const getStaticProps = async() => {
    const products = await getAllProduct()
    return {
        props: {
            products
        }
    }
}