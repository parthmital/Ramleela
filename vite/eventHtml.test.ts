import { describe, expect, it } from "vitest";
import {
	contentSecurityPolicy,
	renderEventHtml,
	toInlineJson,
} from "./eventHtml.ts";

describe("renderEventHtml", () => {
	it("fills event tokens and leaves unknown ones untouched", () => {
		const { html } = renderEventHtml(
			"<title>%EVENT_TITLE% | %EVENT_DATES% | %UNKNOWN%</title>",
			false,
		);
		expect(html).toBe(
			"<title>Chembur Ramleela 2025 | 22 Sept – 2 Oct | %UNKNOWN%</title>",
		);
	});

	it("adds the CSP meta tag only to production builds", () => {
		const csp = (isBuild: boolean) =>
			renderEventHtml("", isBuild).tags.some(
				(t) => t.attrs?.["http-equiv"] === "Content-Security-Policy",
			);
		expect(csp(true)).toBe(true);
		expect(csp(false)).toBe(false);
	});

	it("emits structured data with the season dates", () => {
		const script = renderEventHtml("", true).tags.find(
			(t) => t.tag === "script",
		);
		const data = JSON.parse(String(script?.children));
		expect(data.startDate).toBe("2025-09-22");
		expect(data.endDate).toBe("2025-10-02");
	});
});

describe("security", () => {
	it("forbids inline script, plugins and foreign form targets", () => {
		expect(contentSecurityPolicy).toContain("script-src 'self'");
		expect(contentSecurityPolicy).not.toContain("unsafe-inline");
		expect(contentSecurityPolicy).not.toContain("unsafe-eval");
		expect(contentSecurityPolicy).toContain("object-src 'none'");
		expect(contentSecurityPolicy).toContain("form-action 'none'");
	});

	it("escapes inline JSON so content cannot close the script element", () => {
		const out = toInlineJson({ s: "</script><script>alert(1)</script>" });
		expect(out).not.toMatch(/[<>]/);
		expect(JSON.parse(out)).toEqual({
			s: "</script><script>alert(1)</script>",
		});
	});
});
