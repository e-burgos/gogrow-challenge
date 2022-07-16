import SocialButton from "./SocialButton";
import { render, screen } from "@testing-library/react";

test("Should SocialButton render facebook button", () => {
  const handleClickMkFn = jest.fn();
  const view = render(
    <SocialButton
      handleClick={handleClickMkFn}
      label={"Facebook"}
      icon="Facebook"
    />
  );
  expect(view).toBeDefined();
  expect(screen.getByTestId("SocialButton")).toBeInTheDocument();
  expect(screen.getByText(/Facebook/i)).toBeInTheDocument();
  expect(screen.getByTestId("Icon")).toHaveAttribute("width", "21px");
});

test("Should SocialButton render google button", () => {
  const handleClickMkFn = jest.fn();
  render(
    <SocialButton
      handleClick={handleClickMkFn}
      label={"Goggle"}
      icon="Google"
    />
  );
  expect(screen.getByText(/Goggle/i)).toBeInTheDocument();
  expect(screen.getByTestId("Icon")).toHaveAttribute("width", "18px");
});
