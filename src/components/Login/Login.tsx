/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { ILogin, LANGUAGES } from "../../utils/languages";
import InputText from "../InputText/InputText";
import Dropdown from "../Dropdown/Dropdown";
import SocialButton from "../SocialButton/SocialButton";
import {
  WrapperContainer,
  LanguageContainer,
  Form,
  Headding,
  SocialButtonsContainer,
  Separator,
  HelpText,
  HelpContainer,
  Anchor,
  InputsContainer,
  SubmitButton,
  SignupContainer,
} from "./Login.styles";

const Login = () => {
  const [language, setLanguage] = useState<ILogin>(LANGUAGES.english);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [signup, setSignup] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (name.trim().length < 4)
      return alert("Debes ingresar un nombre más largo.");
    // eslint-disable-next-line no-useless-escape
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))
      return alert("La dirección de email es incorrecta.");
    if (pass.length < 6)
      return alert("Debes ingresar una contraseña de al menos 6 caracteres.");
    setLoading(true);
    setTimeout(() => {
      setSignup(true);
      setLoading(false);
    }, 3000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPass("");
    setSignup(false);
  };

  useEffect(() => {}, [language]);

  return (
    <WrapperContainer data-testid="Login">
      {!signup && (
        <>
          <LanguageContainer>
            <Dropdown aria-label="language" setLanguage={setLanguage} />
          </LanguageContainer>
          <Form aria-label="create account" autoComplete="off">
            <Headding aria-label="title">{language.title}</Headding>
            <SocialButtonsContainer>
              <SocialButton
                handleClick={() => alert(language.socialBn1)}
                label={language.socialBn1}
                icon="Facebook"
              />
              <SocialButton
                handleClick={() => alert(language.socialBn2)}
                label={language.socialBn2}
                icon="Google"
              />
            </SocialButtonsContainer>
            <Separator aria-label="signup option">
              - {language.separator} -
            </Separator>
            <InputsContainer>
              <InputText
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language.name}
              />
              <InputText
                aria-label="your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={language.email}
              />
              <InputText
                aria-label="your password"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder={language.password}
                passwordIcon
              />
            </InputsContainer>
            <SubmitButton
              aria-label="send information"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? "Creando Cuenta..." : language.summitBn}
            </SubmitButton>
            <HelpContainer>
              <HelpText aria-label="help text">{language.helperText}</HelpText>
              <Anchor aria-label="login" href="#" rel="noreferrer">
                {language.logIn}
              </Anchor>
            </HelpContainer>
          </Form>
        </>
      )}
      {signup && (
        <SignupContainer>
          <Headding aria-label="title">{`Hola ${name}, Gracias por registrarte!`}</Headding>
          <HelpText aria-label="help text">{`Recuerda que tu email es ${email}`}</HelpText>
          <SubmitButton aria-label="signup" onClick={handleReset}>
            {"Volver"}
          </SubmitButton>
        </SignupContainer>
      )}
    </WrapperContainer>
  );
};

export default Login;
