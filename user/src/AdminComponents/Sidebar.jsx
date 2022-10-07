import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';
import TimelineIcon from '@mui/icons-material/Timeline';
import PaidIcon from '@mui/icons-material/Paid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MessageIcon from '@mui/icons-material/Message';

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color:#E7E3E8;
    position: sticky;
    top: 50px;
`

const Wrapper = styled.div`
    padding: 20px;
    color: black;
`

const BarContainer = styled.div`
    margin-bottom: 10px;
    margin-left: 25px;
    margin-top: 45px;
`

const Title = styled.h3`
    font-size: 20px;
    color: black;
    margin-bottom: 10px;
`

const List = styled.ul`
    list-style: none;
    padding: 5px;
`

const ActiveItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background-color: #E7E3E8;
    :hover {
        color:white;
        background-color: #6f50e6;
    }
`

const Item = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    :hover {
        color:white;
        background-color: #6f50e6;
    }
`

const Icon = styled.div`
    margin-right: 5px;
    font-size: 20px !important;
`

function Sidebar() {
  return (
    <Container>
    <Wrapper>
      <BarContainer>
        <Title>Dashboard</Title>
        <List>
          <Link to="/admin" style={{textDecoration: 'none', color: 'black'}}>
          <ActiveItem>
            <Icon>
            <ArticleIcon />
            </Icon>
            Home
          </ActiveItem>
          </Link>
          <Item>
            <Icon>
                <TimelineIcon />
            </Icon>
            Analytics
          </Item>
          <Item>
            <Icon>
                <PaidIcon />
            </Icon>
            Net Profit
          </Item>
        </List>
      </BarContainer>
      <BarContainer>
        <Title>Manage</Title>
        <List>
          <Link to="/admin/products/" style={{textDecoration: 'none', color: 'black'}}>
            <Item>
                <Icon>
                    <Inventory2Icon />
                </Icon>
              Products
            </Item>
          </Link>
          <Link to="/admin/orders" style={{textDecoration: 'none', color: 'black'}}>
            <Item>
              <Icon>
                  <ReceiptLongIcon />
              </Icon>
              Orders
            </Item>
          </Link> 
            <Item>
            <Icon>
                <AssessmentIcon />
            </Icon>
            Reports
          </Item>
        </List>
      </BarContainer>
      <BarContainer>
        <Title>Notifications</Title>
        <List>
          <Item>
            <Icon>
                <MailOutlineIcon />
            </Icon>
            Mail
          </Item>
          <Item>
            <Icon>
                <MessageIcon />
            </Icon>
            Messages
          </Item>
        </List>
      </BarContainer>
    </Wrapper>
  </Container>
  )
}

export default Sidebar