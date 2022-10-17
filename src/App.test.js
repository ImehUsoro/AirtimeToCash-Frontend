import { render, screen } from "@testing-library/react";
import App from "./App";
import AuthState from "./context/auth/authState";

test("renders landing page", () => {
  render(<App />);
});

test("render Hero component", () => {
  render(<AuthState></AuthState>);
});
