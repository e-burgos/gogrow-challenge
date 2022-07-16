import Logo from "./Logo";
import { render } from "@testing-library/react";

test("Should Logo renders", () => {
  const view = render(<Logo />);
  expect(view).toBeDefined();
});
