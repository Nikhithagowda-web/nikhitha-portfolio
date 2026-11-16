import { describe, expect, it } from "vitest";

import { buildMailto, contactSchema } from "@/lib/contact";

describe("contact form", () => {
  it("rejects an invalid email", () => {
    expect(contactSchema.safeParse({ name: "Priya", email: "nope", message: "Hello there, Nikhitha!" }).success).toBe(false);
  });

  it("builds a mailto addressed to the portfolio owner with an encoded body", () => {
    const data = contactSchema.parse({ name: "Priya", email: "p@x.com", message: "Let's talk about a role" });
    const url = buildMailto("nikhithasoftwaredeveloper@gmail.com", data);
    expect(url.startsWith("mailto:nikhithasoftwaredeveloper@gmail.com?subject=Portfolio%20enquiry%20from%20Priya")).toBe(true);
    expect(url).toContain(encodeURIComponent("Let's talk about a role"));
  });
});
