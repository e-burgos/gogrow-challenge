import { StyledBrand, StyledContainer } from "./Brand.styles";

const Brand = () => {
  return (
    <StyledContainer data-testid="Brand">
      <StyledBrand>{"Getting"}</StyledBrand>
      <StyledBrand>{"Started With"}</StyledBrand>
      <StyledBrand>{"VR Creation"}</StyledBrand>
    </StyledContainer>
  );
};

export default Brand;
