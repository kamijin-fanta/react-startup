import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

test("sample test", () => {
  render(<App />);
  const element = screen.getByText(/hello/i);
  expect(element).toBeInTheDocument();
});
