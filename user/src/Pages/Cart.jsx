import React from 'react';
import styled from "styled-components";
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Image } from '@mui/icons-material';
import { mobileScreen } from '../Helper';
import cart from '../redux/cart';
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestAxios";
import { useNavigate } from 'react-router-dom';


const publicKey = "pk_test_51LkzBrHoffqkiVupSdU4Fbe8SwocQzAnycibSRBvY7llyFe8jqxflhDqhxikcwItfswSa5lk8a0ewH2vld9BzsmB00U4HdhCNB";

const Container = styled.div``;

const Padding = styled.div`
  padding: 20px;
  ${mobileScreen({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;


const Orders = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobileScreen({ flexDirection: "column" })}
`;

const Information = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobileScreen({ flexDirection: "column" })}
`;

const Detail = styled.div`
  flex: 2;
  display: flex;
`;

const Img = styled.img`
  width: 200px;
`;

const Description = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Name = styled.span``;

const Id = styled.span``;

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Size = styled.span``;

const Price = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Amount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobileScreen({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobileScreen({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const OrderSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const STitle = styled.h1`
  font-weight: 200;
`;

const SItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SItemText = styled.span``;

const SItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setToken(token)
  }

  useEffect(()=> {
    const req = async () => {
     try{
      const response = await userRequest.post('/checkout/payment', {
        tokenId: token.id,
        amount: cart.total *100
      });
      navigate('/success', { state: {stripeData: response.data, products: cart }});
     } catch (e) {
      console.log(e)
     } 
    };

    token && req();
  }, [token, cart.total, navigate])


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Padding>
        <Title>Shopping Cart</Title>
        <Orders>
          <Information>
            {cart.products.map(product => (
            <Product>
              <Detail>
                <Img src={product.img} />
                <Description>
                  <Name>
                    <b>Product:</b> {product.title}
                  </Name>
                  <Id>
                    <b>ID:</b> {product._id}
                  </Id>
                  <Color color={product.color} />
                  <Size>
                    <b>Size:</b> {product.size}
                  </Size>
                </Description>
              </Detail>
              <Price>
                <AmountContainer>
                  <AddIcon />
                  <Amount>{product.quantity}</Amount>
                  <RemoveIcon />
                </AmountContainer>
                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
              </Price>
            </Product>))}
            <Hr />
          </Information>
          <OrderSummary>
            <STitle>ORDER SUMMARY</STitle>
            <SItem>
              <SItemText>Subtotal</SItemText>
              <SItemPrice>$ {cart.total}</SItemPrice>
            </SItem>
            <SItem>
              <SItemText>Estimated Shipping</SItemText>
              <SItemPrice>$ 5.90</SItemPrice>
            </SItem>
            <SItem>
              <SItemText>Shipping Discount</SItemText>
              <SItemPrice>$ -5.90</SItemPrice>
            </SItem>
            <SItem type="total">
              <SItemText>Total</SItemText>
              <SItemPrice>$ {cart.total}</SItemPrice>
            </SItem>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={publicKey}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </OrderSummary>
        </Orders>
      </Padding>
      <Footer />
    </Container>
  )
}

export default Cart