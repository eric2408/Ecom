import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Product from './Product';
import axios from 'axios';


const Section = styled.div`
  background-color: white;
  padding-top: 3rem;
  padding-bottom: 5rem;
`

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
`;

const Section_head = styled.div`
    margin-bottom: 4rem;
    text-align: center;
`

const Header = styled.h2`
    color:  #14141f;
    font-size: 36px;
`


function ProductList({cat, filters, sort}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(cat 
          ? `http://localhost:8080/api/products?category=${cat}` 
          : 'http://localhost:8080/api/products/');
        setProducts(res.data)
        console.log(res)
      }catch(e){

      }
    };

    getProducts()
  }, [cat])

  useEffect(()=>{
    setFilteredProducts(
      products.filter(i => 
        Object.entries(filters).every(([key, value]) => i[key].includes(value)))
    );
  }, [cat, filters, products])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "ascending") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Section>
      <Section_head>
        <Header>Popular Products</Header>
      </Section_head>
      <Container >
          {filteredProducts.map((i)=> <Product item={i} key={i._id} />)}
      </Container>
    </Section>

  )
}

export default ProductList