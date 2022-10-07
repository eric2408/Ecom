import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../requestAxios";
import moment from "moment";

const Container = styled.div`
    flex: 2;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 20px;
`
const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const TR = styled.tr`
`
const TH = styled.th`
    text-align: left;
`
const User= styled.td`
    display: flex;
    align-items: center;
    font-weight: 600;
`
const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const Username = styled.span`
`
const Dates = styled.td`
    font-weight: 300;
`
const Amount = styled.td`
    font-weight: 300;
`

const Status = styled.td`
`

const Button = styled.button`
  padding: 8px 9px;
  border: none;
  border-radius: 10px;
  color: black;
  background-color: ${props => props.type === 'success' && '#abd98c'};
  background-color: ${props => props.type === 'pending' && '#9bc4e2'};
  background-color: ${props => props.type === 'cancelled' && '#d07a7a'};
`


function BigBox() {

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/?new=true");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  

      return (
        <Container>
          <Link to="/admin/orders" style={{textDecoration: 'none', color: 'black'}}>
            <Title>Latest Orders</Title>
          </Link>
          <Table>
            <thead>
            <TR>
              <TH>Customer</TH>
              <TH>Date</TH>
              <TH>Amount</TH>
              <TH>Status</TH>
            </TR>
            </thead>
            <tbody>
            {orders.map((order) => (
            <TR>
              <User key={order._id}>
                <Img src={order.img ||"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} />
                <Username>{order.username}</Username>
              </User>
              <Dates>{moment(`${order.createdAt}`).utc().format('YYYY-MM-DD')}</Dates>
              <Amount>${order.amount}</Amount>
              <Status>
                <Button type={order.status}>{order.status}</Button>
              </Status>
            </TR>
            ))}
            </tbody>
          </Table>
        </Container>
      )
}

export default BigBox