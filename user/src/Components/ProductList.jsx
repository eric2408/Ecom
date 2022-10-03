import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


function ProductList({cat, filters, sort}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async () => {
      try{
        const res = await axios.get(cat 
          ? `http://localhost:5000/api/products?category=${cat}` 
          : 'http://localhost:5000/api/products/');
        setProducts(res.data)
        console.log(res)
      }catch(e){

      }
    };

    getProducts()
  }, [cat])

  useEffect(()=>{
    cat && setFilteredProducts(
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
    <Container >
        {cat ? filteredProducts.map((i)=> <Product item={i} key={i._id} />)
            : products.slice(0,8).map((i)=> <Product item={i} key={i._id} />)}
    </Container>
  )
}

export default ProductList