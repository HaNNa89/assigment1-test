import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

describe("something truthy and falsy", () => {
	it("true to be true", () => {
		expect(true).toBe(true);
	});

	it("false to be false", () => {
		expect(false).toBe(false);
	});
});

//Syntax

test('should display a header with the text "Dictionary"', () => {
	render(<Header />);
	const header = screen.getByText("Dictionary");
	expect(header).toBeInTheDocument();
});

test("should find input placeholder text", () => {
	render(<SearchBox />);
	const input = screen.getByPlaceholderText("type your word here...");
	expect(input).toBeInTheDocument();
});
