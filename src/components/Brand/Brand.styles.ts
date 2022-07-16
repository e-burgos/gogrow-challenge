import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 20px;
  @media ${devices.tablet} {
    margin-left: 0;
  }
`;

export const StyledBrand = styled.p`
  font-size: 20pt;
  line-height: 20pt;
  font-weight: 400;
  color: #ffffff;
  margin: 0;
  @media ${devices.tablet} {
    color: #000000;
    font-size: 10pt;
    line-height: 10pt;
  }
  @media ${devices.mobile} {
    color: #000000;
    font-size: 6pt;
    line-height: 6pt;
  }
`;
