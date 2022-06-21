import React from 'react'
import styled from 'styled-components'


    const Image = styled.img `
        width: 100%;
        height: 80%;
    `

    const Card = styled.div `
        margin: 10px;
        width: 22vw;
        height: 18vw;
        max-width: 340px;
        max-height: 210px;
        border-radius: 2px;
        border: 1px solid #eee;
        cursor: pointer;
        &:hover{
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            transition: 0.5s;
        }
    `

    const Text = styled.div `
        padding: 3%;
        text-transform: capitalize;
    `

function CategoryCard(props) {

    

  return (
    <Card>
        <Image src={props.image} alt='category'/>
        <Text>
            {props.name}
        </Text>
    </Card>
  )
}

export default CategoryCard