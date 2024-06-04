import React, { } from 'react';
import { Routes, Route,} from 'react-router-dom';
import { Container,Typography, Box} from '@mui/material';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import Products from '../pages/Products'
import '../App.css';
import styles from "../Frame104.module.scss";
import styles1 from "../Group3.module.scss";
import "../Group4.css"
import "../DropDownMenu.css"
import "../Component3.css"
import "../Group20.css"
import "../Group7.css"
import "../Component4.css"
import "../Component5.css"
import "../"
import styled from "styled-components";


function App() {

  
      const Group3 = () => {
        return (
          <Box className={styles1.group3}>
            <Box className={styles1.flexWrapperOne}>
              <Typography variant="h3" className={styles1.canonCamera}>
                <strong>
                Canon
                <br />
                Camera
                </strong>
              </Typography>
              <Box className={styles1.frame13}>
                <Box className={styles1.frame6}>
                  <Typography variant="body1" className={styles1.shopNow}>
                    Shop Now
                  </Typography>
                </Box>
                <Box className={styles.frame7}>
                  <Typography variant="body1" className={styles1.viewMore}>
                    View More
                  </Typography>
                </Box>
              </Box>
              <Box className={styles1.frame14}>
                <div className={styles1.ellipse1} />
                <div className={styles1.ellipse2} />
                <div className={styles1.ellipse2} />
              </Box>
            </Box>
            <Box className={styles1.relativeWrapperOne}>
              <img
                alt=""
                className={styles1.num81}
                src="https://static.overlay-tech.com/assets/9de9439a-5552-49ae-9382-abf583686376.png"
              />
              <Box className={styles1.frame6Two}>
                <Typography variant="body1" className={styles1.only89}>
                  only
                  <br />
                  $89
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      };
    const Group4 = () => {
        return (
                  <div className="group-4" style={{display:'flex',justifyContent:'center', alignItems:'center',marginLeft:'125px'}}>
                    <div className="frame-19">
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yindcm180x-1%3A594?alt=media&token=e9f2169a-c38f-4d58-9c74-eddaa31a14a5"
                        alt="Not Found"
                        className="frame-20"
                      />
                      <div className="frame-16">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yindcm180x-1%3A580?alt=media&token=edaf1592-ca22-4502-864d-53c5f9aad6c0"
                          alt="Not Found"
                          className="_-21"
                        />
                        <div className="frame-15">
                          <p className="speaker">Speaker</p>
                          <p className="_-6-items">(6 items)</p>
                        </div>
                      </div>
                      <div className="frame-17">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yindcm180x-1%3A585?alt=media&token=40cf5092-b072-49bc-81d3-0608237bce4e"
                          alt="Not Found"
                          className="_-51"
                        />
                        <div className="frame-151">
                          <p className="desktop-laptop">Desktop & laptop</p>
                          <p className="_-6-items-1">(6 items)</p>
                        </div>
                      </div>
                      <div className="frame-18">
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yindcm180x-1%3A590?alt=media&token=76ec0b37-9988-4364-b57a-a5e6e8c19bb2"
                          alt="Not Found"
                          className="_-81"
                        />
                        <div className="frame-152">
                          <p className="dslr-camera">DSLR camera</p>
                          <p className="_-6-items-2">(6 items)</p>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/yindcm180x-1%3A596?alt=media&token=f3cf728d-9f64-4a83-ac58-700316e9a6b5"
                      alt="Not Found"
                      className="frame-201"
                    />
                  </div>
                )
              }
        const Component3 = () => {
            return (
                <div style= {{display:'flex', justifyContent:'center', alignItems:'center'}} className="component-3">
      <div className="group-721">
        <div className="group-5" style={{marginLeft:'200px'}}>
          <p className="popular-products">Popular products</p>
          <div className="frame-25" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="frame-21" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p className="cameras">Cameras</p>
            </div>
            <div className="frame-22" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p className="laptops">Laptops</p>
            </div>
            <div className="frame-23" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p className="tablets">Tablets</p>
            </div>
            <div className="frame-24" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <p className="mouse">Mouse</p>
            </div>
          </div>
        </div>
        <div className="frame-41" style= {{display:'flex', justifyContent:'center', alignItems:'center', marginLeft:'200px'}}>
          <div className="frame-40" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="frame-34" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A635?alt=media&token=d1759f87-1a8b-4bb1-8de6-6e1ca553aaa3"
                alt="Not Found"
                className="frame-28" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A606?alt=media&token=7632863c-262b-497c-9103-f3bb09c95361"
                alt="Not Found"
                className="camera-1" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
              />
              <div className="frame-36" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <div className="frame-6" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A620?alt=media&token=6d54dd72-2593-4955-a482-c17a9d45b65a"
                    alt="Not Found"
                    className="frame-35" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                  <p className="add-to-cart">Add to cart</p>
                </div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A628?alt=media&token=5336a67a-2e7a-40ce-b112-d9d57a7c5eff"
                  alt="Not Found"
                  className="frame-351" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
              </div>
            </div>
            <div className="frame-33" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-30" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A639?alt=media&token=86fcbce9-2506-40c4-a91a-941eb0bf4d26"
                  alt="Not Found"
                  className="frame-29" style= {{display:'flex', justifyContent:'center', alignItems:'center', width:'fit-content'}}
                />
                <div className="frame-27" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="wireless-headphones">Wireless headphones</p>
                  <p className="_-1170">$11,70</p >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A645?alt=media&token=9d68cd83-ea30-42ca-b46c-507774645436"
                    alt="Not Found"
                    className="frame-26" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                </div>
              </div>
            </div>
            <div className="frame-32" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-301" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A653?alt=media&token=774b3900-5a90-40ec-8ece-a1bbd1d2295c"
                  alt="Not Found"
                  className="frame-291 style= {{display:'flex', justifyContent:'center', alignItems:'center'}}"
                />
                <div className="frame-271" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="play-game">Play game</p>
                  <p className="_-11701">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A659?alt=media&token=8eb1dda2-f491-4bf3-8f67-c76f619668ea"
                    alt="Not Found"
                    className="frame-261 style= {{display:'flex', justifyContent:'center', alignItems:'center'}}"
                  />
                </div>
              </div>
            </div>
            <div className="frame-31" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-302" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A667?alt=media&token=2b48b653-6aba-4d78-a4e3-a3c44f321fad"
                  alt="Not Found"
                  className="frame-292" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
                <div className="frame-272" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="tablet-as-alaptop">Tablet as a laptop</p>
                  <p className="_-11702">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A677?alt=media&token=450fea6a-14e9-4d5a-8801-29063822ca65"
                    alt="Not Found"
                    className="frame-262" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-39" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className="frame-37" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-303" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A686?alt=media&token=b4d564f3-a08a-491f-afbc-3e4c9c81664d"
                  alt="Not Found"
                  className="frame-293" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
                <div className="frame-273" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="wireless-headphones-1">Wireless headphones</p>
                  <p className="_-11703">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A692?alt=media&token=676c3a1c-e997-46a9-8ffd-7050536b6938"
                    alt="Not Found"
                    className="frame-263" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                </div>
              </div>
            </div>
            <div className="frame-361" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-304" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A700?alt=media&token=ccf4117e-858a-4ea8-865b-62266b3182fa"
                  alt="Not Found"
                  className="frame-294" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
                <div className="frame-274" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="play-game-1">Play game</p>
                  <p className="_-11704">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A706?alt=media&token=243f78c9-a15d-4910-8706-8e586a04765f"
                    alt="Not Found"
                    className="frame-264" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                </div>
              </div>
            </div>
            <div className="frame-352" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className="frame-305" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A714?alt=media&token=af8155d5-f55c-432c-b559-104a5aaa23f7"
                  alt="Not Found"
                  className="frame-295 style= {{display:'flex', justifyContent:'center', alignItems:'center'}}"
                />
                <div className="frame-275" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="tablet-as-alaptop-1">Tablet as a laptop</p>
                  <p className="_-11705">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A720?alt=media&token=5933ae11-0f7f-42f0-88f2-a4df7006fd7a"
                    alt="Not Found"
                    className="frame-265 style= {{display:'flex', justifyContent:'center', alignItems:'center'}}"
                  />
                </div>
              </div>
            </div>
            <div className="frame-38" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
              
              <div className="frame-306" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A728?alt=media&token=2ff5d2bc-2520-4f5a-9dc3-8244e5a9d633"
                  alt="Not Found"
                  className="frame-296" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
                
                <div className="frame-276" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <p className="play-game-2">Play game</p>
                  <p className="_-11706">$11,70</p>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A734?alt=media&token=89336c1e-feda-46cb-9c22-58b35089c02f"
                    alt="Not Found"
                    className="frame-266" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A538?alt=media&token=eb6e647a-e270-45ea-87be-6f08daf57729"
          alt="Not Found"
          className="frame-14"
        />
      </div>
    </div>
            )
        }
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
    const Group20 = () => {
        return (
          <Banner style={{width:'1200px', borderRadius:'20px', marginRight:'500px'}}>
          <BannerContent>
            <BannerButton style={{marginRight:'100px'}}>New laptop</BannerButton>
              <BannerHeader>Sale up to 50% off</BannerHeader>
              <BannerText style={{marginRight:'100px'}}>12 inch hd display</BannerText>
            <BannerButton style={{marginRight:'100px'}}>Shop now</BannerButton>
          </BannerContent>
        </Banner>
        )
    }
    const Group7 = () => {
        return(
            <div className="group-7">
      <div className="group-573" style={{marginRight:'150px', display:'flex', flexDirection:'row'}}>
        <div className="frame-53">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A800?alt=media&token=b3e6fdd1-c72b-4786-8da3-6cf997d85571"
            alt="Not Found"
            className="frame-52"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A767?alt=media&token=4d111dd4-fdc8-448b-9af1-880f1810cae5"
            alt="Not Found"
            className="_-111"
          />
          <div className="frame-51">
            <div className="frame-27">
              <p className="jbl-bar-21-deep-bass">JBL bar 2.1 deep bass</p>
              <p className="_-1170">$11,70</p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A772?alt=media&token=25b8a4a5-05e9-40c5-a87e-e5fd51f10eb3"
                alt="Not Found"
                className="frame-26"
              />
            </div>
            <div className="frame-50">
              <div className="frame-46">
                <p className="_-57">57</p>
              </div>
              <div className="frame-47">
                <p className="_-11">11</p>
              </div>
              <div className="frame-48">
                <p className="_-33">33</p>
              </div>
              <div className="frame-49">
                <p className="_-59">59</p>
              </div>
            </div>
            <div className="frame-36">
              <div className="frame-6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A790?alt=media&token=cec1e43b-2cb7-4d08-a308-6ef31f37be37"
                  alt="Not Found"
                  className="frame-35"
                />
                <p className="add-to-cart">Add to cart</p>
              </div>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A798?alt=media&token=6f442471-3f4d-4bc4-b835-88c2bc601e4b"
                alt="Not Found"
                className="frame-351"
              />
            </div>
          </div>
        </div>
        <div className="group-963">
          <div className= "group-o" style={{height:'250px'}}>
          <div className="frame-38" style={{display:'flex', flexDirection:'row'}}>
          <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/1iglpnuv81z-1%3A728?alt=media&token=2ff5d2bc-2520-4f5a-9dc3-8244e5a9d633"
                  alt="Not Found"
                  className="frame-296" style= {{display:'flex', justifyContent:'center', alignItems:'center'}}
                />
            <div className="frame-30">
              <div className="frame-271">
              </div>
                <p className="play-game">Play game</p>
                <p className="_-11701">$11,70</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A747?alt=media&token=2546702e-2016-4028-83e0-6c8f515c4d56"
                  alt="Not Found"
                  className="frame-261"
                />
              </div>
            </div>
          </div>
          <div className="frame-45" style={{display:'flex', flexDirection:'row'}}>
            <div className="frame-301">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A755?alt=media&token=596fdda5-677c-4a44-92d9-f031ac071188"
                alt="Not Found"
                className="frame-29"
              />
              <div className="frame-272">
                <p className="play-game-1">Play game</p>
                <p className="_-11702">$11,70</p>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/fqtbgwx9vlc-1%3A760?alt=media&token=cc3ae0cb-6a6c-44db-9267-3b9115118f12"
                  alt="Not Found"
                  className="frame-262"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
    const Component4 = () => {
        return(
            <div className="component-4">
      <div className="group-818" style={{marginLeft:'200px'}}>
        <div className="frame-58" style={{marginRight:'150px'}}>
          <div className="frame-55">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-70%3A719?alt=media&token=b5fcd98f-4371-4602-8ffa-22c824f509bd"
              alt="Not Found"
              className="vuesax-bold-box-tick"
            />
            <div className="frame-54">
              <p className="free-delivery">Free delivery</p>
              <p className="on-order-above-5000">on order above $50,00</p>
            </div>
          </div>
          <div className="frame-56">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-70%3A720?alt=media&token=3cde2713-0f8d-4bc8-80c8-7c6a309ae9c5"
              alt="Not Found"
              className="vuesax-bold-crown"
            />
            <div className="frame-541">
              <p className="best-quality">Best quality </p>
              <p className="best-quality-in-low-pric">
                best quality in low price
              </p>
            </div>
          </div>
          <div className="frame-57">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-70%3A721?alt=media&token=4068f476-7630-4dea-b23c-8aac1965527f"
              alt="Not Found"
              className="vuesax-bold-shield-security"
            />
            <div className="frame-542">
              <p className="_-1-year-warranty">1 year warranty</p>
              <p className="avaliable-warranty">Avaliable warranty</p>
            </div>
          </div>
        </div>
        <div className="frame-66" style={{marginRight:'150px'}}>
          <div className="frame-63">
            <div className="frame-62">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-1%3A847?alt=media&token=b130fce7-b5ab-4c4a-b745-b8f39a1edf06"
                alt="Not Found"
                className="frame-61"
              />
              <p className="savannah-nguyen">Savannah Nguyen</p>
            </div>
            <div className="frame-60">
              <p className="lorem-ipsum-dolor-sit-am">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
          <div className="frame-64">
            <div className="frame-621">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-1%3A855?alt=media&token=406910ab-66c5-42e1-9062-ab86688ac874"
                alt="Not Found"
                className="frame-611"
              />
              <p className="esther-howard">Esther Howard</p>
            </div>
            <div className="frame-601">
              <p className="lorem-ipsum-dolor-sit-am-1">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
          <div className="frame-65">
            <div className="frame-622">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/avajwtlfyx6-1%3A863?alt=media&token=c1e2c1c0-63c9-4880-86d6-9bc7cbed77a9"
                alt="Not Found"
                className="frame-612"
              />
              <p className="esther-howard-1">Esther Howard</p>
            </div>
            <div className="frame-602">
              <p className="lorem-ipsum-dolor-sit-am-2">
                Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                faucibus bibendum ullamcorper. Phasellus tristique aenean at
                lorem sed scelerisque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
    }
    const Component5 = () => {
        return(
            <div className="component-5">
      <div className="group-726" style={{marginLeft:'200px'}}>
        <div className="frame-69" style={{marginRight:'300px'}}>
          <p className="latest-news" >Latest news</p>
          <p className="view-all" >View all</p>
        </div>
        <div className="group-6" style={{marginRight:'300px'}}>
          <div className="frame-74">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/85vz67khrd4-1%3A871?alt=media&token=b8d00e50-b704-4e37-8260-f0d97f43f8ad"
              alt="Not Found"
              className="blog-1-_-540x-490-_crop-_center-1"
            />
            <div className="frame-73">
              <div className="frame-70">
                <p className="_-22-oct-2021">22,oct,2021</p>
              </div>
              <div className="frame-72">
                <div className="frame-71">
                  <p className="who-avoids-apain-that-pr">
                    Who avoids a pain that produces?
                  </p>
                  <p className="lorem-ipsum-dolor-sit-am">
                    Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                    faucibus bibendum ullamcorper. Phasellus tristique aenean at
                    lorem sed scelerisque.
                  </p>
                </div>
                <p className="by-spacing-tech">By spacing tech</p>
              </div>
            </div>
          </div>
          <div className="frame-75">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/85vz67khrd4-1%3A881?alt=media&token=31bdcf03-0efc-475e-8981-33459f3050eb"
              alt="Not Found"
              className="blog-2-_-540x-490-_crop-_center-1"
            />
            <div className="frame-731">
              <div className="frame-701">
                <p className="_-22-oct-20211">22,oct,2021</p>
              </div>
              <div className="frame-721">
                <div className="frame-711">
                  <p className="who-avoids-apain-that-pr-1">
                    Who avoids a pain that produces?
                  </p>
                  <p className="lorem-ipsum-dolor-sit-am-1">
                    Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus
                    faucibus bibendum ullamcorper. Phasellus tristique aenean at
                    lorem sed scelerisque.
                  </p>
                </div>
                <p className="by-spacing-tech-1">By spacing tech</p>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <img
          style={{marginRight:'300px'}}
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/85vz67khrd4-1%3A542?alt=media&token=3b430ecc-ee83-43b5-992d-fceb84787ad0"
          alt="Not Found"
          className="frame-76"
        />
      </div>
    </div>
        )
    }
    return (
        <>  
            <Group3/>
            <br/>
            <br/>
            <br/>
            <Group4/>
            <br/>
            <br/>
            <br/>
            <Component3/>
            <br>
            </br>
            <Group20/>
            <br/>
            <br/>
            <Group7/>
            <br/>
            <br/>
            <Component4/>
            <br/>
            <br/>
            <br/>
            <Component5/>
            <Container>
                <Routes>
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/products" element={<Products/>}/>
                </Routes>
            </Container>
        </>
    );
};

export default App;