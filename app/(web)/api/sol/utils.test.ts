import { describe, expect, test, vi, afterEach } from "vitest";

import { fetchTransaction } from "./utils";

describe("fetchTransaction", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("calls helius endpoint with json default encoding", async () => {
    const json = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json,
      })
    );

    const result = await fetchTransaction("tx-1");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("mainnet.helius-rpc.com"),
      expect.objectContaining({
        method: "POST",
      })
    );
    expect(result).toEqual({ ok: true });
  });

  test("passes explicit encoding option", async () => {
    const json = vi.fn().mockResolvedValue({ result: {} });
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        json,
      })
    );

    await fetchTransaction("tx-2", "jsonParsed");

    const [, options] = vi.mocked(fetch).mock.calls[0];
    const payload = JSON.parse(String((options as RequestInit).body));
    expect(payload.params[1].encoding).toBe("jsonParsed");
  });
});
