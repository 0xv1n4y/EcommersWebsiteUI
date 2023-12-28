import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { allProducts } from "../data/Products";
import styled from "styled-components";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Container = styled.div``;
const ProductsContainer = styled.div``;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  flex-wrap: wrap;
  margin: 10px 30px;
`;
const Banner = styled.div`
  background-image: url(${require("../images/banner/banner_4.png")});
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-position: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerTitle = styled.h1`
color:#FFFAFA`;

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

const Titleh5 = styled.h5`
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

const PaginationContainer = styled.div`
  padding-left: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
  color: teal;
`;

const ShopPage = () => {
  //Pagination
  const productsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const indexofLastProduct = currentPage * productsPerPage;
  const indexofFirstProduct = indexofLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container>
      <Navbar />
      <Banner>
        <BannerTitle>All Products</BannerTitle>
      </Banner>

      <ProductsContainer>
        <Bottom>
          {currentProducts.map((product) => (
            <Items>
              <Image src={product.image} />

              <ItemData>
                <TitleSpan>{product.title}</TitleSpan>
                <Titleh5>{product.desc}</Titleh5>
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
                  <ItemPrice>{product.price}</ItemPrice>
                  <LogoContainer>
                    <ItemCartLogo>
                      <ShoppingBagOutlinedIcon />
                    </ItemCartLogo>
                  </LogoContainer>
                </ItemsTotal>
              </ItemData>
            </Items>
          ))}

          <PaginationContainer>
            <Stack spacing={2} style={{ color: "teal" }}>
              <Pagination
                count={Math.ceil(allProducts.length / productsPerPage)}
                shape="rounded"
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
              />
            </Stack>
          </PaginationContainer>
        </Bottom>
      </ProductsContainer>
      <Contact />
      <Footer />
    </Container>
  );
};

export default ShopPage;
