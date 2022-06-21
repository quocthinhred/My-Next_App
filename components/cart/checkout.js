import React, { Fragment } from 'react'
import styled from 'styled-components'
import CheckoutItem from './checkoutitem'

const Modal = styled.div`
    background: rgb(51 51 51 / 50%);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: scroll;
`

const Container = styled.div`
    width: 800px;
    background: white;
    border-radius: 3px;
    height: fit-content;
    opacity: 1;
    position: relative;
    margin: 100px auto;
    z-index: 1001;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: show 1s ease;
`

const ListHead = styled.div`
    display: flex;
    justify-content: space-between;
`

const Head = styled.div`
    font-size: 18px;
    padding: 10px 30px;
    font-weight: 500;
    border: solid #eee;
    border-width: 0 0 1px 0;
`

const Footer = styled.div`
    padding: 10px 30px;
    border: solid #eee;
    border-width: 1px 0 0 0;
    display: flex;
    justify-content: flex-end;
`

const OK = styled.div`
    padding: 3px 13px;
    background: #ff4c3b;
    border-radius: 2px;
    color: white;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
        transition: 0.3s;
    }
`

const Cancel = styled.div`
    padding: 3px 10px;
    border-radius: 2px;
    margin-right: 15px;
    color: #999;
    cursor: pointer;
    border: 1px solid #999;
    &:hover{
        color: #ff4c3b;
        border-color: #ff4c3b;
        transition: 0.5s;
    }
`

const Label = styled.div`
    color: #777;
`

const ListItem = styled.div`
    padding: 10px 30px;
`

const CheckoutContain = styled.div`
    position: fixed;
`

const Checkout = ({listProduct}) => {
  return (
    <CheckoutContain>
          
          <Modal>
          <Container>
              <Head>Checkout Summary</Head>
              <ListItem>
                  <ListHead>
                      <Label style={{ width: '55%' }}>Products Ordered</Label>
                      <Label>Amount</Label>
                      <Label>Item Subtotal</Label>
                  </ListHead>
                  {listProduct.map((product, index)=>(
                    <CheckoutItem key={index} product={product}></CheckoutItem>
                  ))}
              </ListItem>
              <Footer>
                  <Cancel>Cancel</Cancel>
                  <OK>OK</OK>
              </Footer>
          </Container>
          </Modal>
    </CheckoutContain>
  )
}

export default Checkout