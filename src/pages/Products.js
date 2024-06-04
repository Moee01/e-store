import * as React from "react";
import styled from "styled-components";
import  Headphones  from "../assets/Headphones.png";
import Console from "../assets/Console.png"
import Laptop from "../assets/Laptop.png"
import { Button } from "@mui/material";
import './Cart'

const handleMouseEnter = (e) => {
  var parent = e.target;
  var button = parent.querySelector(".button")
  if (button) {
    button.style.display = "flex";
  }
}

const handleMouseLeave = (e) => {
  var parent = e.target;
  var button = parent.querySelector(".button")
  if (button) {
    button.style.display = "none";
  }
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #fdfdfd;
  width: 100%;
  padding: 26px 60px;
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  font-size: 16px;
  color: #3a3a3a;
  font-weight: 500;
  @media (max-width: 991px) {
    padding: 0 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Brand = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const BrandText = styled.span`
  font-family: Poppins, sans-serif;
`;

const Category = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const CategoryText = styled.span`
  font-family: Poppins, sans-serif;
`;

const MainSection = styled.main`
  margin-top: 30px;
  width: 100%;
  max-width: 1317px;
  @media (max-width: 991px) {

  }
`;

const MainContent = styled.section`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 0 20px;
  @media (max-width: 991px) {

    margin-top: 18px;
  }
`;

const SidebarSection = styled.section`
  margin-bottom: 24px;
`;

const SidebarTitle = styled.h2`
  color: #507a7a;
  font: 500 16px Poppins, sans-serif;
  display: flex;
  justify-content: space-between;
`;

const Reset = styled.span`
  color: #595959;
  font: 400 15px Poppins, sans-serif;
`;

const CategoryList = styled.ul`
  margin-top: 13px;
  list-style: none;
  padding: 0;
`;

const CategoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  color: #222;
  font-weight: 400;
`;

const CategoryIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const FilterDivider = styled.hr`
  border-color: rgba(189, 189, 189, 1);
  background-color: #bdbdbd;
  height: 1px;
  margin: 22px 0;
`;

const FilterTitle = styled.h3`
  color: var(--a, #003f62);
  font: 500 16px Poppins, sans-serif;
  margin-bottom: 13px;
`;

const FilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FilterItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
  color: #222;
  font-weight: 400;
`;

const FilterName = styled.span`
  font-family: Poppins, sans-serif;
`;

const FilterCount = styled.span`
  font-family: Poppins, sans-serif;
`;

const FilterIcon = styled.div`
  width: 30px;
  height: 30px;
  background: ${props => props.background || '#c1dcdc'};
  border-radius: 8px;
`;

const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width:1200px;
`;

const ProductCard = styled.article`
  width: 25%;
  padding: 23px 13px;
  border-radius: 19.671px;
  border: 1px solid rgba(182, 182, 182, 1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {

    margin-top: 26px;
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  margin-bottom: 22px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ProductImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductBadge = styled.div`
  width: 28px;
  height: 28px;
  background-color: #c1dcdc;
  border-radius: 122.396px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ProductName = styled.h3`
  color: #507a7a;
  font: 500 17px Poppins, sans-serif;
`;

const ProductPrice = styled.span`
  color: #4a4a4a;
  font: 600 17px Poppins, sans-serif;
  margin-top: 16px;
`;

const Banner = styled.section`
  display: flex;
  width: 100%;
  margin-top: 58px;
  padding: 77px 60px;
  background-image: url('https://cdn.builder.io/api/v1/image/assets/TEMP/541df8dfd8c95570c2b7e549d289eb2b818687a6ebb0a86a7cf636b121e5d937?apiKey=274884d2faec4e898ef9c9aa92060d27&');
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const BannerContent = styled.div`
  margin-left: auto;
  text-align: right;
  width: 369px;
  max-width: 100%;
  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

const BannerButton = styled.button`
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  padding: 12px 32px;
  font: 500 14px Poppins, sans-serif;
  margin-top: 36px;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 12px 20px;
  }
`;

const BannerHeader = styled.h2`
  font: 700 41px Poppins, sans-serif;
  margin-top: 36px;
`;

const BannerText = styled.p`
  font: 500 18px Poppins, sans-serif;
  margin-top: 12px;
`;
const App = () => (
  <Container>
    <Header style={{marginRight:'190px'}}>
      <Navigation>
        <Brand >
          <BrandText>Home</BrandText>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/684fc4ef54d0953fb0d9528148c51e453c35eb975a3339677812713ff882707a?apiKey=274884d2faec4e898ef9c9aa92060d27&" alt="" />
        </Brand>
        <Category >
          <CategoryText>All category</CategoryText>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/684fc4ef54d0953fb0d9528148c51e453c35eb975a3339677812713ff882707a?apiKey=274884d2faec4e898ef9c9aa92060d27&" alt="" />
        </Category>
      </Navigation>
    </Header>
    <MainSection style={{marginRight:'230px'}}>
      <MainContent>
        <Sidebar >
          <SidebarSection>
            <SidebarTitle>
              Categories
              <Reset>Reset</Reset>
            </SidebarTitle>
            <CategoryList>
              <CategoryItem>
                <CategoryIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/3acbbd83f138327193ccef1a3628d102a6040bce6af67d7d352315cfe9368208?apiKey=274884d2faec4e898ef9c9aa92060d27&" alt="" />
                <FilterName>All categories</FilterName>
                <FilterCount>10</FilterCount>
              </CategoryItem>
              {[
                { icon: "", name: "Tablet", count: "5" },
                { icon: "", name: "Laptop", count: "5" },
                { icon: "", name: "Headphones", count: "5" },
                { icon: "", name: "Console", count: "5" },
                { icon: "", name: "Other", count: "5" }
              ].map(({ icon, name, count }, index) => (
                <CategoryItem key={index}>
                  <FilterIcon />
                  <FilterName>{name}</FilterName>
                  <FilterCount>{count}</FilterCount>
                </CategoryItem>
              ))}
            </CategoryList>
            <FilterDivider />
            <FilterTitle>Avaliability</FilterTitle>
            <FilterList>
              <FilterItem>
                <FilterName>0 selected</FilterName>
                <Reset>Reset</Reset>
              </FilterItem>
              {[
                { background: "#c1dcdc", name: "In stock", count: "5" },
                { background: "#e4f5f5", name: "Out of stock", count: "0" }
              ].map(({ background, name, count }, index) => (
                <FilterItem key={index}>
                  <FilterIcon style={{ background }} />
                  <FilterName style={{ color: name === "Out of stock" ? "#afafaf" : "#222" }}>{name}</FilterName>
                  <FilterCount style={{ color: name === "Out of stock" ? "#9c9c9c" : "#222" }}>{count}</FilterCount>
                </FilterItem>
              ))}
            </FilterList>
            <FilterDivider />
            <FilterTitle>Product type</FilterTitle>
            <FilterList>
              <FilterItem>
                <FilterName>0 selected</FilterName>
                <Reset>Reset</Reset>
              </FilterItem>
              <FilterItem>
                <FilterIcon />
                <FilterName>Smart-watch</FilterName>
                <FilterCount>5</FilterCount>
              </FilterItem>
            </FilterList>
            <FilterDivider />
            <FilterTitle>Brand</FilterTitle>
            <FilterList>
              <FilterItem>
                <FilterName>0 selected</FilterName>
                <Reset>Reset</Reset>
              </FilterItem>
              <FilterItem>
                <FilterIcon />
                <FilterName>Smart-watch</FilterName>
                <FilterCount>5</FilterCount>
              </FilterItem>
            </FilterList>
            <FilterDivider />
            <FilterTitle>Color</FilterTitle>
            <FilterList>
              <FilterItem>
                <FilterName>0 selected</FilterName>
                <Reset>Reset</Reset>
              </FilterItem>
              <FilterItem>
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    paddingRight: "8px",
                  }}
                >
                  {[
                    "#eda415",
                    "#e42424",
                    "#1b5a7d",
                    "#acacac",
                    "#1d5f23",
                    "#2e56a3",
                    "#8131a7",
                    "#bc2944",
                    "#9bc14c",
                  ].map((color, index) => (
                    <FilterIcon
                      key={index}
                      style={{
                        backgroundColor: color,
                        borderRadius: "50%",
                        width: "15px",
                        height: "16px",
                      }}
                    />
                  ))}
                </div>
              </FilterItem>
            </FilterList>
            <FilterDivider />
            <FilterTitle>Size</FilterTitle>
            <FilterList>
              <FilterItem>
                <FilterName>0 selected</FilterName>
                <Reset>Reset</Reset>
              </FilterItem>
              {[
                { name: "M", count: "5" },
                { name: "S", count: "5" },
                { name: "X", count: "5" },
                { name: "XX", count: "5" }
              ].map(({ name, count }, index) => (
                <FilterItem key={index}>
                  <FilterIcon />
                  <FilterName>{name}</FilterName>
                  <FilterCount>{count}</FilterCount>
                </FilterItem>
              ))}
            </FilterList>
          </SidebarSection>
        </Sidebar>
        <ProductSection >
          <ProductList>
            {[
              {
                id:1,
                imgSrc: Headphones,
                name: "Wireless headphones",
                price: "$11,70",
              },
              {
                id:2,
                imgSrc: Console,
                name: "Play game",
                price: "$11,70",
              },
              {
                id:3,
                imgSrc: Laptop,
                name: "Tablet as a laptop",
                price: "$11,70",
              },
              {
                id:4,
                imgSrc: Headphones,
                name: "Wireless headphones",
                price: "$11,70",
              },
              {
                id:5,
                imgSrc: Console,
                name: "Play game",
                price: "$11,70",
              },
              {
                id:6,
                imgSrc: Laptop,
                name: "Tablet as a laptop",
                price: "$11,70",
              },
              {
                id:7,
                imgSrc: Headphones,
                name: "Wireless headphones",
                price: "$11,70",
              },
              {
                id:8,
                imgSrc: Console,
                name: "Play game",
                price: "$11,70",
              },
              {
                id:9,
                imgSrc: Laptop,
                name: "Tablet as a laptop",
                price: "$11,70",
              },
              {
                id:10,
                imgSrc: Headphones,
                name: "Wireless headphones",
                price: "$11,70",
              },
              {
                id:11,
                imgSrc: Console,
                name: "Play game",
                price: "$11,70",
              },
              {
                id:12,
                imgSrc: Laptop,
                name: "Tablet as a laptop",
                price: "$11,70",
              }

            ].map(({ imgSrc, badgeSrc, name, price,}, index) => (
              <ProductCard onMouseEnter = {handleMouseEnter} onMouseLeave = {handleMouseLeave} key={index}>
                <ProductImageWrapper>
                  <ProductImage src={imgSrc} alt={name} />
                  <ProductBadge>
                    <ProductImage src={badgeSrc} alt="" />
                  </ProductBadge>
                </ProductImageWrapper>
                <ProductDetails>
                  <ProductName>{name}</ProductName>
                  <ProductPrice>{price}</ProductPrice>
                </ProductDetails>
                <Button>
                <div style={{display:"none"}} className="frame-6 button">
                <img style={{display:'flex', justifyContent:'center', alignItems:'center'}}
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A790?alt=media&token=cec1e43b-2cb7-4d08-a308-6ef31f37be37"
                  alt="Not Found"
                  className="frame-35"
                />
                <p className="add-to-cart">Add to cart</p>
              </div>
              </Button>
              </ProductCard>
            ))}
          </ProductList>
        </ProductSection>
      </MainContent>
    </MainSection>
    <Banner style={{width:'1300px', borderRadius:'20px',}}>
      <BannerContent>
        <BannerButton style={{marginRight:'100px'}}>New laptop</BannerButton>
          <BannerHeader>Sale up to 50% off</BannerHeader>
          <BannerText style={{marginRight:'100px'}}>12 inch hd display</BannerText>
        <BannerButton style={{marginRight:'100px'}}>Shop now</BannerButton>
      </BannerContent>
    </Banner>
  </Container>
);

export default App;