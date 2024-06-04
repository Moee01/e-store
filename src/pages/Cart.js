import React from 'react';
import styled from "styled-components";
import { useState } from 'react';
import Headphones from '../assets/Headphones.png';
import Console from '../assets/Console.png'
import Laptop from '../assets/Laptop.png'
import './Products'

const CartPage = () => {
    return (
      <div>
        <Navigation>
          <Brand>
            <BrandText>Home</BrandText>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/684fc4ef54d0953fb0d9528148c51e453c35eb975a3339677812713ff882707a?apiKey=274884d2faec4e898ef9c9aa92060d27" alt="" />
          </Brand>
          <Category>
            <CategoryText>All category</CategoryText>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/684fc4ef54d0953fb0d9528148c51e453c35eb975a3339677812713ff882707a?apiKey=274884d2faec4e898ef9c9aa92060d27" alt="" />
          </Category>
        </Navigation>
        <br />
        <br />
        <ShoppingCart />
      </div>
    );
  };
  
  
  function ProductCard() {
    const [quantity, setQuantity] = useState(1); // Initial quantity state
    const productPrice = 11.7; // Replace with actual product price
  
    const handleQuantityIncrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity + 1, 1)); // Ensures quantity doesn't go below 1
    };
  
    const handleQuantityDecrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Ensures quantity doesn't go below 0
    };
  
    const subTotal = quantity * productPrice;
  
    return (
      <Section>
        <ProductDetails>
          <ProductImage loading="lazy" src={Headphones} alt="Product" />
          <TextDetails>
            <ProductName tabIndex="0">Wireless Headphone</ProductName>
            <ProductProperty tabIndex="0">Color: Black</ProductProperty>
          </TextDetails>
        </ProductDetails>
        <PriceSection>
          <Price tabIndex="0">$ {productPrice.toFixed(2)}</Price>
          <QuantityWrapper>
            <Button tabIndex="0" onClick={handleQuantityDecrease}>-</Button>
            <Quantity tabIndex="0">{quantity}</Quantity>
            <Button tabIndex="0" onClick={handleQuantityIncrease}>+</Button>
          </QuantityWrapper>
        </PriceSection>
        <TotalPrice tabIndex="0">$ {subTotal.toFixed(2)}</TotalPrice>
        <RemoveIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/884e8cb9cbc51671619c9c0e984137599569152891e7f0c1b90497775a87bbb4?apiKey=274884d2faec4e898ef9c9aa92060d27" alt="Remove" tabIndex="0" />
      </Section>
      
      
    );
  }
  function ProductCard1() {
    const [quantity, setQuantity] = useState(1); // Initial quantity state
    const productPrice = 11.7; // Replace with actual product price
  
    const handleQuantityIncrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity + 1, 1)); // Ensures quantity doesn't go below 1
    };
  
    const handleQuantityDecrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Ensures quantity doesn't go below 0
    };
  
    const subTotal = quantity * productPrice;
  
    return (
      <Section>
        <ProductDetails>
          <ProductImage loading="lazy" src={Console} alt="Product" />
          <TextDetails>
            <ProductName tabIndex="0">Console</ProductName>
            <ProductProperty tabIndex="0">Color: Black</ProductProperty>
          </TextDetails>
        </ProductDetails>
        <PriceSection>
          <Price tabIndex="0">$ {productPrice.toFixed(2)}</Price>
          <QuantityWrapper>
            <Button tabIndex="0" onClick={handleQuantityDecrease}>-</Button>
            <Quantity tabIndex="0">{quantity}</Quantity>
            <Button tabIndex="0" onClick={handleQuantityIncrease}>+</Button>
          </QuantityWrapper>
        </PriceSection>
        <TotalPrice tabIndex="0">$ {subTotal.toFixed(2)}</TotalPrice>
        <RemoveIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/884e8cb9cbc51671619c9c0e984137599569152891e7f0c1b90497775a87bbb4?apiKey=274884d2faec4e898ef9c9aa92060d27" alt="Remove" tabIndex="0" />
      </Section>
      
      
    );
  }
  function ProductCard2() {
    const [quantity, setQuantity] = useState(1); // Initial quantity state
    const productPrice = 11.7; // Replace with actual product price
  
    const handleQuantityIncrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity + 1, 1)); // Ensures quantity doesn't go below 1
    };
  
    const handleQuantityDecrease = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0)); // Ensures quantity doesn't go below 0
    };
  
    const subTotal = quantity * productPrice;
  
    return (
      <Section>
        <ProductDetails>
          <ProductImage loading="lazy" src={Laptop} alt="Product" />
          <TextDetails>
            <ProductName tabIndex="0">Laptop</ProductName>
            <ProductProperty tabIndex="0">Color: Gray</ProductProperty>
          </TextDetails>
        </ProductDetails>
        <PriceSection>
          <Price tabIndex="0">$ {productPrice.toFixed(2)}</Price>
          <QuantityWrapper>
            <Button tabIndex="0" onClick={handleQuantityDecrease}>-</Button>
            <Quantity tabIndex="0">{quantity}</Quantity>
            <Button tabIndex="0" onClick={handleQuantityIncrease}>+</Button>
          </QuantityWrapper>
        </PriceSection>
        <TotalPrice tabIndex="0">$ {subTotal.toFixed(2)}</TotalPrice>
        <RemoveIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/884e8cb9cbc51671619c9c0e984137599569152891e7f0c1b90497775a87bbb4?apiKey=274884d2faec4e898ef9c9aa92060d27" alt="Remove" tabIndex="0" />
      </Section>
      
      
    );
  }
  

function ShoppingCart() {
  const [display,] = useState(false);
    
  return (
    <div>
      <MainContainer>
        <ProductsSection>
          <ProductsHeader>
            <ProductTitle>Product</ProductTitle>
            <ProductsLabels>
              <ProductLabel>Price</ProductLabel>
              <ProductLabel>Quantity</ProductLabel>
              <ProductLabel>Subtotal</ProductLabel>
            </ProductsLabels>
          </ProductsHeader>
          <div className='ProductCards div' style={{display:'none'}}>
          {display && <div><ProductCard/></div>}
          {display && <div><ProductCard1/></div>}
          {display && <div><ProductCard2/></div>}
          </div>
          <CartActions>
            <CartButton><strong>Continue shopping</strong></CartButton>
            <CartButtonUpdate><strong>Update cart</strong></CartButtonUpdate>
            <CartButtonClear><strong>Clear cart</strong></CartButtonClear>
          </CartActions>
        </ProductsSection>
        <SummarySection>
          <CartSummary>
            <SummaryTitle>Cart total</SummaryTitle>
            <SummaryDetails>
              <SummaryContent>
                <SubtotalRow>
                  <SubtotalLabel>Subtotal</SubtotalLabel>
                  <SubtotalValue></SubtotalValue>
                </SubtotalRow>
                <CouponForm>
                  <label htmlFor="couponCode" className="visually-hidden">
                    Enter coupon code
                  </label>
                  <CouponField>
                    <CouponInput
                      type="text"
                      id="couponCode"
                      placeholder="Enter coupon code"
                      aria-label="Enter coupon code"
                    />
                    <ApplyButton>Apply</ApplyButton>
                  </CouponField>
                </CouponForm>
                <LocationRow>
                  <LocationLabel>County</LocationLabel>
                  <Img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6d738ceda13a471e14327c18a2e2f08481f2fe0c1994cd1510fb9e581056c9?apiKey=274884d2faec4e898ef9c9aa92060d27&" />
                </LocationRow>
              </SummaryContent>
              <TotalRow>
                <TotalLabel>Total amount</TotalLabel>
                <TotalValue></TotalValue>
              </TotalRow>
            </SummaryDetails>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
          </CartSummary>
        </SummarySection>
      </MainContainer>
    </div>
  );
}
const Navigation = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
  height: 50px;
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
const MainContainer = styled.main`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const ProductsSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 67%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 80px 18px 34px;
  font-size: 21px;
  font-weight: 500;
  background-color: #c1dcdc;
  border-radius: 25px;
  @media (max-width: 991px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
`;

const ProductTitle = styled.div`
  font-family: Poppins, sans-serif;
`;

const ProductsLabels = styled.div`
  display: flex;
  gap: 20px;
`;

const ProductLabel = styled.span`
  font-family: Poppins, sans-serif;
`;

const CartActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
  font-size: 23px;
  font-weight: 600;
  margin-top: 370px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const CartButton = styled.button`
  padding: 20px 37px;
  color: #fff;
  background-color: #000;
  border-radius: 32.424px;
  font-family: Poppins, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const CartButtonUpdate = styled(CartButton)`
  border: 1px solid rgba(169, 169, 169, 1);
  color: #797979
  background-color: White;
`;

const CartButtonClear = styled(CartButton)`
  border: 1px solid rgba(195, 49, 49, 1);
  color: #c33131;
  background-color: White;
`;

const SummarySection = styled.aside`
  display: flex;
  flex-direction: column;
  width: 33%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(195, 195, 195, 1);
  border-radius: 25px;
  padding: 2px 0;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

const SummaryTitle = styled.div`
  padding: 13px 60px;
  background-color: #c1dcdc;
  color: #232323;
  border-radius: 25px;
  font: 500 21px Poppins, sans-serif;
  text-align: center;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SummaryDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 37px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const SummaryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  font-weight: 500;
  color: #232323;
`;

const SubtotalLabel = styled.span`
  font: 20px Poppins, sans-serif;
`;

const SubtotalValue = styled.span`
  text-align: right;
  font: 23px Poppins, sans-serif;
`;

const CouponForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
  padding-bottom: 33px;
`;

const CouponField = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(223, 223, 223, 1);
  border-radius: 20px;
  padding: 13px 24px 13px 23px;
`;

const CouponInput = styled.input`
  border: none;
  outline: none;
  font: 400 17px Poppins, sans-serif;
  color: #232323;
`;

const ApplyButton = styled.button`
  font: 500 15px Poppins, sans-serif;
  color: #003f62;
  background: none;
  border: none;
  cursor: pointer;
`;

const LocationRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
  color: #232323;
  border: 1px solid rgba(223, 223, 223, 1);
  border-radius: 20px;
  margin-top: 33px;
  padding: 15px 23px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const LocationLabel = styled.span`
  font-family: Poppins, sans-serif;
`;

const Img = styled.img`
  width: 24px;
  height: auto;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  color: #232323;
  font-weight: 400;
  margin-top: 27px;
`;

const TotalLabel = styled.span`
  font: 17px Poppins, sans-serif;
`;

const TotalValue = styled.span`
  text-align: right;
  font: 19px Poppins, sans-serif;
`;

const CheckoutButton = styled.button`
  margin-top: 29px;
  padding: 11px 60px;
  color: #fff;
  background-color: #000;
  border-radius: 32.424px;
  font: 600 21px Poppins, sans-serif;
  text-align: center;
  cursor: pointer;
  @media (max-width: 991px) {
    padding: 0 22px;
  }
`;
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 869px;
  gap: 20px;
  font-size: 23px;
  color: #2f2f2f;
  font-weight: 500;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  font-size: 21px;
  font-weight: 400;
`;

const ProductImage = styled.img`
  aspect-ratio: 1.49;
  object-fit: auto;
  object-position: center;
  width: 132px;
  max-width: 100%;
  margin: auto 0;
`;

const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  justify-content: center;
`;

const ProductName = styled.h2`
  color: #003f62;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

const ProductProperty = styled.p`
  font-family: Poppins, sans-serif;
  margin-top: 11px;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  font-size: 18px;
  color: #434343;
  white-space: nowrap;
  padding: 0 20px;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const Quantity = styled.span`
  border: 1px solid #bdbdbd;
  background-color: #f2f2f2;
  padding: 3px 28px;
  font-family: Poppins, sans-serif;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  background-color: #f2f2f2;
  padding: 3px 12px;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  color: black;
`;

const Price = styled.p`
  font-family: Poppins, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const TotalPrice = styled.p`
  font-family: Poppins, sans-serif;
  align-self: stretch;
  margin: auto 0;
`;

const RemoveIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto 0;
  cursor: pointer;
`;


export default CartPage;
