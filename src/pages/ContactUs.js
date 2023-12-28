import React from "react";
import { styled } from "styled-components";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainContainer = styled.div``;

const ContactContainer = styled.div``;

const Top = styled.div``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 50px;
`;

const Items = styled.div`
  flex: 1;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 20px;
`;

const Title1 = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Title2 = styled.h2`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Title3 = styled.h3`
  font-size: 25px;
`;

const LogosLinksContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  color: teal;
  gap: 30px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  gap: 30px;
`;

const Details = styled.p`
  font-weight: 400;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const MapFrame = styled.iframe`
  width: 600px;
  height: 400px;
`;

const Last = styled.div`
  border: 1px solid lightgray;
  padding: 50px 60px;
  display: flex;
  margin: 20px 20px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 2;

  /* background-color:yellow; */
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 300px;
  gap: 20px;
  margin-bottom: 20px;
`;

const Message1 = styled.span`
  font-size: 20px;
`;

const Message2 = styled.h2`
  font-size: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  border: 0.5px solid light grey;
  border-radius: 3px;
  
  box-shadow: none;
  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid light grey;
  &::placeholder {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
  }
`;

const Button = styled.button`
  width: 15%;
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color:#34cceb;
  border-radius: 8px;
  border: none;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  }
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top:50px;
  margin-left:50px;

 
`;

const TopDetails = styled.div`
  display: flex;
  flex-direction: column;
 

  
  
`;

const BottomDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left:40px;
 

`;

const TitleDetail = styled.h4`
  font-size: 20px;
  font-weight: 600;
`;

const SpanDetail = styled.p`
  font-size: 15px;
  font-weight: 300;
  
`;

const ContactUs = () => {
  return (
    <MainContainer>
      <Navbar />
      <ContactContainer>
        <Top></Top>
        <Bottom>
          <Items>
            <Titles>
              <Title1>Get In Touch</Title1>
              <Title2>Visit us or Contact us</Title2>
              <Title3>Address</Title3>
            </Titles>
            <LogosLinksContainer>
              <Logos>
                <MapIcon />
                <MailIcon />
                <PhoneIcon />
                <AccessTimeFilledIcon />
              </Logos>
              <Links>
                <Details>Shaitan Gali, Khatra Mahal</Details>
                <Details>aditya.win.official@gmail.com</Details>
                <Details>+917838178945</Details>
                <Details>10 00 - 18 00 IST</Details>
              </Links>
            </LogosLinksContainer>
          </Items>
          <MapContainer>
            <MapFrame
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26030.39498985855!2d138.7273634!3d35.360625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sin!4v1700299713574!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></MapFrame>
          </MapContainer>
        </Bottom>
        <Last>
          <LeftContainer>
            <MessageContainer>
              <Message1>Leave us a Message</Message1>
              <Message2>We love to hear from you</Message2>
            </MessageContainer>

            <Form>
              <Input type="text" placeholder="Your Name" />
              <Input type="text" placeholder="E-mail" />
              <Input type="text" placeholder="Subject" />
              <TextArea
                cols="30"
                rows="10"
                placeholder="Your Message Here"
              ></TextArea>
              <Button>Submit</Button>
            </Form>
          </LeftContainer>
          <RightContainer>
            <TopDetails>
              <TitleDetail>Aditya</TitleDetail>
              <SpanDetail>Co-Founder</SpanDetail>
              <SpanDetail>+917838178945</SpanDetail>
              <SpanDetail>aditya.win.official@gmail.com</SpanDetail>
            </TopDetails>
            <BottomDetails>
              <TitleDetail>Deepanshu</TitleDetail>
              <SpanDetail>Co-Founder</SpanDetail>
              <SpanDetail>+917042815331</SpanDetail>
              <SpanDetail>kumardeepanshu1999@gmail.com</SpanDetail>
            </BottomDetails>
          </RightContainer>
        </Last>
      </ContactContainer>
      <Contact/>
      <Footer/>
    </MainContainer>
  );
};

export default ContactUs;
