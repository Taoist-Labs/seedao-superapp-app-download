import React from "react";
import styled from "styled-components";
// import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import IconAndroid from "../../assets/img/android-screen.jpg";

export default function FirstPage() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font40">Download SuperApp</h1>
          <HeaderP className="font13 semiBold">
            下载测试链接 下载测试链接 下载测试链接 下载测试链接 下载测试链接
            下载测试链接 下载测试链接 下载测试链接 下载测试链接 下载测试链接
            下载测试链接 下载测试链接
          </HeaderP>
          <BtnWrapper>
            <a
              href="https://play.google.com/store/apps/details?id=com.seedao.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Get it on Google Play"
                src="https://play.google.com/intl/zh-TW/badges/static/images/badges/en_badge_web_generic.png"
              />
            </a>
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={IconAndroid}
            alt="office"
            style={{ zIndex: 9 }}
          />
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 20px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  img {
    width: 190px;
  }
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  img {
    width: 100%;
    max-width: 330px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f1f1;
  }
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    img {
      width: 50%;
    }
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
