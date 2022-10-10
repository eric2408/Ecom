import React from 'react'
import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import { mobileScreen } from '../Helper';
import {Link} from 'react-router-dom';

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  padding: 20px;
  ${mobileScreen({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 70px 30px;
  margin-left: 50px;
`;

const Logo = styled.h1`
  color: #6f50e6;
`;

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
  padding: 70px 30px;
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
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 80px;
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
        <Link style={{textDecoration: 'none'}} to='/'>
          <Logo>VIRTUAL SPACE</Logo>
        </Link>
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
          <LocationOnIcon style={{marginRight:"10px"}}/> 27 San Carlos St. Buffalo, NY 14215
        </Contact>
        <Contact>
          <PhoneIphoneIcon style={{marginRight:"10px"}}/> +1 234 56 7899
        </Contact>
        <Contact>
          <EmailIcon style={{marginRight:"10px"}} /> jo123@gmail.com
        </Contact>
        <Payment src="https://chargie.org/wp-content/uploads/2021/03/PayPal-stripe-web-opt-300x136-1-300x136-300x136-1.png" />
      </Right>
    </Container>
  )
}

export default Footer