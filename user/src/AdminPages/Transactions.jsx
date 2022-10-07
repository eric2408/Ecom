import React from 'react'
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useEffect, useState } from "react";
import { userRequest } from "../requestAxios";
import moment from "moment";


const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 4;
  margin-top: 30px;
`
const TransactionContainer = styled.div`
  flex: 4;
  height: 530px;
  margin-left: 40px;
  margin-right: 100px;
`
const Title = styled.h3`
    margin-left: 40px;
    margin-bottom: 25px;
    font-size: 22px;
    font-weight: 600;
`

const Users = styled.div`
  display: flex;
  align-items: center;
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

const Img = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`


const Delete = styled.div`
  color: red;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 40px;
`

function UserAd() {
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        const newRes = await res.data.map(({_id, username, createdAt, status, amount}) => ({id: _id, username, createdAt, status, amount}));
        setOrders(newRes);

      } catch {}
    };
    getOrders();
  }, []);



  const handleDelete = async(id) => {
    try {
      const res = await userRequest.delete(`orders/${id}`);
      setOrders(orders.filter(item => item.id !== id));
    } catch {}
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <Users>
            <Img src={params.row.img || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} alt="" />
            {params.row.username}
          </Users>
        );
      },
    },
    { field: "createdAt",
      headerName: "Date", 
      width: 200, 
      renderCell: (params) => {
        return (
          <div>{moment(`${params.row.createdAt}`).utc().format('YYYY-MM-DD')}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <Button type={params.row.status}>{params.row.status}</Button>
        );
      },
    },
    {
      field: "amount",
      headerName: "Transactions",
      width: 160,
    },
    {
      field: "edit",
      headerName: "Cancel Orders",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Delete>
              <HighlightOffIcon
                onClick={() => handleDelete(params.row.id)}
              />
            </Delete>
          </>
        );
      },
    },
  ];




  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
        <Main>
          <TransactionContainer>
            <Title>Latest Orders</Title>
            <DataGrid
            rows={orders}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
            />
          </TransactionContainer>
        </Main>
    </Container>
    </>
  )
}

export default UserAd