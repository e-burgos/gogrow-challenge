import { act, fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import Dropdown from "../Dropdown/Dropdown";
import InputText from "../InputText/InputText";
import SocialButton from "../SocialButton/SocialButton";

jest.spyOn(window, "alert").mockImplementation(() => {});

beforeEach(() => {
  jest.useFakeTimers();
  jest.spyOn(global, "setTimeout");
});

test("Should Login renders", () => {
  const view = render(<Login />);
  expect(view).toBeDefined();
  expect(Dropdown).toBeDefined();
  expect(SocialButton).toBeDefined();
  expect(InputText).toBeDefined();
  expect(screen.getByLabelText("title")).toBeInTheDocument();
  expect(screen.getAllByLabelText("Social signup")[0]).toBeInTheDocument();
  expect(screen.getAllByLabelText("Social signup")[1]).toBeInTheDocument();
  expect(screen.getByLabelText("signup option")).toBeInTheDocument();
  expect(screen.getAllByLabelText("enter text")[0]).toBeInTheDocument();
  expect(screen.getAllByLabelText("enter text")[1]).toBeInTheDocument();
  expect(screen.getAllByLabelText("enter text")[2]).toBeInTheDocument();
  expect(screen.getByLabelText("send information")).toBeInTheDocument();
  expect(screen.getByLabelText("help text")).toBeInTheDocument();
  expect(screen.getByLabelText("login")).toBeInTheDocument();
});

test("Check social buttons alert", () => {
  render(<Login />);
  fireEvent.click(screen.getAllByLabelText("Social signup")[0]);
  expect(window.alert).toBeCalledWith("Signup with Facebook");
  fireEvent.click(screen.getAllByLabelText("Social signup")[1]);
  expect(window.alert).toBeCalledWith("Signup with Google");
});

test("Check Login validation", () => {
  render(<Login />);
  fireEvent.click(screen.getByLabelText("send information"));
  expect(window.alert).toBeCalledWith("Debes ingresar un nombre más largo.");
  fireEvent.change(screen.getAllByLabelText("enter text")[0], {
    target: { value: "My full name" },
  });
  expect(screen.getByDisplayValue("My full name")).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("send information"));
  expect(window.alert).toBeCalledWith("La dirección de email es incorrecta.");
  fireEvent.change(screen.getAllByLabelText("enter text")[1], {
    target: { value: "example@example.com" },
  });
  expect(screen.getByDisplayValue("example@example.com")).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("send information"));
  expect(window.alert).toBeCalledWith(
    "Debes ingresar una contraseña de al menos 6 caracteres."
  );
  fireEvent.change(screen.getAllByLabelText("enter text")[2], {
    target: { value: "123456" },
  });
  expect(screen.getByDisplayValue("example@example.com")).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText("send information"));
  expect(screen.getByLabelText("send information").textContent).toEqual(
    "Creando Cuenta..."
  );
  expect(setTimeout).toBeCalled();
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
  act(() => {
    jest.runAllTimers();
  });
  jest.runAllTimers();
  expect(
    screen.getByText(/Hola My full name, Gracias por registrarte!/i)
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Recuerda que tu email es example@example.com/i)
  ).toBeInTheDocument();
  expect(screen.getByText(/Volver/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText("Volver"));
  expect(screen.queryByTestId("welcome")).not.toBeInTheDocument();
  expect(screen.getByLabelText("send information").textContent).toEqual(
    "Create Account"
  );
  expect(screen.getAllByLabelText("enter text")[0]).toHaveAttribute(
    "value",
    ""
  );
  expect(screen.getAllByLabelText("enter text")[1]).toHaveAttribute(
    "value",
    ""
  );
  expect(screen.getAllByLabelText("enter text")[2]).toHaveAttribute(
    "value",
    ""
  );
});
