import React, {useState} from 'react'
import styled from "styled-components";
import { mobileScreen } from '../Helper';
import { login } from '../redux/user';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  background-color: #14141f;
`;

const Padding = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #14141f;
  ${mobileScreen({ width: "75%" })}
`;

const Logo = styled.h1`
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6f50e6;
    text-align: center;
    margin-bottom: 30px;
    margin-top: 20px;
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
  background-color: #6f50e6;
  color: white;
  cursor: pointer;
  margin: 20px 0px;
  &:disabled{
    color: #6f50e6;
    cursor: not-allowed;
  }
`;

const Links = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
  color: white;
`;

const Error = styled.span`
  color:red;
`

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector((state)=> state.user)

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Padding>
        <Link style={{textDecoration: 'none'}} to='/'>
          <Logo>VIRTUAL SPACE</Logo>
        </Link>
        <Box>
            <Title>SIGN IN</Title>
            <Form>
            <Input placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
            <Input placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
            <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
            {error && <Error>Incorrect username and password</Error>}
            <Links>DO YOU NOT REMEMBER THE PASSWORD?</Links>
            <Link style={{textDecoration: 'none'}} to='/register'>
              <Links>CREATE A NEW ACCOUNT</Links>
            </Link>

            </Form>
        </Box>
      </Padding>
    </Container>
  )
}

export default Login