import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";

test("should render a logo image", () => {
  render(<Header />);
  const logo = screen.getByRole("img");
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("src", "logo-la-nacion.png");
});

test("should update search input value when typing", () => {
  render(<Header />);
  const searchInput = screen.getByPlaceholderText("Buscar");
  fireEvent.change(searchInput, { target: { value: "test123" } });
  expect(searchInput).toHaveValue("test123");
});

test("should have a subscription and login button", () => {
  render(<Header />);
  const subscriptionButton = screen.getByText("Suscribite");
  expect(subscriptionButton).toBeInTheDocument();
  const loginButton = screen.getByText("Ingresar");
  expect(loginButton).toBeInTheDocument();
});
