import React from 'react';
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import Info from '../AdminComponents/Info';
import Chart from '../AdminComponents/Chart';
import styled from 'styled-components';
import { userData } from "../adminData";
import SmallBox from '../AdminComponents/SmallBox';
import BigBox from '../AdminComponents/BigBox';


const Container = styled.div`
  display: flex;
`

const Main = styled.div`
  flex: 4;
  margin-top: 30px;
`
const ContainerTwo = styled.div`
  display: flex;
  margin: 20px;
`

function HomeAd () {
  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
        <Main>
          <Info/> 
          <Chart data={userData} title="Active Monthly User" grid dataKey="Active User" />
          <ContainerTwo>
            <SmallBox />
            <BigBox />
          </ContainerTwo>
        </Main>
    </Container>
    </>

  )
}

export default HomeAd