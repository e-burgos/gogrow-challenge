import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  & input {
    margin-top: 5px;
    background-color: transparent;
    font-size: 13px;
    line-height: 35px;
    height: 35px;
    font-weight: 500;
    border: none;
    border-bottom: 1px solid #f3f3f3;
    &:focus {
      outline: none;
      border-bottom: 1px solid #f3f3f3;
      color: #000000;
    }
    &::placeholder {
      color: #bebcbc;
    }
  }
`;

export const StyledInput = styled.input<{ width?: string }>`
  width: ${({ width }) => (width ? width : "auto")};
`;

export const StyledIcon = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 12px;
  margin-bottom: 12px;
`;
