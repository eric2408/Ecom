import React from 'react'
import styled from 'styled-components';
import { mobileScreen } from '../Helper';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  height: 70vh;
  position: relative;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Information = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:black;
    cursor: pointer;
    font-weight: 600;
`;

function Category({ item }) {
  return (
    <Container >
        <Img src={item.img}/>
        <Information >
            <Title >{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Information>

    </Container>
  )
}

export default Category