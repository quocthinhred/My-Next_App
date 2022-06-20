import React from 'react'
import styled from 'styled-components'

function ProductCard(props) {
    const Image = styled.img`
        width: 100%;
        height: 75%;
    `

    const Card = styled.div`
        margin: 20px;
        width: 20vw;
        height: 40vw;
        max-width: 280px;
        max-height: 400px;
        border-radius: 2px;
        border: 1px solid #eee;
        cursor: pointer;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.5s;
        }
    `

    const Name = styled.div`
        padding: 5%;
    `

    const Price = styled.div `
        padding: 5%;
        padding-top: 0;
    `

    return (
        <Card>
            <Image src='/image/slider1.jpg' alt='category' />
            <Name>
                {props.name}
            </Name>
            <Price>
                {props.price}
            </Price>
        </Card>
    )
}

export default ProductCard