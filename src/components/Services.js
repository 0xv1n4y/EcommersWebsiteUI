import React from "react";
import { styled } from "styled-components";

const Container = styled.div``;
const ServicesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 50px;
 
  flex-wrap: wrap;
`;
const Service = styled.div`
  width: 220px;
  text-align: center;
  padding: 40px 15px;
  border: 2px solid #e3e6f3;
  border-radius: 10%;
  margin: 15px 0;
  transition: 0.3s ease;
  &:hover{
    background-color: #e3e6f3;
    box-shadow:5px 5px 5px  rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
`;
const ServiceLogo = styled.img`
  max-width: 70%;
 
`;
const ServiceName = styled.h3``;

const Services = () => {
  const serviceLogo = require("../images/features/free_shipping.png");
  return (
    <Container>
      <ServicesList>
        <Service>
          <ServiceLogo src={serviceLogo} />
          <ServiceName>Free Shipping</ServiceName>
        </Service>
        <Service>
          <ServiceLogo src={serviceLogo} />
          <ServiceName>Online Order</ServiceName>
        </Service>
        <Service>
          <ServiceLogo src={serviceLogo} />
          <ServiceName>Discounts</ServiceName>
        </Service>
        <Service>
          <ServiceLogo src={serviceLogo} />
          <ServiceName>Custom Styling</ServiceName>
        </Service>
        <Service>
          <ServiceLogo src={serviceLogo} />
          <ServiceName>24 x 7 Support</ServiceName>
        </Service>
      </ServicesList>
    </Container>
  );
};

export default Services;
