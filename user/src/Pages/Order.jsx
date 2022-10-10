import React from 'react'
import styled from "styled-components";
import Navbar from '../Components/Navbar';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Features from '../Components/Features';
import { useEffect, useState } from "react";
import { userRequest } from "../requestAxios";
import moment from "moment";
import { useSelector} from "react-redux";


const Container = styled.div`
`;

const OrderContainer = styled.div`
    padding: 20px 80px;
`;


const Title = styled.h1`
    margin: 30px 0;
`;

const SmTitle = styled.h2`
    margin: 30px 0;
`;

const Orderss = styled.div`
    padding: 40px;
    margin: 20px 0;
    border: 1px solid lightgray;
    background-color: white;
    position: relative;
`;

const OrderId = styled.div`
    position: absolute;
    top: 40px;
    right: 20px;
`;

const Total = styled.h3`
    font-weight: 500;
    text-align: right;
    margin-bottom: 15px;
`;

const CheckoutProduct = styled.div`
    display: flex;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const ProductImg = styled.img`
    object-fit: contain;
    width: 180px;
    height: 180px;
`;

const ProductInfo = styled.div`
    padding-left: 20px;
`;

const ProductTitle = styled.p`
    padding-left: 20px;
    font-weight: 1000;
    font-size: 20px;
`;

const Button = styled.button`
    justify-content:flex-end;
    text-align: right;
    float: right;
    border-radius: 15px;
    padding: 10px;
    border: 2px solid red;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
    background-color: red;
    color: white;
    }
`;



function Order() {

    const [orders, setOrders] = useState([]);
    const product = useSelector(state => state.product.products);
    const userId = useSelector((state) => state.user.currentUser._id);

    useEffect(() => {
      const getOrders = async () => {
        try {
          const res = await userRequest.get("/orders/"+userId);
          const newRes = await res.data.map(({_id, products, createdAt, status, amount}) => ({id: _id, products, createdAt, status, amount}));
          setOrders(newRes);
        } catch {}
      };
      getOrders();
    }, []);
    
  
    const handleDelete = async(id) => {
      try {
        const res = await userRequest.delete(`orders/${id}`);
        setOrders(orders.filter(item => item.id !== id));
      } catch {}
    };
    

  return (
    <Container>
      <Announcement />
      <Navbar />
        <OrderContainer>
            <Title>Your Orders</Title>
            <div>
            {orders.map((i, index)=>(
            <Orderss key={index}>
                <SmTitle>Order</SmTitle>
                <p>Ordered On: {moment(`${i.createdAt}`).utc().format('YYYY-MM-DD')}</p>
                <OrderId>Order Number: <small>{i.id}</small></OrderId>
                {i.products.map((j, index)=> (
                    <div key={index}>
                        <CheckoutProduct>
                            <ProductImg src={product[product.findIndex((item) => item._id === j.productId)].img} />
                            <ProductInfo>
                                <ProductTitle>{product[product.findIndex((item) => item._id === j.productId)].title}</ProductTitle>
                            </ProductInfo>
                        </CheckoutProduct>
                    </div>
                ))}
                <Total>Order Total: ${i.amount}</Total>
                <Button onClick={() => handleDelete(i.id)}>Cancel Order</Button>
            </Orderss>
            ))} 
            </div>
        </OrderContainer>
      <Features />
      <Footer />
  </Container>
  )
}

export default Order