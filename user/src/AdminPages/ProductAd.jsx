import React from 'react'
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Chart from "../AdminComponents/Chart"
import { productData } from "../adminData"
import FileUploadIcon from '@mui/icons-material/FileUpload';


const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 4;
  margin-top: 30px;
`
const ProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    margin-left: 30px;
`
const Add = styled.button`
    border: none;
    padding: 5px;
    background-color: #6f50e6;
    color: white;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-right: 40px;
    margin-top: 20px;
`
const Top = styled.div`
    display: flex;
`
const TopR = styled.div`
    flex: 2;
`
const TopL = styled.div`
  flex: 1;
  padding: 20px;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`
const Img = styled.img`
    margin-top: 10px;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
`
const InfoT = styled.div`
    display: flex;
    align-items: center;
`
const InfoB = styled.div`
    margin-top: 10px;
    margin-left: 170px;
`
const Name = styled.span`
    font-weight: 600;
`

const InfoContainer = styled.span`
    width: 150px;
    display: flex;
    justify-content: space-between;
`
const Key = styled.span`
`

const Val = styled.span`
    font-weight: 300;
`

const Bottom = styled.div`
    padding: 20px;
    margin: 20px 500px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Forms = styled.form`
    display: flex;
    justify-content: space-between;
`

const FormL = styled.div`
    display: flex;
    flex-direction: column;
`

const FormLLabel = styled.label`
    margin-bottom: 10px;
    color: black;
`
const FormLInput = styled.input`
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border: 1px solid gray;
`
const Select = styled.select`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const FormR = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

const Upload = styled.div`
    display: flex;
    align-items: center;
`

const PrevImg = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 20px;
    margin-bottom: 15px;
`

const FinalButton = styled.button`
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #6f50e6;
    color:white;
    cursor: pointer;
    font-size: 16px;
`
const Option = styled.option`
`
const MiniTitle = styled.h3`
    margin-top: 25px;
    margin-bottom: 25px;
`

const Icon = styled.div`
    cursor: pointer;
`

function ProductAd() {
  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
        <Main>
            <ProductContainer>
                <TitleContainer>
                    <Title>Product</Title>
                    <Link to="/admin/addproduct">
                        <Add>Add a New Product</Add>
                    </Link>
                </TitleContainer>
                <Top>
                    <TopL>
                        <InfoT>
                            <Img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <Name>Name: Apple Airpods</Name>
                        </InfoT>
                        <InfoB>
                            <InfoContainer>
                                <Key>id:</Key>
                                <Val>123</Val>
                            </InfoContainer>
                            <InfoContainer>
                                <Key>sales:</Key>
                                <Val>5123</Val>
                            </InfoContainer>
                            <InfoContainer>
                                <Key>active:</Key>
                                <Val>yes</Val>
                            </InfoContainer>
                            <InfoContainer>
                                <Key>in stock:</Key>
                                <Val>yes</Val>
                            </InfoContainer>
                        </InfoB>
                    </TopL>
                    <TopR>
                        <Chart data={productData} dataKey="Sales" title="Number of Goods Sold"/>
                    </TopR>
                </Top>
                <Bottom>
                    <MiniTitle>Edit Product Information</MiniTitle>
                    <Forms>
                        <FormL>
                            <FormLLabel>Product Name</FormLLabel>
                            <FormLInput type="text" placeholder="Apple AirPod" />
                            <FormLLabel>In Stock</FormLLabel>
                            <Select name="inStock" id="idStock">
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                            </Select>
                            <FormLLabel>Active</FormLLabel>
                            <Select name="active" id="active">
                                <Option value="yes">Yes</Option>
                                <Option value="no">No</Option>
                            </Select>
                        </FormL>
                        <FormR>
                            <Upload>
                                <PrevImg src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                                <label htmlFor="file">
                                    <Icon>
                                        <FileUploadIcon />
                                    </Icon>
                                </label>
                                <input type="file" id="file" style={{display:"none"}} />
                            </Upload>
                            <FinalButton>Update</FinalButton>
                        </FormR>
                    </Forms>
                </Bottom>
            </ProductContainer>
        </Main>
    </Container>
    </>
  )
}

export default ProductAd