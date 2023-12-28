import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Container = styled.div`
  background-color: lightgray;
  height: 25%;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const Top = styled.div`
  padding-bottom: 10px;
`;

const Bottom = styled.div`
  display: flex;

  align-items: center;
  gap: 20px;
`;

const Name = styled.p`
  font-size: 20px;
  transition: transform 0ms.5 ease-out;
`;

const SocialMediaLogo = styled.div`
  color:teal;
  &:hover{
    color: ${({ color }) => color || "teal"};
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Items>
        <Top>
          <Name>Copyright &copy; de Compras.</Name>
        </Top>
        <Bottom>
          <SocialMediaLogo color=" #3b5998">
            <FacebookIcon style={{ fontSize: "40px" }}/>
          </SocialMediaLogo>
          <SocialMediaLogo color="red">
            <InstagramIcon style={{ fontSize: "40px" }}/>
          </SocialMediaLogo>
          <SocialMediaLogo color="#1DA1F2">
            <TwitterIcon  style={{ fontSize: "40px" }}/>
          </SocialMediaLogo>
        </Bottom>
      </Items>
    </Container>
  );
};

export default Footer;
