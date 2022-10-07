import React from 'react'
import styled from 'styled-components';
import { userRequest } from "../requestAxios";
import { useEffect, useState } from "react";

const Container = styled.div`
    flex: 1;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    padding: 20px;
    margin-right: 20px;
`

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`
const UL = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const List = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
`

const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`

const User = styled.div`
    display: flex;
    flex-direction: column;
`

const Username = styled.span`
    font-weight: 600;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #6f50e6;
    color: white;
    cursor: pointer;
`



function SmallBox() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Your Customers</Title>
      <UL>
        {users.map((user) => (
        <List key={user._id}>
          <Img src={ user.img ||"https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}/>
          <User>
            <Username>{user.username}</Username>
          </User>
          <Button>
            Display
          </Button>
        </List>
        ))}
      </UL>
    </Container>
  )
}

export default SmallBox