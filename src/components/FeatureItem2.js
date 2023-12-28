import React, { useState } from "react";
import { styled } from "styled-components";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { products } from "../data/Products";
// Styled components
const FeatureContainer = styled.div`
  width: 100vw;
`;

const Container = styled.div`
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const TopTitle = styled.h2`
  font-size: 50px;
`;

const TopSubTitle = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
  color: gray;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  flex-wrap: wrap;
  margin: 10px 30px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 50px 10px;
  border: 2px solid #e3e6f3;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
`;

const Image = styled.img`
  width: 260px;
  border-radius: 10px;
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 90px;
  margin-top: 20px;
`;

const TitleSpan = styled.span`
  color: teal;
  font-weight: 600;
`;

const TitleH5 = styled.h5`
  font-weight: 600;
  padding-top: 10px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Star = styled.div`
  color: gold;
`;

const ItemsTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemPrice = styled.span`
  font-weight: 600;
`;

const LogoContainer = styled.div`
  border: 1px solid grey;
  padding: 5px 5px 0 5px;
  border-radius: 7px;
  background-color: lightgray;
  color: teal;
`;

const ItemCartLogo = styled.div``;

// Functional component
const FeatureItems2 = () => {


  const [product, setProduct] = useState(products);

  return (
    <FeatureContainer>
      <Container>
        <Top>
          <TopTitle>Trending Themes</TopTitle>
          <TopSubTitle>Be a Trend Setter</TopSubTitle>
        </Top>
        
          <Bottom>
          {product.map((singleProduct) => (
            <Items>
              <Image src={singleProduct.image} />
              <ItemData>
                <TitleSpan>{singleProduct.title}</TitleSpan>
                <TitleH5>{singleProduct.desc}</TitleH5>
                <Stars>
                  <Star>
                    <StarBorderPurple500OutlinedIcon />
                  </Star>
                  <Star>
                    <StarBorderPurple500OutlinedIcon />
                  </Star>
                  <Star>
                    <StarBorderPurple500OutlinedIcon />
                  </Star>
                  <Star>
                    <StarBorderPurple500OutlinedIcon />
                  </Star>
                  <Star>
                    <StarBorderPurple500OutlinedIcon />
                  </Star>
                </Stars>
                <ItemsTotal>
                  <ItemPrice>499</ItemPrice>
                  <LogoContainer>
                    <ItemCartLogo>
                      <ShoppingBagOutlinedIcon />
                    </ItemCartLogo>
                  </LogoContainer>
                </ItemsTotal>
              </ItemData>
            </Items>
        ))}
          </Bottom>
      </Container>
    </FeatureContainer>
  );
};

export default FeatureItems2;
