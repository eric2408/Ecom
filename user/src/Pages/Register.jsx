import React, { useState } from 'react'
import styled from "styled-components";
import { mobileScreen } from '../Helper';
import {Link} from 'react-router-dom';
import { generalRequest } from "../requestAxios";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-color: #14141f;
`;

const Padding = styled.div`
  width: 40%;
  padding: 20px;
  background-color:#14141f;
  ${mobileScreen({ width: "75%" })}
`;

const Logo = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6f50e6;

`


const Box = styled.div`
    border: 1mm solid white;
`

const Title = styled.h1`
  margin: 15px 20px;
  font-size: 24px;
  font-weight: 300;
  color: white;
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
  color: white;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #6f50e6;
  color: white;
  cursor: pointer;
`;

function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try{
      const res = await generalRequest.post('/auth/register', {username, email, password});
      navigate('/login');
    } catch(er){
      console.log(er)
    }
  }

  return (
    <Container >
      <Padding>
                <Link style={{textDecoration: 'none'}} to='/'>
                  <Logo>VIRTUAL SPACE</Logo>
                </Link>
        <Box>
            <Title>CREATE ACCOUNT</Title>
            <Form>
            <Input placeholder="Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
            <Input placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
            <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
            <Input placeholder="Confirm Password" />
            <Agreement>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button  onClick={handleRegister} >CREATE</Button>
            </Form>
        </Box>
      </Padding>
    </Container>
  )
}

export default Register