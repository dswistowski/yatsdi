import { describe, it, expect } from "vitest";

describe("container", () => {
  it("can bind token to value", () => {
    const token = makeToken<string>();
    const container = makeContainer();
    container.bind(token).toValue("hello");
    expect(container.get(token)).toBe("hello");
  });
});
