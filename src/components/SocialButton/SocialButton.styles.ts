import styled from "styled-components";
import { devices } from "../../utils/mediaQueries.styles";

export const Button = styled.button`
  width: fit-content;
  height: 35px;
  background: white;
  padding: 0px 10px;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  &:hover {
    border: 1px solid #1f485b;
    background: #1f485b;
    color: white;
    cursor: pointer;
  }
  @media ${devices.tablet} {
    width: 100%;
    margin-top: 5px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${devices.tablet} {
    justify-content: center;
  }
`;

export const Label = styled.p`
  font-size: 12px;
  margin: 0;
  font-weight: 300;
`;

export const Icon = styled.img<{ width: string }>`
  width: ${({ width }) => width};
  height: 20px;
  margin-right: 5px;
`;
