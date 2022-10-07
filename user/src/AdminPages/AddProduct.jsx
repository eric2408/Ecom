import React from 'react'
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`
const Main = styled.div`
  flex: 4;
  margin-top: 30px;
`

const Title = styled.h1`
    margin-bottom: 50px;
`

const ProductContainer = styled.div`
    margin-top: 60px;
    margin-left: 100px;
    flex: 4;
`
const Form = styled.form`
    margin-top: 10px;
`
const Product = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const Label = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`
const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
`
const Select = styled.select`
  padding: 10px;
`

const Button = styled.button`
  margin-top: 40px;
  padding: 20px;
  border: none;
  border-radius: 10px;
  background-color: #6f50e6;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

function AddProduct() {
  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
        <Main>
            <ProductContainer>
                <Title>Add Information Here</Title>
                <Form>
                    <Product>
                        <Label>Image</Label>
                        <Input type="file" id="file"/>
                    </Product>
                    <Product>
                        <Label>Name</Label>
                        <Input type="text" placeholder="Apple Airpods" />
                    </Product>
                    <Product>
                        <Label>Stock</Label>
                        <Input type="text" placeholder="123" />
                    </Product>
                    <Product>
                        <Label>Active</Label>
                        <Select name="active" id="active">
                            <option value="=yes">Yes</option>
                            <option value="no">No</option>
                        </Select>
                    </Product>
                    <Button>Create a New Product</Button>
                </Form>
            </ProductContainer>
        </Main>
    </Container>
    </>
  )
}

export default AddProduct