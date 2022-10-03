import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {mobileScreen} from '../Helper';
import {useSelector} from 'react-redux';
import {Link } from 'react-router-dom';

const Container = styled.div`
    height: 90px;
    ${mobileScreen({height: '50px'})}
`
const Padding = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileScreen({padding: '10px 0px'})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LangOption = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobileScreen({display: 'none'})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const SearchBox = styled.input`
  border: none;
  ${mobileScreen({width: '50px'})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobileScreen({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobileScreen({ flex: 2, justifyContent: "center" })}
`;

const Menu = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobileScreen({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity)
  
  return (
    <Container>
        <Padding>
            <Left >
                <LangOption >EN</LangOption>
                <SearchContainer >
                    <SearchBox />
                    <SearchIcon  style={{ color: "gray", fontSize: 16 }}/>
                </SearchContainer>
            </Left>
            <Center>
              <Link to='/'>
                <Logo>VIRTUAL SPACE</Logo>
              </Link>
            </Center>
            <Right >
              <Link to='/register'>
                <Menu >REGISTER</Menu>
              </Link>
              <Link to='/login'>
                <Menu >SIGN IN</Menu>
              </Link>
                <Link to='/cart'>
                  <Menu >
                      <Badge badgeContent={quantity} color="primary">
                          <ShoppingCartIcon />
                      </Badge>
                  </Menu>
                </Link>
            </Right>
        </Padding>
    </Container>
  )
}

export default Navbar