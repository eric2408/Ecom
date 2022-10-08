import { useEffect, useMemo, useState } from "react";
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import Chart from "../AdminComponents/Chart"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useSelector } from "react-redux";
import { userRequest } from "../requestAxios";
import { updateProduct } from '../redux/product';
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
    margin: 20px 300px;
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

const InfoTitle = styled.h4`
    text-align: center;
    margin-bottom: 15px;
`

function ProductAd() {
    const location = useLocation();
    const pId = location.pathname.split("/")[3];
    const [info, setInfo] = useState([]);
    const product = useSelector(state => state.product.products.find(product => product._id === pId));
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
      const products = useSelector((state) => state.product.products);
      console.log(products)
      console.log(pId, product, file, inputs)
    
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
              const product = {...inputs, img: downloadURL, _id: pId };
              updateProduct(pId, product, dispatch)
            });
          }
        );
      };  



    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
  
    useEffect(() => {
      const getInfo = async () => {
        try {
          const res = await userRequest.get("orders/revenue?id=" + pId);
          const list = res.data.sort((one,two)=>{
              return one._id - two._id
          })
          list.map((item) =>
            setInfo((prev) => [
              ...prev,
              { name: MONTHS[item._id - 1], Sales: item.total },
            ])
          );
        } catch (err) {
          console.log(err);
        }
      };
      getInfo();
    }, [pId, MONTHS]);

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
                            <Img src={product.img} alt="" />
                            <Name>Name: {product.title}</Name>
                        </InfoT>
                        <InfoB>
                            <InfoTitle>Details</InfoTitle>
                            <InfoContainer>
                                <Key>id:</Key>
                                <Val>{product._id}</Val>
                            </InfoContainer>
                            <InfoContainer>
                                <Key>sales:</Key>
                                <Val>5123</Val>
                            </InfoContainer>
                            <InfoContainer>
                                <Key>in stock:</Key>
                                <Val>{product.inStock}</Val>
                            </InfoContainer>
                        </InfoB>
                    </TopL>
                    <TopR>
                        <Chart data={info} title="Number of Goods Sold" dataKey="Sales" />
                    </TopR>
                </Top>
                <Bottom>
                    <MiniTitle>Edit Product Information</MiniTitle>
                    <Forms>
                        <FormL>
                            <FormLLabel>Product Name</FormLLabel>
                            <FormLInput name="title" type="text" placeholder={product.title} size="60" onChange={handleChange}/>
                            <FormLLabel>Product Description</FormLLabel>
                            <FormLInput name="description" type="text" placeholder={product.description} onChange={handleChange}/>
                            <FormLLabel>Price</FormLLabel>
                            <FormLInput name="price" type="text" placeholder={product.price}onChange={handleChange}/>
                            <FormLLabel>In Stock</FormLLabel>
                            <Select name="inStock" id="idStock" onChange={handleChange}>
                                <Option value="true">Yes</Option>
                                <Option value="false">No</Option>
                            </Select>
                        </FormL>
                        <FormR>
                            <Upload>
                                <PrevImg src={product.img} alt="" />
                                <label htmlFor="file">
                                    <Icon>
                                        <FileUploadIcon />
                                    </Icon>
                                </label>
                                <input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                            </Upload>
                            <FinalButton onClick={handleSubmit}>Update</FinalButton>
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