import React, { FunctionComponent } from "react";
import Abstraction from "../Abstraction/Abstraction";
import Brand from "../Brand/Brand";
import Logo from "../Logo/Logo";
import {
  WrapperContainer,
  MainContainer,
  LogoContainer,
} from "./AppContainer.styles";
import Login from "../Login/Login";

const AppContainer: FunctionComponent = () => {
  return (
    <WrapperContainer>
      <MainContainer>
        <Abstraction />
        <LogoContainer>
          <Logo />
          <Brand />
        </LogoContainer>
        <Login />
      </MainContainer>
    </WrapperContainer>
  );
};

export default AppContainer;
