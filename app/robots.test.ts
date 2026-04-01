import { describe, expect, test } from "vitest";

import robots from "./robots";

describe("robots", () => {
  test("returns expected robots directives", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
        disallow: "/projects",
      },
      sitemap: "https://qhan.wang/sitemap.xml",
    });
  });
});
