import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Link from 'next/link'
import { getProductRecommend } from '../lib/product'
import ProductCard from '../components/product/productCard'


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Title = styled.h1`
    text-transform: capitalize;
    margin: 50px 0;
`

const Back = styled.button`
    border: none;
    background: #ff4c3b;
    border-radius: 3px;
    padding: 10px 40px;
    width: fit-content;
    margin: 50px auto;
    color: white;
    &:hover {
        opacity: 0.8;
        transition: 1s;
    }
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

const Recommend = (props) => {
  return (
    <Layout>
        <Title className='text-center mt-5'>PRODUCT TRENDING</Title>
        <Container>
            {props.products.map((product, index) => (
                <Link key={index} href={`/products/${product.category}/${product.id}`} passHref><a style={{textDecoration: 'none'}}><ProductCard name={product.title} price={product.price} image={product.image}></ProductCard></a></Link>
            ))}
        </Container>
        <Link href='/' passHref><Back>Back To Home</Back></Link>
    </Layout>
  )
}

export default Recommend;


export const getServerSideProps = async () => {
    const products = await getProductRecommend();
    console.log(products);
    return {
        props: {
            products
        }
    }
}