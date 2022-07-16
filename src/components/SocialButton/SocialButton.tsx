import { FunctionComponent } from "react";
import { Button, ContentContainer, Label, Icon } from "./SocialButton.styles";
import GoogleIcon from "../../assets/images/google.png";
import FacebookIcon from "../../assets/images/facebook.png";

interface Props {
  handleClick: () => void;
  label: string;
  icon?: "Google" | "Facebook";
}

const SocialButton: FunctionComponent<Props> = ({
  handleClick,
  label,
  icon,
}) => {
  return (
    <Button
      aria-label="Social signup"
      data-testid="SocialButton"
      onClick={handleClick}
    >
      <ContentContainer>
        {icon && (
          <Icon
            data-testid="Icon"
            width={icon === "Facebook" ? "21px" : "18px"}
            src={icon === "Facebook" ? FacebookIcon : GoogleIcon}
            alt={label}
          />
        )}
        <Label>{label}</Label>
      </ContentContainer>
    </Button>
  );
};

export default SocialButton;
