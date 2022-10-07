import React from 'react'
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { productRows } from "../adminData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 4;
  margin-top: 30px;
`
const ProductsContainer = styled.div`
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

const ProductItem = styled.h3`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

const Edit = styled.button`
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    background-color: #3bb077;
    color: white;
    cursor: pointer;
    margin-right: 20px;
`

const Delete = styled.div`
  color: red;
  cursor: pointer;
  margin-top: 5px;
`

const Add = styled.button`
    border: none;
    padding: 10px;
    background-color: #6f50e6;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: 110px;;
    margin-top: 70px;
`

function ProductsAd() {
    const [data, setData] = useState(productRows);
    

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
      };

      const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <ProductItem>
                <Img src={params.row.img} alt="" />
                {params.row.name}
              </ProductItem>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/admin/products/" + params.row.id}>
                  <Edit>Edit</Edit>
                </Link>
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
            <ProductsContainer>
            <Title>Products</Title>
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            rowsPerPageOptions={[8]}
            checkboxSelection
            />
          </ProductsContainer>
          <Link to="/admin/addproduct">
            <Add>Add a New Product</Add>
          </Link>
        </Main>
    </Container>
    </>
  )
}

export default ProductsAd