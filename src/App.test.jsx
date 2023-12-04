import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";
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

//Test to display if the Header with Dictionary.
test('should display a header with the text "Dictionary"', () => {
	render(<Header />);
	const header = screen.getByText("Dictionary");
	expect(header).toBeInTheDocument();
});

//Test to find the input placeholder.
test("should find input placeholder text", () => {
	render(<SearchBox />);
	const input = screen.getByPlaceholderText("type your word here...");
	expect(input).toBeInTheDocument();
});

//Test to find the Search Button.
test("should display a button with the text: Search", () => {
	render(<SearchBox />);
	const button = screen.getByRole("button");
	expect(button).toBeInTheDocument();
});

test("should display a word when Search button is clicked", async () => {
	render(<App />);
	const user = userEvent.setup();
	const inputElement = screen.getByPlaceholderText("type your word here...");
	const buttonElement = screen.getByRole("button");

	await user.type(inputElement, "value");
	await user.click(buttonElement);

	const searchedWord = await screen.findByText("value");
	expect(searchedWord).toBeInTheDocument();
});
