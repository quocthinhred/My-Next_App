import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import CartItem from '../../components/cart/cartitem'
import Checkout from '../../components/cart/checkout'
import Sumary from '../../components/cart/sumary'
import Layout from '../../components/Layout'
import { useCartContext } from '../../context/cartState'
import { parseCookies } from "../../helpers"
import Link from 'next/link'


const Container = styled.div`
    display: flex;
    padding: 50px;
    max-width: 1400px;
    margin: 0 auto;
`;

const ListProduct = styled.div`
    width: 60%;
`;

const Summary = styled.div`
    flex: 1;
`;

const CheckoutContain = styled.div`
    position: relative;
    display: none;
    &.active {
        display: block;
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



const Cart = ({ListProducts}) => {
    const cartState = useCartContext();
    if(!ListProducts || Object.keys(ListProducts).length === 0 || ListProducts.listProducts == '[]'){
        return (
            <Layout>
                <h2 className='mt-5 text-center'>Your Cart Is Empty!</h2>
                <Link href={`/products`} passHref><Back>Continue Shopping</Back></Link>
            </Layout>
        )
    }
    const listProducts = JSON.parse(ListProducts.listProducts);
  return (
        <Layout>
            <Container>
                <ListProduct>
                    {listProducts.map((product, index)=>(
                        <CartItem key={index} product={product}></CartItem>
                    ))}
                </ListProduct>
                <Summary>
                    <Sumary></Sumary>
                </Summary>
            </Container>
            <CheckoutContain className={cartState.showCheckout?'active':''}>
                <Checkout></Checkout>
            </CheckoutContain>
        </Layout>
  )
}

export const getServerSideProps = async ({req, res}) => {
    
    const ListProducts = parseCookies(req)
    return {
        props: {
            ListProducts
        }
    }
}

export default Cart

