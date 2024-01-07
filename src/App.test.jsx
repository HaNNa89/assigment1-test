import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import App from "./App";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

//Check if header is rendering with the name "Dictionary".
test('should display a header with the text "Dictionary"', () => {
	render(<Header />);
	const header = screen.getByText("Dictionary");
	expect(header).toBeInTheDocument();
});

//Check if input placeholder is rendering.
test("should find input placeholder text", () => {
	render(<SearchBox />);
	const input = screen.getByPlaceholderText("type your word here...");
	expect(input).toBeInTheDocument();
});

//Check if Search Button is rendering.
test("should display a button with the text: Search", () => {
	render(<SearchBox />);
	const button = screen.getByRole("button");
	expect(button).toBeInTheDocument();
});

//Check if searched word is rendering if the button is clicked.
test("should display a word when Search button is clicked", async () => {
	render(<App />);
	//set up user event
	const user = userEvent.setup();
	const inputElement = screen.getByPlaceholderText("type your word here...");
	const buttonElement = screen.getByRole("button");
	//Simulate when user is typing the word "color" and cliked the Search button.
	await user.type(inputElement, "color");
	await user.click(buttonElement);
	//Verify if searched word "color" is in the document.
	const searchedWord = await screen.findByText("color");
	expect(searchedWord).toBeInTheDocument();
});

//Test if searched word is rendeing if the user press Enter.
test("should display a word when user press Enter on Search button ", async () => {
	render(<App />);
	//set up user event
	const user = userEvent.setup();
	const inputElement = screen.getByPlaceholderText("type your word here...");
	//Simulate when a user is typing the word "color" ande press Enter.
	await user.type(inputElement, "color");
	//Verify if searched word "color" is in the document.
	const searchedWord = await screen.getByRole("button");
	expect(searchedWord).toBeInTheDocument();
});

test("should display error message when searched word does not exist", async () => {
	render(<App />);
	const user = userEvent.setup();
	const input = screen.getByPlaceholderText("type your word here...");
	const searchBtn = screen.getByRole("button", { name: "Search" });
	await user.type(input, "tårta");
	await user.click(searchBtn);
	await waitFor(
		() => expect(screen.getByTestId("error-message")).toBeInTheDocument
	);
});

test("should display error message if user doesn't type a word", async () => {
	render(<SearchBox />);
	const user = userEvent.setup();
	const searchBtn = screen.getByRole("button", { name: "Search" });
	await user.click(searchBtn);
	await waitFor(
		() => expect(screen.getByText("Please type a word")).toBeInTheDocument
	);
});
