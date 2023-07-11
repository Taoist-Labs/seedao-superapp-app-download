import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import IconiOS from "../../assets/img/ios.svg";
import ImgIosScreen from "../../assets/img/ios-screen.png";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={ImgIosScreen} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              {/* <h4 className="font15 semiBold">A few words about company</h4> */}
              <h2 className="font40 extraBold">Download SuperApp</h2>
              <p className="font12">
                下载测试链接 下载测试链接 下载测试链接 下载测试链接 下载测试链接
                下载测试链接 下载测试链接 下载测试链接 下载测试链接 下载测试链接
                下载测试链接 下载测试链接
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <AButton
                    src="https://testflight.apple.com/join/3QI4TSfd"
                    target="_blank"
                  >
                    <ButtonIcon src={IconiOS} alt="" />
                    <span>Download</span>
                  </AButton>
                  {/* <AButton
                    title="Download"
                    action={() =>
                      window.open(
                        "https://testflight.apple.com/join/3QI4TSfd",
                        "_blank"
                      )
                    }
                    icon={<ButtonIcon src={IconiOS} alt="" />}
                    border
                  /> */}
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  @media (max-width: 860px) {
    .container {
      height: calc(100vh - 120px);
    }
  }
`;

const AButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #232323;
  gap: 10px;
  width: 170px;
  height: 54px;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  span {
    margin-top: 4px;
  }
  &:hover {
    color: #fff;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    max-width: 330px;
    height: auto;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f1f1;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

const ButtonIcon = styled.img`
  width: 30px;
  height: 30px;
`;
