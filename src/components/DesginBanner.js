import React from "react";
import { styled } from "styled-components";

const DesginContainer = styled.div``;
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0px 70px;
`;
const LeftContainer = styled.div`
  background-image: url(${require("../images/banner/banner_2.png")});
  width: 49%;
  height: 43vh;
  background-size: cover;
  background-position: 60%;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 30px;
  padding-top: 40px;
`;
const Title = styled.h2`
  font-size: 40px;
  color: white;
`;
const SubTitle = styled.h2`
  font-size: 40px;
  color: white;
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 10px 40px;
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease;
  &:hover{
    transform: translateY(-5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  }
`;
const RightContainer = styled.div`
  background-image: url(${require("../images/banner/banner_3.png")});
  width: 49%;
  height: 43vh;
  background-size: cover;
  background-position: 60%;
  border: 1px solid grey;
`;

const DesginBanner = () => {
  return (
    <DesginContainer>
      <MainContainer>
        <LeftContainer>
          <Data>
            <Title>Create Your Own</Title>
            <SubTitle>Desgin</SubTitle>
            <Button>Submit Desgin</Button>
          </Data>
        </LeftContainer>
        <RightContainer></RightContainer>
      </MainContainer>
    </DesginContainer>
  );
};

export default DesginBanner;
