import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
        width: 100%;
        height: 75%;
    `

    const Card = styled.div`
        padding: 15px;
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
        overflow: hidden;
        display: -webkit-box;
        display: inherit;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        white-space: nowrap;
        text-overflow: ellipsis;
    `

    const Price = styled.div `
        padding: 5%;
        padding-top: 0;
    `
    
function ProductCard(props) {
    

    return (
        <Card>
            <Image src={props.image} alt='category' />
            <Name>
                {props.name}
            </Name>
            <Price>
                ${props.price}
            </Price>
        </Card>
    )
}

export default ProductCard