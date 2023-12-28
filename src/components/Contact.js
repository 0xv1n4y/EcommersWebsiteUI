import React from "react";
import styled from "styled-components";

// Styled components
const Container = styled.div`
  background-image: url(${require("../images/banner/banner_4.png")});
  margin: 70px 0;
`;

const Items = styled.div`
  padding: 40px 0px 20px 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

const SubTitles = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const SubTitle1 = styled.p`
  color: white;
`;

const SubTitle2 = styled.p`
  color: yellow;
  font-weight: 600;
`;

const Form = styled.form``;

const Input = styled.input`
  padding: 10px 30px 14px;
  border-radius: 4px;
  border: none;
  border:1px solid white;
  outline: none; 
  &::placeholder{
    position: absolute;
    top:2;
    left:0;
    
    font-size:18px;
  
  }

`;

const Button = styled.button`
   padding: 10px 10px 14px;
  margin-left:5px;
  border-radius:5px;
  border: none;
  outline: none; 
  font-weight:700;
  background-color:yellow;
`;

// Main Contact component
const Contact = () => {
  return (
    <Container>
      <Items>
        <Title>Subscribe for Latest Updates</Title>
        <SubTitles>
          <SubTitle1>
            Get a mail whenever we have something new for you.
          </SubTitle1>
          <SubTitle2>You are Special to Us</SubTitle2>
        </SubTitles>
        <Form>
          <Input type="text" placeholder="Your Email Address" />
          <Button>Sign Up</Button>
        </Form>
      </Items>
    </Container>
  );
};

export default Contact;
