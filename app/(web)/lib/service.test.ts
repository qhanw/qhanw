import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import {
  getAllPosts,
  getPost,
  getAllCodeSnippets,
  getCodeSnippet,
} from "./service";

describe("service", () => {
  beforeEach(() => {
    vi.stubEnv("NODE_ENV", "test");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  test("getPost strips .md suffix and returns full post data", async () => {
    const all = await getAllPosts();
    const target = all[0];
    const post = await getPost(`${target.slug}.md`);

    expect(post.slug).toBe(target.slug);
    expect(post.content.length).toBeGreaterThan(0);
    expect(post.meta.title).toBeTruthy();
    expect(post.meta.readingTime?.minutes).toBeGreaterThan(0);
  });

  test("getAllPosts returns posts sorted by date desc", async () => {
    const posts = await getAllPosts();
    expect(posts.length).toBeGreaterThan(1);

    for (let i = 1; i < posts.length; i++) {
      expect(+posts[i - 1].meta.date).toBeGreaterThanOrEqual(+posts[i].meta.date);
    }
  });

  test("getAllCodeSnippets and getCodeSnippet return matching slugs", async () => {
    const all = await getAllCodeSnippets();
    expect(all.length).toBeGreaterThan(0);

    const one = await getCodeSnippet(`${all[0].slug}.md`);

    expect(one.slug).toBe(all[0].slug);
    expect(one.meta.title).toBeTruthy();
  });
});
