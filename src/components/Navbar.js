import React from "react";
import styled, { keyframes } from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
const NavContainer = styled.div`
  color: black;
  background-color: lightgrey;
  display: flex;
  padding-top: 15px;
  padding: 10px 40px;
`;
const Left = styled.div`
  flex: 1;
  align-items: flex-start;
`;
const Logo = styled.img`
  width: 250px;
  margin-left: 20px;
`;
const Right = styled.div`
  flex: 2;
`;
const Values = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const linkHover = keyframes`
  to {
    transform: scaleX(0.9);
  }
`;
const Value = styled.h2`
  padding: 5px;
  position: relative;
  color: white;
  text-decoration: none;
  display: inline-block;
  color: black;
  cursor: pointer;
  &:hover {
    color: teal;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    border-radius: 2px;
    background-color: teal;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;

    animation: ${linkHover} 0.3s ease-in-out forwards;
  }

  /* &:hover {
    cursor: pointer;
    color: #357960;
    transform: translateY(-5px);
  } */
`;

const Last = styled.div`
  flex: 1;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;
const Item = styled.h3`
  font-weight: 100;
  color: green;
`;
const Navbar = () => {
  const path = require("../images/logo/de Compras.png");

  return (
    <NavContainer>
      <Left>
        <Logo src={path}></Logo>
      </Left>
      <Right>
        <Values>
          <Link to="/">
            <Value>Home</Value>
          </Link>
          <Link to="/shop">
            <Value>SHOP</Value>
          </Link>
          <Link to="/blog">
            <Value>BLOG</Value>
          </Link>
          <Link to="/about">
            <Value>About</Value>
          </Link>
          <Link to="/contact us">
            <Value>Contact us</Value>
          </Link>
        </Values>
      </Right>
      <Last>
        <Items>
          <Item>Register</Item>
          <Item>Login</Item>
          <ShoppingCartOutlinedIcon>
            <Item />
          </ShoppingCartOutlinedIcon>
        </Items>
      </Last>
    </NavContainer>
  );
};

export default Navbar;
