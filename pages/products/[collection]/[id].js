import React from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import { getProductById, getProductIds } from '../../../lib/product'
import Link from 'next/link'

const Container = styled.div`
    display: flex;
    margin: 100px auto;
    max-width: 1100px;
    gap: 100px;
`

const Image = styled.img`
    width: 40%;
`

const Price = styled.span`
    color: #ff4c3b;
    font-size: 24px;
`

const Label = styled.span`
    font-size: 18px;
    line-height: 50px;
`

const Description = styled.p`
    font-size: 14px;
    color: #666;
`

const AddToCart = styled.div`
    background: #ff4c3b;
    color: white;
    width: 150px;
    height: 40px;
    text-align: center;
    line-height: 38px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
        transition: 1s;
    }
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

function ProductPage({product}) {
  return (
    <Layout>
        <Container>
            <Image src={product.image} alt='Product Image' />
            <div>
                <h2>{product.title}</h2>
                <div>
                    <Label>Price: </Label><Price>${product.price}</Price>
                </div>
                <div>
                    <Label>Description:</Label>
                    <Description>{product.description}</Description>
                </div>
                <AddToCart>Add To Cart</AddToCart>
            </div>
        </Container>
        <Link href={`/products/${product.category}`} passHref><Back>Back To Collection</Back></Link>
    </Layout>
  )
}

export default ProductPage

export const getStaticPaths = async () => {
    const paths = await getProductIds()
    return {
        paths,
        // fallback: false // Path nào không return bởi getStaticPaths sẽ dẫn về 404
        fallback: false // 
    }
}

export const getStaticProps = async ({params}) => {
    const product = await getProductById(params.id)
    return {
        props: {
            product
        },
        revalidate: 1
    }
}