import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


const Container = styled.div`
  /* Add your global styles here */
`;

const SingleProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin-top: 20px;
  /* Add additional styles as needed */
`;

const Left = styled.div`
  width: 60%;
  margin-left: 50px;
  /* Add additional styles as needed */
`;

const Top = styled.div`
  /* Add styles for the top section */
`;

const MainImage = styled.img`
  width: 500px;
`;

const Bottom = styled.div`
  display: flex;
  gap: 7px;
`;

const Images = styled.div`
  display: flex;
  /* Add styles for the images section */
`;

const Image = styled.img`
  width: 120px;
  /* Add styles for individual images */
  cursor: pointer;
`;

const Right = styled.div`
  width: 75%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* Add additional styles as needed */
`;

const TopDesc = styled.div``;

const Title = styled.h3``;
const SubTitle = styled.h2`
  margin-top: 30px;
`;
const Price = styled.h1`
  margin-top: 20px;
  font-size: 40px;
`;

const Select = styled.select`
  padding: 7px;
`;
const Option = styled.option``;

const Middle = styled.div`
  display: flex;
  gap: 30px;
  font-size: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Amount = styled.span`
  border: 2px solid grey;
  padding: 3px 15px;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-weight: 700;
  font-size: 17px;
  background-color: yellow;
  border: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.7);
  }
`;

const Last = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;
const DescTitle = styled.h2``;
const Desc = styled.p`
  letter-spacing: 1px;
`;

const SingleProduct = () => {

  const [mainImage, setMainImage] = useState(
    require("../images/products/f1.jpg")
  );

  const relatedImages = [
    require("../images/products/f2.jpg"),
    require("../images/products/f3.jpg"),
    require("../images/products/f4.jpg"),
    require("../images/products/f5.jpg"),
  ];

  const handleImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  return (
    <Container>
      <Navbar />
      <SingleProductContainer>
        <Left>
          <Top>
            <MainImage src={mainImage} />
          </Top>
          <Bottom>
            <Images>
              {relatedImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Related Product ${index}`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </Images>
          </Bottom>
        </Left>
        <Right>
          <TopDesc>
            <Title>Home / Tree</Title>
            <SubTitle>Astronaut T-Shirt</SubTitle>
            <Price>499.00</Price>
            <Select>
              <Option>Select Size</Option>
              <Option>XL</Option>
              <Option>L</Option>
              <Option>M</Option>
              <Option>S</Option>
              <Option>XS</Option>
            </Select>
          </TopDesc>
          <Middle>
            <AmountContainer>
              <AddIcon />
              <Amount>1</Amount>
              <RemoveIcon />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </Middle>

          <Last>
            <DescTitle>Product Details</DescTitle>
            <Desc>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
              ducimus quisquam omnis, harum cum quae unde ipsam enim tempore,
              eum corporis sed optio repudiandae, asperiores neque quidem sint
              ea consectetur!
            </Desc>
          </Last>
        </Right>
      </SingleProductContainer>
      <Contact />
      <Footer />
    </Container>
  );
};

export default SingleProduct;
