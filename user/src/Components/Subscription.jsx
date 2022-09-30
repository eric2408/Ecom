import React from 'react'
import styled from "styled-components";
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { mobileScreen } from '../Helper';

const Container = styled.div`
  height: 40vh;
  background-color: lightblue;
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
  ${mobileScreen({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  font-size: 15px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: skyblue;
  color: white;
  display: flex;
  align-items: center;
  font-size: 15px;
  justify-content: center;
  cursor: pointer;
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