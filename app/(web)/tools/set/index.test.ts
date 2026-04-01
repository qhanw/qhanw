import { describe, expect, test } from "vitest";

import tools from "./index";
import projects from "@/app/(web)/projects/constant/projects";

describe("tools set", () => {
  test("contains all expected tool categories", () => {
    expect(tools.map((item) => item.name)).toEqual([
      "图片压缩",
      "设计工具",
      "API工具",
      "视频工具",
      "响应式",
    ]);
  });

  test("every category has at least one tool", () => {
    for (const item of tools) {
      expect(item.list.length).toBeGreaterThan(0);
    }
  });
});

describe("projects constant", () => {
  test("project entries have required base fields", () => {
    const withHref = projects.filter((p) => p.href);

    expect(withHref.length).toBeGreaterThan(0);
    for (const project of withHref) {
      expect(project.key).toBeTruthy();
      expect(project.name).toBeTruthy();
      expect(Array.isArray(project.labels)).toBe(true);
      expect(Array.isArray(project.icons)).toBe(true);
    }
  });
});
