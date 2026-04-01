import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import DateFormat from "./DateFormat";

describe("DateFormat", () => {
  test("renders dash when value is empty", () => {
    const { container } = render(<DateFormat />);
    expect(container.textContent).toBe("-");
  });

  test("renders short format when short is true", () => {
    const { container } = render(
      <DateFormat value="2024-02-03T01:02:03.000Z" short />
    );
    expect(container.textContent).toBe("2024-02-03");
  });

  test("renders custom format when provided", () => {
    const { container } = render(
      <DateFormat value="2024-02-03T01:02:03.000Z" format="YYYY-MM-DD" />
    );
    expect(container.textContent).toBe("2024-02-03");
  });
});
