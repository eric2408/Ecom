import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SettingsIcon from '@mui/icons-material/Settings';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #14141f;
    position: sticky;
    top: 0;
    z-index: 999;
`

const TopbarWrapper = styled.div`
    height: 100%;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h1`
  font-weight: bold;
  color: #6f50e6;
`;

const TopRight = styled.div`
    display: flex;
    align-items: center;
`
const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 40px;
    color: white;
    :hover{
      color: #6f50e6;
    }
`


const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`

function Topbar() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Container>
    <TopbarWrapper>
      <div>
        <Link to="/" style={{textDecoration: 'none'}}>
          <Logo>Virtual Space</Logo>
        </Link>
      </div>
      <TopRight>
        <IconContainer>
          <GTranslateIcon />
        </IconContainer>
        <IconContainer>
            <Badge badgeContent={2} color="secondary">
                <NotificationsNoneIcon/>
            </Badge>
        </IconContainer>
        <IconContainer>
            <Badge badgeContent={2} color="secondary">
                <SettingsIcon />
            </Badge>
        </IconContainer>
        <Img src={user.img}/>
      </TopRight>
    </TopbarWrapper>
  </Container>
  )
}

export default Topbar