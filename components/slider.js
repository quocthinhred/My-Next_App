import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
width: 100vw;
height: 500px;
`;

function Slider() {

   

  return (
    <div>
        <Image 
            src='/image/slider1.jpg'
            alt='slider'
        />
    </div>
  )
}

export default Slider