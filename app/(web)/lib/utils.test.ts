import { describe, expect, test } from "vitest";

import { getGitLastUpdatedTimeStamp } from "./utils";

describe("getGitLastUpdatedTimeStamp", () => {
  test("returns a date for a tracked file", () => {
    const result = getGitLastUpdatedTimeStamp(`${process.cwd()}/README.md`);

    expect(result).toBeInstanceOf(Date);
    expect(Number.isNaN(result!.getTime())).toBe(false);
  });

  test("returns fallback date for unknown file", () => {
    const before = Date.now();
    const result = getGitLastUpdatedTimeStamp(`${process.cwd()}/missing-file.md`);
    const after = Date.now();

    expect(result).toBeInstanceOf(Date);
    expect(result!.getTime()).toBeGreaterThanOrEqual(before);
    expect(result!.getTime()).toBeLessThanOrEqual(after);
  });
});
