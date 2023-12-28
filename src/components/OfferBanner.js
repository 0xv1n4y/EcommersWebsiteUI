import React from "react";
import { styled } from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: 50vh;
`;
const BannerImage = styled.div`
  background-image: url(${require("../images/banner/banner.png")});
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-position: 60%;
  margin-top: 10px;
`;
const BannerValues = styled.div`
  margin: 10px;

`;
const BannerTitle = styled.h2`
  font-size: 70px;
  color: #e3e6f3;
  margin: 10px;
  letter-spacing:2px;
`;
const BannerSubTitle = styled.h1`
  font-size: 100px;
  margin: 20px;
  margin-top: 10px;
  margin-bottom:10px;
  color: #fafafa;
`;
const BannerButton = styled.button`
  padding: 10px 20px;
  background-color: #f4ce14;
  color: #1a1a1a;
  margin: 20px;
  font-weight: bold;
  font-size: 30px;
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

const OfferBanner = () => {
  return (
    <BannerContainer>
      <BannerImage>
        <BannerValues>
          <BannerTitle>LIMITED TIME OFFER</BannerTitle>
          <BannerSubTitle>SALE</BannerSubTitle>
          <BannerButton>Shop Now</BannerButton>
        </BannerValues>
      </BannerImage>
    </BannerContainer>
  );
};

export default OfferBanner;
