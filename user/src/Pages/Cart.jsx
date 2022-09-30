import React from 'react';
import styled from "styled-components";
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Image } from '@mui/icons-material';
import { mobileScreen } from '../Helper';

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
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Padding>
        <Title>Shopping Cart</Title>
        <Orders>
          <Information>
            <Product>
              <Detail>
                <Img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Description>
                  <Name>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </Name>
                  <Id>
                    <b>ID:</b> 93813718293
                  </Id>
                  <Color color="black" />
                  <Size>
                    <b>Size:</b> 37.5
                  </Size>
                </Description>
              </Detail>
              <Price>
                <AmountContainer>
                  <AddIcon />
                  <Amount>2</Amount>
                  <RemoveIcon />
                </AmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </Price>
            </Product>
            <Hr />
            <Product>
              <Detail>
                <Img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <Description>
                  <Name>
                    <b>Product:</b> HAKURA T-SHIRT
                  </Name>
                  <Id>
                    <b>ID:</b> 93813718293
                  </Id>
                  <Color color="gray" />
                  <Size>
                    <b>Size:</b> M
                  </Size>
                </Description>
              </Detail>
              <Price>
                <AmountContainer>
                  <AddIcon />
                  <Amount>1</Amount>
                  <RemoveIcon />
                </AmountContainer>
                <ProductPrice>$ 20</ProductPrice>
              </Price>
            </Product>
          </Information>
          <OrderSummary>
            <STitle>ORDER SUMMARY</STitle>
            <SItem>
              <SItemText>Subtotal</SItemText>
              <SItemPrice>$ 80</SItemPrice>
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
              <SItemPrice>$ 80</SItemPrice>
            </SItem>
            <Button>CHECKOUT NOW</Button>
          </OrderSummary>
        </Orders>
      </Padding>
      <Footer />
    </Container>
  )
}

export default Cart