import { render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return { asPath: "/" };
    },
  };
});

describe("ActiveLink Component", () => {
  it("Renders correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );

    expect(screen.getByText("home")).toBeInTheDocument();
  });

  it("Is receiving active class if the link as currently active", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>home</a>
      </ActiveLink>
    );

    expect(screen.getByText("home")).toHaveClass("active");
  });
});
