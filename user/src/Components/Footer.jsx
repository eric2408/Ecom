import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { mobileScreen } from '../Helper';

const Container = styled.div`
  display: flex;
  ${mobileScreen({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const CompanyDescription = styled.p`
  margin: 50px 0px;
  font-size: 16px;
`;

const SocialMedia = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobileScreen({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
`;


const Page = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Contact = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


function Footer() {
  return (
    <Container>
      <Left>
        <Logo>VIRTUAL SPACE</Logo>
        <CompanyDescription>
          Join Virtual Space! Time go a fascinating world!
        </CompanyDescription>
        <SocialMedia>
          <Icon color="4267B2">
            <FacebookIcon />
          </Icon>
          <Icon color="cd486b">
            <InstagramIcon />
          </Icon>
          <Icon color="1DA1F2">
            <TwitterIcon />
          </Icon>
        </SocialMedia>
      </Left>
      <Center>
        <Title>Support</Title>
        <List>
          <Page>About Virtual Space</Page>
          <Page>My Account</Page>
          <Page>My Orders</Page>
          <Page>My Favorites</Page>
          <Page>My Cart</Page>
          <Page>Privacy Policy</Page>
          <Page>Refund Policy</Page>
          <Page>Terms of Service</Page>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <Contact>
          <LocationOnIcon style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </Contact>
        <Contact>
          <PhoneIphoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
        </Contact>
        <Contact>
          <EmailIcon style={{marginRight:"10px"}} /> contact@lama.dev
        </Contact>
        <Payment src="https://chargie.org/wp-content/uploads/2021/03/PayPal-stripe-web-opt-300x136-1-300x136-300x136-1.png" />
      </Right>
    </Container>
  )
}

export default Footer