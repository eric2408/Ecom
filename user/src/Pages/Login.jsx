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
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: skyblue;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Padding>
        <Logo>VIRTUAL SPACE</Logo>
        <Box>
            <Title>SIGN IN</Title>
            <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>DO YOU NOT REMEMBER THE PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Box>
      </Padding>
    </Container>
  )
}

export default Login