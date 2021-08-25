import { render } from "@testing-library/react";
import { ActiveLink } from ".";

test("Active Link renders correctly", () => {
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>home</a>
    </ActiveLink>
  );

  debug();
});
