import React from 'react'
import { useState } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styled from "styled-components";
import { sliderItems } from '../data';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrows = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === 'left' && '10px'};
  right: ${props => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Padding = styled.div`
  height: 100%;
  display: flex;
  transition: all 1s ease;  
  transform: translateX(${props => props.Index * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  height: 90%;
  width: 100%;
`;



function Sliders() {
    const [Index, setIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === 'left'){
            setIndex(Index > 0 ? Index-1 : 2);
        } else {
            setIndex(Index < 2 ? Index+1 : 0);
        }
    }


  return (
    <Container >
        <Arrows direction='left' onClick={() => handleClick('left')}>
            <KeyboardArrowLeftIcon style={{ height: '100px', width:'100px' }}/>
        </Arrows>
        <Padding Index={Index}>
            {sliderItems.map(i => (
                <Slide key={i.id}>
                    <Img src={i.img}/>
                </Slide>
            ))}
        </Padding>
        <Arrows direction='right' onClick={() => handleClick('right')}>
            <KeyboardArrowRightIcon style={{ height: '100px', width:'100px' }}/>
        </Arrows>
    </Container>
  )
}

export default Sliders