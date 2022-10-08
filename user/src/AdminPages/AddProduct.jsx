import React, { useState } from 'react'
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';
import { addProduct } from '../redux/product';
import { useDispatch } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";

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
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCategory = (e) => {
    setCategory(e.target.value.split(","));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {...inputs, img: downloadURL, categories: category};
          addProduct(product, dispatch)
        });
      }
    );
  };


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
                        <Input type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                    </Product>
                    <Product>
                        <Label>Name</Label>
                        <Input name="title" type="text" placeholder="Meta VR Set" onChange={handleChange}/>
                    </Product>
                    <Product>
                        <Label>Description</Label>
                        <Input name="description" type="text" placeholder="Details" onChange={handleChange}/>
                    </Product>
                    <Product>
                        <Label>Categories</Label>
                        <Input type="text" placeholder="VR GEARS,Games,Accessories" onChange={handleCategory}/>
                    </Product>
                    <Product>
                        <Label>Price</Label>
                        <Input name="price" type="text" placeholder="Price" onChange={handleChange}/>
                    </Product>
                    <Product>
                        <Label>Stock</Label>
                        <Select name="inStock" onChange={handleChange}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                        </Select>
                    </Product>
                    <Button onClick={handleSubmit}>Create a New Product</Button>
                </Form>
            </ProductContainer>
        </Main>
    </Container>
    </>
  )
}

export default AddProduct