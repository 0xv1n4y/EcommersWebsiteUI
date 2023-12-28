import React from "react";
import { styled } from "styled-components";

const IndiaDiv = styled.div`
  background-color:#c0c0c0;
`;

const IndiaContainer = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content:center;
  gap:20px;
  padding:10px;
  flex-wrap:wrap-reverse;

`;

const IndiaHeading = styled.h1`
   font-size: 40px;
  position: relative;

  &:hover {
    background: linear-gradient(
      to right,
      #ff9933 0%,
      #ff9933 33%,
      #fff 33%,
      #fff 66%,
      #138808 66%,
      #138808 100%
    );
    cursor: pointer;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

const IndiaImage = styled.img`
  width: 90px;
  margin-top: 5px;
 
  
`;

const IndiaBanner = () => {
  const indiaImagePath = require("../images/india/flag.PNG");
  return (
    <IndiaDiv>
      <IndiaContainer>
        <IndiaHeading>Made In India for India</IndiaHeading>
        <IndiaImage src={indiaImagePath} alt="India Image" />
      </IndiaContainer>
    </IndiaDiv>
  );
};

export default IndiaBanner;
