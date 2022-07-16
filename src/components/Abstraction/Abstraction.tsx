import { StyledImg } from "./Abstraction.styles";
import AbstractionSvg from "../../assets/images/abstraction.png";

const Abstraction = () => {
  return (
    <StyledImg
      data-testid="Abstraction"
      src={AbstractionSvg}
      alt="Ilustration"
    />
  );
};

export default Abstraction;
