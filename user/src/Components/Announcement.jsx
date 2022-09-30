import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: skyblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>Free Shipping on Orders Over $49!</Container>
  )
}

export default Announcement