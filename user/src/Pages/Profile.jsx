import React, { useState } from 'react'
import styled from 'styled-components';
import { updateUser } from '../redux/user';
import { useSelector, useDispatch } from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Announcement from '../Components/Announcement'


const Container = styled.div`
    display: block;
    text-align: center;
`

const Title = styled.h1`
    margin-bottom: 50px;
`

const ProductContainer = styled.div`
    margin-top: 60px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;  
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

function Profile() {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const user = useSelector((state) => state.user.currentUser);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };

    console.log(inputs)
  
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
            const userInfo = {...inputs, img: downloadURL};
            updateUser(user._id, userInfo, dispatch)
          });
        }
      );
    };

    return (
      <Container>
      <Announcement />
        <Navbar />
              <ProductContainer>
                  <Title>Profile Settings</Title>
                  <Form>
                      <Product>
                          <Label>Image</Label>
                          <Input type="file" id="file" onChange={(e) => setFile(e.target.files[0])}/>
                      </Product>
                      <Product>
                          <Label>Username</Label>
                          <Input name="username" type="text" placeholder={user.username} onChange={handleChange}/>
                      </Product>
                      <Product>
                          <Label>Email</Label>
                          <Input name="email" type="text" placeholder={user.email} onChange={handleChange}/>
                      </Product>
                      <Button onClick={handleSubmit}>Update My Profile</Button>
                  </Form>
              </ProductContainer>
            <Footer/>
      </Container>
    )
}

export default Profile