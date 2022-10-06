import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Container = styled.div`
    margin: 30px;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const Title = styled.h3`
    margin: 20px;
`

function Chart({ title, data, dataKey, grid }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="black" />
          <Line type="monotone" dataKey={dataKey} stroke="#6f50e6" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" />}
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default Chart