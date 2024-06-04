import React, { useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Container, AppBar, Toolbar, Typography, Badge, IconButton, Button, TextField, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Home from './pages/Home';
import CartPage from './pages/Cart';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import Products from './pages/Products';
import logo from './assets/Group 18.png';
import Cart from './assets/Cart.png';
import Search from './assets/Search.png';
import './App.css';
import User from './assets/user.png';
import favorites from './assets/favorites.png';
import styles from "./Frame104.module.scss";
import "./Group4.css";
import "./DropDownMenu.css";
import "./Component3.css";
import "./Group20.css";
import "./Group7.css";
import "./Component4.css";
import "./Component5.css";
import styled from "styled-components";
import { KeyboardArrowDown } from '@mui/icons-material';
import BrowseCategories from "./components/BrowseCategories";


function App() {
    
    const location = useLocation();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    const Frame104 = () => {
        return (
            <Box className={styles.frame104}>
                <Box className={styles.frame101}>
                    <div>
                        <header className="App-header">
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <button style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    Browse categories<span><KeyboardArrowDown/></span>
                                </button>
                                {isDropdownVisible && <BrowseCategories />}
                            </div>
                        </header>
                    </div>
                </Box>
                <Box className={styles.frame103}>
                    <Box className={styles.frame102}>
                        <Box className={styles.frame96}>
                            <Typography variant="body1" className={styles.home}>
                                <strong>Home</strong>
                            </Typography>
                            <ExpandMoreIcon className={styles.vuesaxLinearArrowDown} />
                        </Box>
                        <Box className={styles.frame96}>
                            <Typography variant="body1" className={styles.catalog}>
                                <strong>Catalog</strong>
                            </Typography>
                            <ExpandMoreIcon className={styles.vuesaxLinearArrowDown} />
                        </Box>
                        <Typography variant="body1" className={styles.blog}>
                            <strong>Blog</strong>
                        </Typography>
                        <Box className={styles.frame96}>
                            <Typography variant="body1" className={styles.pages}>
                                <strong>Pages</strong>
                            </Typography>
                            <ExpandMoreIcon className={styles.vuesaxLinearArrowDown} />
                        </Box>
                            <Typography variant="body1" className={styles.aboutUs}>
                                <strong>About Us</strong>
                            </Typography>
                    </Box>
                    <Typography variant="body1" className={styles.num30DaysFreeReturn}>
                        <strong>30 Days Free Return</strong>
                    </Typography>
                </Box>
            </Box>
        );
    };
    
    function Footer() {
        return (
            <FooterContainer>
                <ContentWrapper>
                    <Section>
                        <SectionMain>
                            <TitleAndDescription>
                                <Logo>
                                    <img src={logo} alt="My E-Store Logo" />
                                </Logo>
                                <Description>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit.
                                </Description>
                            </TitleAndDescription>
                            <LinksGroups>
                                <CompanyLinks>
                                    <GroupTitle>Company</GroupTitle>
                                    <LinksList>
                                        About
                                        <br /><br />
                                        Features
                                        <br /><br />
                                        Works
                                        <br /><br />
                                        Career
                                    </LinksList>
                                </CompanyLinks>
                                <ResourcesLinks>
                                    <GroupTitle>Resources</GroupTitle>
                                    <LinksList>
                                        Free eBooks
                                        <br /><br />
                                        Development Tutorial
                                        <br /><br />
                                        How to - Blog
                                        <br /><br />
                                        Youtube Playlist
                                    </LinksList>
                                </ResourcesLinks>
                                <NewsletterSection>
                                    <GroupTitle>NEWSLETTER</GroupTitle>
                                    <NewsletterForm>
                                        <FormField>
                                            <EmailIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/53e48aa29ac655722a4453a06f494d0c62beadee6f3755fc2381d680e5039ce5?apiKey=274884d2faec4e898ef9c9aa92060d27&" />
                                            <EmailPlaceholderText>
                                                Enter your email address
                                            </EmailPlaceholderText>
                                        </FormField>
                                        <SubscribeButton>
                                            <ButtonText>Subscribe Now</ButtonText>
                                        </SubscribeButton>
                                    </NewsletterForm>
                                </NewsletterSection>
                            </LinksGroups>
                        </SectionMain>
                        <Divider />
                        <BottomSection>
                            <CopyrightText>© 2023, All Rights Reserved</CopyrightText>
                            <LogoBottomImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e85bc4677c83345e3c82a6b6b8b7d51483fcf921ddbf0525404ac374f0a537e?apiKey=274884d2faec4e898ef9c9aa92060d27&" />
                        </BottomSection>
                    </Section>
                </ContentWrapper>
            </FooterContainer>
        );
    }

    const FooterContainer = styled.footer`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const ContentWrapper = styled.div`
        justify-content: center;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        display: flex;
        width: 100%;
        flex-direction: column;
        @media (max-width: 991px) {
            max-width: 100%;
        }
    `;

    const Section = styled.section`
        justify-content: center;
        background-color: #fff;
        display: flex;
        width: 92%;
        flex-direction: column;
        padding: 54px 60px;
        @media (max-width: 991px) {
            max-width: 100%;
            padding: 0 20px;
        }
    `;

    const SectionMain = styled.div`
        display: flex;
        margin: 0 12px;
        flex-direction: column;
        @media (max-width: 991px) {
            max-width: 100%;
            margin-right: 10px;
        }
    `;

    const TitleAndDescription = styled.div`
        justify-content: space-between;
        @media (max-width: 991px) {
            max-width: 100%;
        }
    `;

    const Logo = styled.div`
        gap: 20px;
        display: flex;
        @media (max-width: 991px) {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
        }
    `;

    const Description = styled.p`
        color: #52525b;
        margin-top: 13px;
        font: 400 14px/28px Poppins, sans-serif;
    `;

    const LinksGroups = styled.div`
        gap: 20px;
        display: flex;
        @media (max-width: 991px) {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
        }
    `;

    const CompanyLinks = styled.aside`
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 24%;
    `;

    const GroupTitle = styled.h4`
        color: #507a7a;
        letter-spacing: 1px;
        text-transform: uppercase;
        font: 600 13px/138% Poppins, sans-serif;
    `;

    const LinksList = styled.p`
        color: #52525b;
        margin-top: 40px;
        font: 400 14px/22px Poppins, sans-serif;
    `;

    const ResourcesLinks = styled.aside`
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 31%;
    `;

    const NewsletterSection = styled.aside`
        display: flex;
        flex-direction: column;
        line-height: normal;
        width: 45%;
    `;

    const NewsletterForm = styled.form`
        margin-top: 40px;
    `;

    const FormField = styled.div`
        border-radius: 9px;
        border-color: rgba(228, 228, 231, 1);
        border-style: solid;
        border-width: 1px;
        display: flex;
        gap: 10px;
        color: #a1a1aa;
        font-weight: 400;
        padding: 16px;
        @media (max-width: 991px) {
            padding-right: 20px;
        }
    `;

    const EmailIcon = styled.img`
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 20px;
        align-self: start;
    `;

    const EmailPlaceholderText = styled.label`
        font-family: Poppins, sans-serif;
        justify-content: center;
    `;

    const SubscribeButton = styled.button`
        justify-content: center;
        align-items: center;
        border-radius: 9px;
        background-color: #507a7a;
        color: #fff;
        font-weight: 500;
        padding: 16px;
        margin-top: 12px;
        @media (max-width: 991px) {
            padding: 0 20px;
        }
    `;

    const ButtonText = styled.span`
        font-family: Poppins, sans-serif;
        justify-content: center;
    `;

    const Divider = styled.hr`
        border-color: rgba(228, 228, 231, 1);
        background-color: #e4e4e7;
        height: 1px;
        margin-top: 35px;
        @media (max-width: 991px) {
            max-width: 100%;
        }
    `;

    const BottomSection = styled.div`
        justify-content: space-between;
        display: flex;
        margin-top: 36px;
        gap: 20px;
        font-size: 15px;
        color: #52525b;
        font-weight: 400;
        text-align: right;
        line-height: 147%;
        @media (max-width: 991px) {
            max-width: 100%;
            flex-wrap: wrap;
        }
    `;

    const CopyrightText = styled.p`
        font-family: Poppins, sans-serif;
    `;

    const LogoBottomImage = styled.img`
        aspect-ratio: 8.33;
        object-fit: auto;
        object-position: center;
        width: 172px;
        align-self: start;
        max-width: 100%;
    `;

    return (
        <>
            {location.pathname !== '/signin' && location.pathname !== '/signup'  && (
            <AppBar position="static">
                <Toolbar sx={{ height: '70px', backgroundColor: '#C1DCDC' }}>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Button>
                            <NavLink to="/">
                                <img src={logo} alt="My E-Store Logo" style={{ height: '40px', marginRight: '10px' }} />
                            </NavLink>
                        </Button>
                    </Typography>
                    <TextField
                        sx={{ borderRadius: '10px' }}
                        style={{ height: '50px', width: '350px', fontSize: '14px', fontFamily: 'Poppins' }}
                        id="search"
                        label="Search"
                        variant="outlined"
                        size="small"
                        InputProps={{
                            style: { backgroundColor: 'white', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 },
                            endAdornment: (
                                <Button>
                                    <img src={Search} style={{ width: '150px', height: '40px' }} alt="Search" />
                                </Button>
                            ),
                        }}
                    />
                    <Button color="inherit">
                        <NavLink to="/signin">
                            <Typography variant="body1" sx={{ color: 'black', fontFamily: 'Poppins', fontWeight: 200, fontSize: '10px' }}>
                                <img src={User} alt="Sign In"></img>
                            </Typography>
                        </NavLink>
                    </Button>
                    <Button>
                        <img src={favorites} alt='Favorites'></img>
                    </Button>
                    <IconButton>
                        <NavLink to="/cart">
                        <Badge color="secondary">
                            <img src={Cart} alt="Shopping Cart" />
                        </Badge>
                        </NavLink>
                    </IconButton>
                </Toolbar>
            </AppBar>
          )}  
            {location.pathname !== '/signin' && location.pathname !== '/signup'  && <Frame104 />}
            
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Container>
            
            {location.pathname !== '/signin' && location.pathname !== '/signup'  && <Footer />}
        </>
    );
}

export default App;
