import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const StyledImg = styled.img`
  width: 7vw;
  margin-top: 20px;
  margin-left: 10px;
  @media ${devices.laptop} {
    width: 10vw;
  }
  @media ${devices.tablet} {
    width: 15vw;
    margin-right: 0;
  }
`;
