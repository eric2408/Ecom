import React from 'react';
import styled from 'styled-components';

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
const Date = styled.td`
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
  background-color: ${props => props.type === 'declined' && '#d07a7a'};
`


function BigBox() {

      return (
        <Container>
          <Title>Latest transactions</Title>
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
            <TR>
              <User>
                <Img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Username>Susan Carol</Username>
              </User>
              <Date>2 Jun 2021</Date>
              <Amount>$122.00</Amount>
              <Status>
                <Button type='success'>success</Button>
              </Status>
            </TR>
            <TR>
              <User>
                <Img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Username>Susan Carol</Username>
              </User>
              <Date>2 Jun 2021</Date>
              <Amount>$122.00</Amount>
              <Status>
                <Button type='success'>success</Button>
              </Status>
            </TR>
            <TR>
              <User>
                <Img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Username>Susan Carol</Username>
              </User>
              <Date>2 Jun 2021</Date>
              <Amount>$122.00</Amount>
              <Status>
                <Button type='pending'>pending</Button>
              </Status>
            </TR>
            <TR>
              <User>
                <Img src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Username>Susan Carol</Username>
              </User>
              <Date>2 Jun 2021</Date>
              <Amount>$122.00</Amount>
              <Status>
                <Button type='declined'>declined</Button>
              </Status>
            </TR>
            </tbody>
          </Table>
        </Container>
      )
}

export default BigBox