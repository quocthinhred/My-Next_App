import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import CartItem from '../../components/cart/cartitem'
import Checkout from '../../components/cart/checkout'
import Sumary from '../../components/cart/sumary'
import Layout from '../../components/Layout'
import { useCartContext } from '../../context/cartState'
import { parseCookies } from "../../helpers"



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





const Cart = ({ListProducts}) => {

    const showCheckout = useCartContext();
    const listProducts = JSON.parse(ListProducts.listProducts)
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
            <CheckoutContain className={showCheckout.showCheckout?'active':''}>
                <Checkout></Checkout>
            </CheckoutContain>
        </Layout>
  )
}

export const getServerSideProps = async ({req, res}) => {
    
    const ListProducts = parseCookies(req)
    if (res) {
        if (Object.keys(ListProducts).length === 0 && ListProducts.constructor === Object) {
            res.writeHead(301, { Location: "/" })
            res.end()
        }
    }
    return {
        props: {
            ListProducts
        }
    }
}

export default Cart