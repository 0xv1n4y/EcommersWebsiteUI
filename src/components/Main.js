import React from "react";
import { styled } from "styled-components";


const MainContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
 
`;
const Left = styled.div`
  width: 50%;
  margin-top: 140px;
  margin-left: 80px;

`;
const Names = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Nameh4 = styled.h4`
  font-size: 20px;
  color: #222;
  padding-bottom: 18px;
`;
const Nameh2 = styled.h2`
  font-size: 46px;
  line-height: 54px;
  color: #222;
`;
const Nameh1 = styled.h1`
  font-size: 50px;
  line-height: 64px;
  color: #357960;
`;
const Namep = styled.p`
  color: #465b52;
  margin: 15px 0 20px 0;
  font-size: 20px;
`;

const ShopButton = styled.button`
  padding: 10px 20px;
  background-color: #357960;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  }
`;

const Right = styled.div`

  width: 100%;
  display: flex;
  align-items:center;
  justify-content:flex-start;
 
`;
const Image = styled.img`
  height: auto;
  width: 100%;
  background-size: cover;
  background-position: top 25%, right 0;
  margin-right: 50px;
`;

const Main = () => {
  const imagePath = require("../images/header/image_1.png");

  return (
    <MainContainer>
      <Left>
        <Names>
          <Nameh4>Go Back to Your Roots</Nameh4>
          <Nameh2>Super Value Deals</Nameh2>
          <Nameh1>On All Products</Nameh1>
          <Namep>Save More in this Festive Season</Namep>
          <ShopButton>Shop Now</ShopButton>
        </Names>
      </Left>
      <Right>
        <Image src={imagePath} />
      </Right>
    </MainContainer>
  );
};

export default Main;
