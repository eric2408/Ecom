import React from 'react'
import styled from "styled-components";
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Subscription from '../Components/Subscription';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';
import { mobileScreen } from '../Helper';

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobileScreen({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const Text = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobileScreen({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobileScreen({ margin: "10px 0px" })}
`;
const Option = styled.option``;

function Products() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Products</Title>
      <FilterContainer>
        <Filter>
          <Text>Filter Products:</Text>
          <Select name="color" >
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name="size" >
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <Text>Sort Products:</Text>
          <Select>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <ProductList/>
      <Subscription />
      <Footer />
  </Container>
  )
}

export default Products