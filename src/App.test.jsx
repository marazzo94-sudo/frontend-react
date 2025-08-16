import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "./App";

describe("App", () => {
  it("toggles sidebar when hamburger menu is clicked", () => {
    const { getByLabelText, getByTestId } = render(<App />);
    const button = getByLabelText(/toggle sidebar/i);
    const sidebar = getByTestId("sidebar");
    expect(sidebar).toHaveAttribute("data-open", "false");
    fireEvent.click(button);
    expect(sidebar).toHaveAttribute("data-open", "true");
  });
});
