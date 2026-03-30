import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";

import NotFound from "./not-found";

describe("Not Found Page", () => {
  test("should render the not found page correctly", async () => {
    const { queryByText } = render(<NotFound />);

    expect(queryByText("Page not found")).toBeInTheDocument();
  });
});
