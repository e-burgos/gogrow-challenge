import Abstraction from "./Abstraction";
import { render, screen } from "@testing-library/react";

test("Check Abstraction default styles", () => {
  const view = render(<Abstraction />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("Abstraction").tagName).toEqual("IMG");
  expect(screen.getByTestId("Abstraction")).toHaveStyleRule("width", "28vw");
  expect(screen.getByTestId("Abstraction")).toHaveStyleRule("left", "0px");
  expect(screen.getByTestId("Abstraction")).toHaveStyleRule("bottom", "0px");
  expect(screen.getByTestId("Abstraction")).toHaveStyleRule(
    "position",
    "absolute"
  );
});
