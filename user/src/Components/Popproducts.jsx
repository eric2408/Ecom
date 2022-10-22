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



function Popproducts() {
    const [products, setProducts] = useState([]);
  
    useEffect(()=>{
      const getProducts = async () => {
        try{
          const res = await axios.get('"http://3.83.51.198:8080/api/products/');
          setProducts(res.data)
        }catch(e){
  
        }
      };
  
      getProducts()
    }, [products])
  
    return (
      <Section>
        <Section_head>
          <Header>Popular Products</Header>
        </Section_head>
        <Container >
            {products.slice(0,8).map((i)=> <Product item={i} key={i._id} />)}
        </Container>
      </Section>
  
    )
}

export default Popproducts