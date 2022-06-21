import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid #eee;
    margin: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`

const Image = styled.img`
    max-width: 80px;
    height: 80px;
    flex: 1;
`

const Text = styled.div`
    flex: 4;
`

const Count = styled.input`
    outline-color: #ff4c3b;
    text-align: center;
    transition: 0.5s;
    width: 100%;
    line-height: 30px;
    border: 1px solid #eee;
    &:hover {
        border: 1px solid #ff4c3b;
        border-radius: 2px;
    }
`

const Delete = styled.div`
    flex: 1;
    cursor: pointer;
    text-align: center;
    &:hover {
        opacity: 0.5;
        transition: 0.2s;
    }
`

const Input = styled.div`
    flex: 1;
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

const CartItem = ({product}) => {

    const [count, setCount] = useState(1);

  return (
    <Card>
        <Image src={product.image} alt='Product In Cart Image'/>
        <Text>
            <Title>{product.title}</Title>
            <div style={{color: '#ff4c3b'}}>${product.price}</div>
        </Text>
        <Input>
            <Count value={count} onChange={(e)=>{e.target.value?setCount(e.target.value):setCount(1)}} type='number' max="9" min="1" step="1" />
        </Input>
        <Delete>
            <FontAwesomeIcon icon={faTrash} />
        </Delete>
    </Card>
  )
}

export default CartItem