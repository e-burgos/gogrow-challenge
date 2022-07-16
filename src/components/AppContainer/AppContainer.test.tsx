import React from "react";
import { render } from "@testing-library/react";
import AppContainer from "./AppContainer";
import Login from "../Login/Login";
import Abstraction from "../Abstraction/Abstraction";
import Brand from "../Brand/Brand";
import Logo from "../Logo/Logo";

test("Should AppContainer renders", () => {
  const view = render(<AppContainer />);
  expect(view).not.toBeNull();
  expect(Abstraction).toBeDefined();
  expect(Brand).toBeDefined();
  expect(Logo).toBeDefined();
  expect(Login).toBeDefined();
});
