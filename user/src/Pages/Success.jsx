import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestAxios";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import robo from '../img/sq.png';

const Container = styled.div`
  height: 100%;
  display: flex;
  flexDirection: column;
  alignItems: center;
  justifyContent: center;
`
const Message = styled.h2`
  padding: 50px;
`

const Img = styled.img`
  width: 60vh;
  height: 60vh;
`

const Button = styled.button`
  border-radius: 15px;
  padding: 15px;
  border: 2px solid #6f50e6;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  marginTop: 50px;
  &:hover {
    background-color: #6f50e6;
    color: white;
  }
`;


const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);


  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders/", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch(e) {
        console.log(e)
      }
    };
    data && createOrder();
  }, [cart, data, currentUser]);


  return (
    <Container>
      <Img src={robo} />
      <Message>
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull Transaction. Your order record is being prepared...`}
        <Link to='/' >
          <Button>Go to Homepage</Button>
        </Link>
      </Message>
    </Container>
  );
};

export default Success;