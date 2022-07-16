import Brand from "./Brand";
import { render, screen } from "@testing-library/react";

test("Should Brand renders", () => {
  const view = render(<Brand />);
  expect(view).toBeDefined();
  expect(screen.getByTestId("Brand")).toBeInTheDocument();
  expect(screen.getByText(/Getting/i)).toBeInTheDocument();
  expect(screen.getByText(/Started With/i)).toBeInTheDocument();
  expect(screen.getByText(/VR Creation/i)).toBeInTheDocument();
});
