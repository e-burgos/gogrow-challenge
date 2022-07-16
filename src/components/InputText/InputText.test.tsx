import InputText from "./InputText";
import { fireEvent, render, screen } from "@testing-library/react";

test("Should InputText renders", () => {
  const view = render(<InputText value={"text"} />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("InputText")).toBeInTheDocument();
});

test("Check InputText props", () => {
  render(
    <InputText
      placeholder="my placeholder"
      value="some text"
      name="nameProp"
      type="text"
      passwordIcon
      width="100%"
    />
  );
  const input = screen.getByTestId("Input");
  expect(input).toHaveAttribute("value", "some text");
  expect(input).toHaveAttribute("name", "nameProp");
  expect(input).toHaveAttribute("placeholder", "my placeholder");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("width", "100%");
  expect(screen.getByTestId("Icon")).toBeInTheDocument();
});

test("Check InputText onChange", () => {
  const changeMkFn = jest.fn();
  render(<InputText onChange={changeMkFn} value={"text"} />);
  const input = screen.getByTestId("Input");
  fireEvent.change(input, { target: { value: "test onChange" } });
  expect(changeMkFn).toBeCalled();
});
