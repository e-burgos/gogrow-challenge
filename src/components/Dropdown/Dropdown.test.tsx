import Dropdown from "./Dropdown";
import { fireEvent, render, screen } from "@testing-library/react";
import { LANGUAGES } from "../../utils/languages";

test("Should Dropdown renders", () => {
  const langMkFn = jest.fn();
  const view = render(<Dropdown setLanguage={langMkFn} />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("Dropdown")).toBeInTheDocument();
  expect(screen.getByText(/English/i)).toBeInTheDocument();
  expect(screen.getByText(/(UK)/i)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("Dropdown"));
  fireEvent.click(screen.getByText("English (UK)"));
  expect(langMkFn).toBeCalled();
  fireEvent.click(screen.getByText("Español"));
  expect(langMkFn).toBeCalled();
  expect(screen.getByText(/Español/i)).toBeInTheDocument();
  fireEvent.change(screen.getByTestId("Dropdown"), {
    target: { value: "spanish" },
  });
  expect(langMkFn).toBeCalledWith(LANGUAGES.spanish);
  fireEvent.change(screen.getByTestId("Dropdown"), {
    target: { value: "english" },
  });
  expect(langMkFn).toBeCalledWith(LANGUAGES.english);
});
