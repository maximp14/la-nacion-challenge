import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";

test("should render a logo image", () => {
  render(<Footer />);
  const logo = screen.getByRole("img-la-nacion");
  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("src", "logo-la-nacion.png");
});
