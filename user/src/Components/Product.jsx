import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from 'react-router-dom';



const Padding = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: grey;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 400px;
  max-width: 400px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  &:hover ${Padding}{
    opacity: 0.75;
  }
`;


const Img = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 1s ease;
  &:hover {
    color: #6f50e6;
    transform: scale(1.2);
  }
`;

function Product({ item }) {
  return (
    <Container >
        <Img src={item.img} />
        <Padding >
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <Link  style={{textDecoration: 'none', color: 'black'}} to={`/product/${item._id}`}>
                  <ZoomInOutlinedIcon />
                </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon />
            </Icon>
        </Padding>
    </Container>
  )
}

export default Product