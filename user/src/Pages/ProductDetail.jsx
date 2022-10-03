import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Subscription from '../Components/Subscription';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobileScreen } from '../Helper';
import { useLocation } from "react-router";
import {generalRequest} from '../requestAxios';
import { addProduct } from '../redux/cart';
import { useDispatch } from 'react-redux';

const Container = styled.div``;

const Padding = styled.div`
  padding: 50px;
  display: flex;
  ${mobileScreen({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobileScreen({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobileScreen({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobileScreen({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const ColorOptions = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const SizeOption = styled.option``;

const Quantity = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobileScreen({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid skyblue;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: skyblue;
    color: white;
  }
`;

function ProductDetail() {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await generalRequest.get("/products/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);


  const handleClick = (sign) => {
    if(sign === 'subtract' ){
      quantity > 1 && setQuantity(quantity -1)
    } else {
      setQuantity(quantity +1)
    }
  }

  const handleAddCart =()=>{
    dispatch(addProduct({... product, quantity, color, size }))
  }

  return (
    <Container>
        <Announcement />
        <Navbar />
        <Padding>
            <ImgContainer>
                <Img src={product.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Description>
                  {product.description}
                </Description>
                <Price>$ {product.price}</Price>
                <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {product.color?.map((c) => (
                      <ColorOptions color={c} key={c} onClick={()=> setColor(c)}/>
                    ))}
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize onClick={(e)=> setSize(e.target.value)}>
                    {product.size?.map((s) => (
                    <SizeOption key={s}>{s}</SizeOption>
                ))}
                    </FilterSize>
                </Filter>
                </FilterContainer>
                <Quantity>
                    <AmountContainer>
                        <RemoveIcon onClick={()=> handleClick('subtract')}/>
                        <Amount>{quantity}</Amount>
                        <AddIcon onClick={()=> handleClick('addition')}/>
                    </AmountContainer>
                    <Button onClick={handleAddCart}>ADD TO CART</Button>
                </Quantity>
            </InfoContainer>
        </Padding>
        <Subscription />
        <Footer />
  </Container>
  )
}

export default ProductDetail