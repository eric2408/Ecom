import React from 'react';
import Topbar from '../AdminComponents/Topbar';
import Sidebar from '../AdminComponents/Sidebar';
import styled from 'styled-components';

const Container = styled.div`
`

function HomeAd () {
  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar />
    </Container>
    </>

  )
}

export default HomeAd