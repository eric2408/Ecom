import React from 'react';
import styled from 'styled-components';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from "react";
import { userRequest } from "../requestAxios";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Wrapper = styled.div`
    flex: 1;
    margin: 0px 20px;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Title = styled.span`
    font-size: 20px;
`

const InfoContainer = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
`

const Amount = styled.span`
    font-size: 30px;
    font-weight: 600;
`

const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`


const NegativeIcon = styled.div`
    font-size: 14px;
    margin-left: 5px;
    color: red;
`

const PositiveIcon = styled.div`
    font-size: 14px;
    margin-left: 5px;
    color: green;
`

const Desc = styled.span`
    font-size: 15px;
    color: gray;
`



function Info() {
  const [revenue, setRevenue] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const cost = 1500;

  useEffect(() => {
    const getRevenue = async () => {
      try {
        const res = await userRequest.get("orders/revenue");
        setRevenue(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getRevenue();
  }, []);

  return (
    <Container>
    <Wrapper>
      <Title>Revenue</Title>
      <InfoContainer>
        <Amount>${revenue[1]?.total}</Amount>
        <Rate>
        {Math.floor(percentage)}%{" "}
            {percentage < 0 ? (
              <NegativeIcon>
                <ArrowDownwardIcon/>
              </NegativeIcon>
            ) : (
              <PositiveIcon>
                <ArrowUpwardIcon/>
              </PositiveIcon>
            )}
        </Rate>
      </InfoContainer>
      <Desc>Compared to last month</Desc>
    </Wrapper>
    <Wrapper>
      <Title>Profit</Title>
      <InfoContainer>
        <Amount>${revenue[1]?.total-cost}</Amount>
        <Rate>
          -14% 
          <NegativeIcon>
            <ArrowDownwardIcon/>
          </NegativeIcon>
        </Rate>
      </InfoContainer>
      <Desc>Compared to last month</Desc>
    </Wrapper>
    <Wrapper>
      <Title>Cost</Title>
      <InfoContainer>
        <Amount>${cost}</Amount>
        <Rate>
          +32% 
          <PositiveIcon>
            <ArrowUpwardIcon/>
          </PositiveIcon>
        </Rate>
      </InfoContainer>
      <Desc>Compared to last month</Desc>
    </Wrapper>
  </Container>
  )
}

export default Info