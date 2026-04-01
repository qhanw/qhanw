import { describe, expect, test } from "vitest";

import { config } from "./middleware";

describe("middleware config", () => {
  test("uses matcher to exclude static and metadata files", () => {
    expect(config.matcher).toHaveLength(1);
    expect(config.matcher[0]).toContain("_next/static");
    expect(config.matcher[0]).toContain("favicon.ico");
    expect(config.matcher[0]).toContain("robots.txt");
  });
});
