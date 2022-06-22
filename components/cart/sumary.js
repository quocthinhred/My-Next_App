import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../../context/cartState'


const Summary = styled.div`
    margin: 20px;
    padding: 30px;
    border: 1px solid #eee;
`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
`

const Label = styled.div`
    color: #999;
    font-size: 18px;
`

const Price = styled.div`
    color: #ff4c3b;
    font-size: 18px;
`

const Button = styled.div`
    width: 100%;
    background: #ff4c3b;
    color: white;
    text-align: center;
    padding: 7px;
    cursor: pointer;
    border-radius: 2px;
    &:hover{
        opacity: 0.7;
        transition: 0.3s;
    }
`

const Sumary = () => {

    const cartState = useCartContext();
    

  return (
    <Summary>
        <h3>Order Summary</h3>
        <Total>
            <Label>Total</Label>
            <Price>{cartState.total}</Price>
        </Total>
        <Button onClick={()=>{cartState.setShowCheckout(true)}}>CHECKOUT</Button>
    </Summary>
  )
}

export default Sumary