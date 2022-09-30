import React from 'react'
import styled from "styled-components";
import { mobileScreen } from '../Helper';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Padding = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobileScreen({ width: "75%" })}
`;

const Logo = styled.h1`
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Box = styled.div`
    border: 1mm solid grey;
`

const Title = styled.h1`
  margin: 15px 20px;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  margin: 15px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
`;

function Register() {
  return (
    <Container >
      <Padding>
        <Logo>VIRTUAL SPACE</Logo>
        <Box>
            <Title>CREATE ACCOUNT</Title>
            <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
            </Form>
        </Box>
      </Padding>
    </Container>
  )
}

export default Register