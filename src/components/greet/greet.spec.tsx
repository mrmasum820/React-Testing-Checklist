/**
 * Greet should render the test hello and if a name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// test -> it | test.only -> fit | test.skip -> xit

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("renders with a name", () => {
    render(<Greet name="Masum" />);
    const textElement = screen.getByText("Hello Masum");
    expect(textElement).toBeInTheDocument();
  });
});
