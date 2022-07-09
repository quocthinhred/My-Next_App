import React from 'react'
import Layout from '../../../components/Layout'
import ProductCard from '../../../components/product/productCard'
import { getAllProduct } from '../../../lib/product'
import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'

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

function Product(props) {

    const router = useRouter();
    
    const HandleClick = (product) => {
        router.push(`/products/product/${product.id}`);
    }

  return (
    <Layout>
        <Title className='text-center mt-5'>All Products</Title>
        <Container>
            {props.products.map((product, index) => (
                <div onClick={()=>{HandleClick(product)}} key={index}>
                    <ProductCard key={index} name={product.title} price={product.price} image={product.image}>
                    </ProductCard>
                </div>
                // <Link prefetch={false} key={index} href={`/products/product/${product.id}`} passHref>
                //     <a style={{ textDecoration: 'none' }}>
                //         <ProductCard name={product.title} price={product.price} image={product.image}>
                //         </ProductCard>
                //     </a>
                // </Link>
            ))}
        </Container>
        <Link href='/' passHref><Back>Back To Home</Back></Link>
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