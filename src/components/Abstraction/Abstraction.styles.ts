import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const StyledImg = styled.img`
  position: absolute;
  width: 28vw;
  left: 0px;
  bottom: 0px;
  z-index: 3;
  @media ${devices.laptop} {
    width: 40vw;
  }
  @media ${devices.tablet} {
    display: none;
  }
`;
