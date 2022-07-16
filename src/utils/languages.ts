export interface ILogin {
  title: string;
  socialBn1: string;
  socialBn2: string;
  separator: string;
  name: string;
  email: string;
  password: string;
  summitBn: string;
  helperText: string;
  logIn: string;
}

export interface ILanguages {
  english: ILogin;
  spanish: ILogin;
}

export const LANGUAGES: ILanguages = {
  english: {
    title: "Create Account",
    socialBn1: "Signup with Facebook",
    socialBn2: "Signup with Google",
    separator: "OR",
    name: "Full Name",
    email: "Email",
    password: "Password",
    summitBn: "Create Account",
    helperText: "Already have an account?",
    logIn: "Log In",
  },
  spanish: {
    title: "Crear Cuenta",
    socialBn1: "Registrarse con Facebook",
    socialBn2: "Registrarse con Google",
    separator: "O",
    name: "Nombre Completo",
    email: "Email",
    password: "Contraseña",
    summitBn: "Crear Cuenta",
    helperText: "Ya tienes una cuenta?",
    logIn: "Iniciar Sesión",
  },
};
