import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  width: 66%;
  height: 100%;
  right: 0px;
  top: 0px;
  z-index: 2;
  background: #ffffff;
  border-radius: 47px 31px 31px 47px;
  box-sizing: border-box;
  @media ${devices.tablet} {
    width: 100%;
    border-radius: 47px;
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 15%;
  padding-top: 40px;
  height: 100%;
  width: 60%;
  @media ${devices.tablet} {
    width: 80%;
    margin-top: 50px;
  }
  @media ${devices.mobile} {
    width: 85%;
    margin-top: 0;
  }
`;

export const Headding = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: #000000;
  @media ${devices.tablet} {
    text-align: center;
  }
`;

export const SocialButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Separator = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px 0px;
  font-weight: 300;
  color: #cdcaca;
  text-align: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 130px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background: #1f485b;
  color: white;
  font-size: 14px;
  font-weight: 800;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    font-size: 16px;
    cursor: pointer;
  }
`;

export const HelpContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const HelpText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #bebcbc;
`;

export const Anchor = styled.a`
  text-decoration: inherit;
  font-size: 14px;
  font-weight: 500;
  color: #1f485b;
  margin-left: 5px;
`;

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;
