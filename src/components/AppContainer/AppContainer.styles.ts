import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: rgba(26, 74, 96, 0.8);
  padding: 5% 20%;
  box-sizing: border-box;
  @media ${devices.desktop} {
    padding: 5% 10%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  max-height: 1024px;
  background: #1f485b;
  box-shadow: 4px 4px 26px rgba(255, 255, 255, 0.37),
    4px 4px 16px rgba(255, 255, 255, 0.15),
    -4px 4px 26px rgba(75, 100, 119, 0.69);
  border-radius: 31px;
  z-index: 1;
  position: relative;
  box-sizing: border-box;
  @media ${devices.tablet} {
    border-radius: 47px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 33%;
  left: 0px;
  top: 0px;
  z-index: 3;
  @media ${devices.tablet} {
    flex-direction: row;
    width: 45%;
    align-items: center;
    justify-content: flex-start;
  }
`;
