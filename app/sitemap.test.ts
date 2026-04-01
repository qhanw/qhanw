import { describe, expect, test, vi } from "vitest";

import sitemap from "./sitemap";
import { getAllPosts } from "@/app/(web)/lib/service";

vi.mock("@/app/(web)/lib/service", () => ({
  getAllPosts: vi.fn(),
}));

const mockedGetAllPosts = vi.mocked(getAllPosts);

describe("sitemap", () => {
  test("returns static routes and post routes", async () => {
    mockedGetAllPosts.mockResolvedValue([
      {
        slug: "hello",
        meta: { lastModified: new Date("2024-02-01") },
      },
    ] as never);

    const result = await sitemap();

    expect(result[0].url).toBe("https://qhan.wang");
    expect(result[1].url).toBe("https://qhan.wang/posts");
    expect(result[2]).toEqual({
      url: "https://qhan.wang/posts/hello",
      lastModified: "2024-02-01T00:00:00.000Z",
    });
  });
});
