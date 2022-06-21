import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    max-width: 80px;
    height: 80px;
    flex: 1;
    margin-right: 20px;
`

const Item = styled.div`
    display: flex;
    margin: 30px 0;
    justify-content: space-between;
`

const Product = styled.div`
    display: flex;
    width: 55%;
`

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    max-width: 300px;
    overflow: hidden;
    display: -webkit-box;
    display: inherit;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Amount = styled.div`
    color: #777;
    width: 57px;
    text-align: center;
`

const Price = styled.div`
    width: 95px;
    text-align: center;
`



const CheckoutItem = ({product}) => {
  return (
    <Item>
        <Product>
            <Image src={product.image} alt='Product In Cart Image'/>
            <div>
                <Title>{product.title}</Title>
                <div style={{color: '#ff4c3b'}}>${product.price}</div>
            </div>
        </Product>
        <Amount>{product.amount}</Amount>
        <Price>${product.price * product.amount}</Price>
    </Item>
  )
}

export default CheckoutItem