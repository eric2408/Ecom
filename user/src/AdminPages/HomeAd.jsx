import React, {useEffect, useMemo, useState } from 'react';
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import Info from '../AdminComponents/Info';
import Chart from '../AdminComponents/Chart';
import styled from 'styled-components';
import { userData } from "../adminData";
import SmallBox from '../AdminComponents/SmallBox';
import BigBox from '../AdminComponents/BigBox';
import { userRequest } from "../requestAxios";

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
  const [order, setOrder] = useState([]);

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
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/stats");
        res.data.map((item) =>
          setOrder((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Order Quantity": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);


  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
        <Main>
          <Info/> 
          <Chart data={order} title="Monthly Sales" grid dataKey="Order Quantity" />
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