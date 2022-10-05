import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import Category from './Category';
import {mobileScreen} from '../Helper';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  background-color: #14141f;
  ${mobileScreen({ padding: "0px", flexDirection:"column" })}
`;

function Categories() {
  return (
    <Container>
    {categories.map((i) => (
      <Category item={i} key={i.id} />
    ))}
  </Container>
  )
}

export default Categories