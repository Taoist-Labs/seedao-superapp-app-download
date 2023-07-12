import styled from "styled-components";

export default function Footer() {
  return (
    <FooterBox>
      <p>© 2023 SeeDAO</p>
      <p>Supported by Taoist Labs</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100%;
  background: rgb(241, 255, 204);
  text-align: center;
  /* position: fixed; */
  bottom: 0;
  left: 0;
  z-index: 99;
  padding-block: 10px;
  color: #aaa;
  font-size: 12px;
`;
