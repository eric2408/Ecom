import React from 'react'
import styled from 'styled-components';
import { featureData } from '../data';

const Container = styled.div`
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0.75rem;
    padding-right:  0.75rem;
`
const Section = styled.div`
    background-color: #14141f;
    padding-top: 5rem;
    padding-bottom: 5rem;
`
const Section_head = styled.div`
    margin-bottom: 4rem;
    text-align: center;
`

const Header = styled.h2`
    color: white;
    font-size: 36px;
`

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
`

const ServiceCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
`

const ServiceIcon = styled.div`
    color: #6f50e6;
    opacity: 0.9;
    font-size: 2.2rem;
    line-height: 1;
`

const ServiceDetails = styled.div`
    color: white;
    p {
        font-size: 0.875rem;
        margin-top: 0.4rem;
        opacity: 0.8;               
    }
`


const Features = () => {
    return (
      <>
        <Section>
          <Container>
            <Section_head>
                <Header>Our Advantages</Header>
            </Section_head>
            <Wrapper>
              {
                featureData.map((item) => {
                  const { id, icon, title, info } = item;
  
                  return (
                    <ServiceCard key={id}>
                      <ServiceIcon>{icon}</ServiceIcon>
                      <ServiceDetails>
                        <h4>{title}</h4>
                        <p>{info}</p>
                      </ServiceDetails>
                    </ServiceCard>
                  );
                })
              }
            </Wrapper>
          </Container>
        </Section>
      </>
    );
  };
  
  export default Features;