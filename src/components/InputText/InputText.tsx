import { StyledInput, StyledContainer, StyledIcon } from "./InputText.styles";
import Icon from "../../assets/images/password-icon.png";

export interface InputTextProps {
  passwordIcon?: boolean;
  placeholder?: string;
  value: string;
  name?: string;
  type?: "text" | "email" | "password";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  width?: string;
}

const InputText = ({
  passwordIcon,
  placeholder,
  value,
  width,
  name,
  type,
  onChange: changeHandler,
}: InputTextProps) => {
  return (
    <StyledContainer data-testid="InputText">
      <StyledInput
        data-testid="Input"
        autoComplete="off"
        aria-label="enter text"
        type={type}
        width={width}
        placeholder={placeholder}
        defaultValue={value}
        name={name}
        onChange={changeHandler}
      />
      {passwordIcon && (
        <StyledIcon data-testid="Icon" src={Icon} alt="password" />
      )}
    </StyledContainer>
  );
};

export default InputText;
