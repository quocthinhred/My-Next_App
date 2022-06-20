import React from 'react'
import styled from 'styled-components'

function Slider() {

    const Image = styled.img`
        width: 100vw;
        height: 400px;
    `;

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