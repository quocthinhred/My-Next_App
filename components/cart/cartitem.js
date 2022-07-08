import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
import { useCartContext } from '../../context/cartState'

const Card = styled.div`
    border: 1px solid #eee;
    margin: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
    &.hidden {
        display: none;
    }
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
    let [cookie, setCookie] = useCookies("listProducts");
    const [count, setCount] = useState(1);
    const cartState = useCartContext();
    
    console.log("CartItem", cookie.listProducts);
    // ListProducts = cookie.listProducts?cookie.listProducts:[];
    useEffect(()=>{
        if (cookie.listProducts){
            cookie.listProducts.forEach(item => {
                if (item.id == product.id){
                    setCount(item.amount)
                }
            })
        }
    }, [cartState.listProducts])

    useEffect(()=>{
        console.log("Before Count: ", product.title, cookie.listProducts)
        for (let item of cookie.listProducts) {
            if (item.id == product.id){
                item.amount = +count;
            }
        }
        setCookie("listProducts", JSON.stringify(cookie.listProducts), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
        })
        console.log("After Count: ", cookie.listProducts)
    }, [count])

    const [mount, setMount] = useState(1);

    useEffect(()=>{
        let Total = 0;
        for (let item of cookie.listProducts) {
            Total = Total + item.price*item.amount;
        }
        cartState.setTotal(Math.round(Total * 100) / 100);
    }, [count, mount])
    
    

    const DeleteItem = ()=>{
        console.log("Before Delete: ", cookie.listProducts);
        cookie.listProducts.forEach((item, index) => {
            if (item.id == product.id){
                cookie.listProducts.splice(index, 1);
            }
        })
        console.log("After Delete 1: ", cookie.listProducts);
        setCookie("listProducts", JSON.stringify(cookie.listProducts), {
            path: "/",
            maxAge: 3600, // Expires after 1hr
            sameSite: true,
        })
        cartState.setListProducts(cookie.listProducts);
        console.log("After Delete 2: ", cookie.listProducts);
        setCount(0);
        setMount(0);
    }

    if (count === 0) {
        return null;
    }
    
    

  return (
    <Card className={mount?'':'hidden'}>
        <Image src={product.image} alt='Product In Cart Image'/>
        <Text>
            <Title>{product.title}</Title>
            <div style={{color: '#ff4c3b'}}>${product.price}</div>
        </Text>
        <Input>
            <Count value={count} onChange={(e)=>{e.target.value?setCount(e.target.value):setCount(1)}} type='number' max="9" min="1" step="1" />
        </Input>
        <Delete onClick={DeleteItem}>
            <FontAwesomeIcon icon={faTrash} />
        </Delete>
    </Card>
  )
}

export default CartItem