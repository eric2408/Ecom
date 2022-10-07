import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {mobileScreen} from '../Helper';
import { useDispatch, useSelector } from "react-redux";
import {Link } from 'react-router-dom';
import { logout } from '../redux/user';
import { emptyCart } from '../redux/cart';


const Container = styled.div`
    height: 100px;
    background-color: #14141f;
    color: white;
    position: sticky;
    top: 0;
    z-index: 999;
    ${mobileScreen({height: '50px'})}
`
const Padding = styled.div`
  padding: 30px 20px;
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
  display: flex;
  align-items: center;
  margin-left: 25px;
  border-radius:14px;
  `;

const SearchBox = styled.input`
  border: none;
  height:30px;
  font-size:16px;
  border-radius:15px;
  padding-left: 20px;
  ${mobileScreen({width: '50px'})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #6f50e6;
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
  :hover{
    color: #6f50e6;
  }
  margin-left: 25px;
  ${mobileScreen({ fontSize: "12px", marginLeft: "10px" })}
`;

function Navbar() {
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector(state => state.user.currentUser);
  console.log(user)
  const dispatch = useDispatch();


  const handleAuthentication = () => {
    if(user){
      logout(dispatch, user)
      emptyCart(dispatch)
    }
}
  
  
  return (
    <Container>
        <Padding>
            <Left >
                <LangOption >EN</LangOption>
                <SearchContainer >
                    <SearchBox placeholder="search"/>
                    <SearchIcon  style={{ color: "white", 'marginLeft': 8, fontSize: 20, cursor: 'pointer' }}/>
                </SearchContainer>
            </Left>
            <Center>
              <Link style={{textDecoration: 'none'}} to='/'>
                <Logo>VIRTUAL SPACE</Logo>
              </Link>
            </Center>
            <Right >
              {user?.isAdmin && <Link style={{textDecoration: 'none', color: 'white'}} to={'/admin'}>
                <Menu>Sellers</Menu>
              </Link>}
              <Link style={{textDecoration: 'none', color: 'white'}} to={!user && '/register'}>
                <Menu>{user ? `HELLO ${user?.username}` : 'REGISTER'} </Menu>
              </Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to={!user && '/login'}>
                <Menu onClick={() => handleAuthentication()} >{user ? 'SIGN OUT': 'SIGN IN'}</Menu>
              </Link>
                <Link style={{textDecoration: 'none', color: 'white'}} to='/cart'>
                  <Menu >
                      <Badge badgeContent={quantity} color="secondary">
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