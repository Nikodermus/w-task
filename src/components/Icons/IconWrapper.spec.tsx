import { render, screen } from "@testing-library/react";

import IconWrapper from "./IconWrapper";

describe("IconWrapper", () => {
  it("renders an accessible svg icon", () => {
    render(
      <IconWrapper viewBox="0 0 0 0" name="Skull">
        <g></g>
      </IconWrapper>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("renders an accessible svg icon with a description", () => {
    render(
      <IconWrapper
        viewBox="0 0 0 0"
        name="Skull"
        desc="Skull with flames in the eyes"
      >
        <g></g>
      </IconWrapper>
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByText("Skull with flames in the eyes")
    ).toBeInTheDocument();
  });
});
