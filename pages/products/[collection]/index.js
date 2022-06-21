import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import ProductCard from '../../../components/product/productCard'
import { getCategories, getCategoriesName } from '../../../lib/category'
import { getProductByCategory } from '../../../lib/product'
import Link from 'next/link'


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.h1`
    text-transform: capitalize;
    margin: 50px 0;
`

const Collection = (props) => {
  return (
    <Layout>
        <Title className='text-center mt-5'>{props.products[0].category}</Title>
        <Container>
            {props.products.map((product, index) => (
                <Link key={index} href={`/products/${product.category}/${product.id}`} passHref><a style={{textDecoration: 'none'}}><ProductCard name={product.title} price={product.price} image={product.image}></ProductCard></a></Link>
            ))}
        </Container>
    </Layout>
  )
}

export default Collection

export const getStaticPaths = async () => {
    const paths = await getCategoriesName()
    return {
        paths,
        // fallback: false // Path nào không return bởi getStaticPaths sẽ dẫn về 404
        fallback: false // 
    }
}

export const getStaticProps = async ({params}) => {
    const products = await getProductByCategory(params.collection)
    return {
        props: {
            products
        },
        revalidate: 1
    }
}