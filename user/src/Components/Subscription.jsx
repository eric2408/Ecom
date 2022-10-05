import React from 'react'
import styled from "styled-components";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { mobileScreen } from '../Helper';

const Container = styled.div`
  height: 40vh;
  background-color: #14141f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobileScreen({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 15px;
  ${mobileScreen({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 7;
  padding-left: 20px;
  font-size: 15px;
  border-radius: 15px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #6f50e6;
  color: white;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
`;

function Subscription() {
  return (
    <Container>
        <Title>Subscribe For New Products & Special Offers</Title>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            Subscribe
            <MailOutlineOutlinedIcon style={{ 'marginLeft': "10px" }}/>
          </Button>
        </InputContainer>
    </Container>
  )
}

export default Subscription