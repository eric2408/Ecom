import React from 'react'
import styled from 'styled-components';

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

const UserJob = styled.span`
    font-weight: 300;
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
  return (
    <Container>
      <Title>New Join Members</Title>
      <UL>
        <List>
          <Img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <User>
            <Username>Joe Rogan</Username>
            <UserJob>Software Engineer</UserJob>
          </User>
          <Button>
            Display
          </Button>
        </List>
        <List>
            <Img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <User>
            <Username>Anna Keller</Username>
            <UserJob>Software Engineer</UserJob>
          </User>
          <Button>
            Display
          </Button>
        </List>
        <List>
            <Img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <User>
            <Username>Anna Keller</Username>
            <UserJob>Software Engineer</UserJob>
          </User>
          <Button>
            Display
          </Button>
        </List>
        <List>
            <Img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <User>
            <Username>Anna Keller</Username>
            <UserJob>Software Engineer</UserJob>
          </User>
          <Button>
            Display
          </Button>
        </List>
        <List>
            <Img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
          <User>
            <Username>Anna Keller</Username>
            <UserJob>Software Engineer</UserJob>
          </User>
          <Button>
            Display
          </Button>
        </List>
      </UL>
    </Container>
  )
}

export default SmallBox