import { useState } from "react";

function SearchBox({ inputValue, setInputValue }) {
	const [value, setValue] = useState("");
	const [searchErrorMessage, setsearchErrorMessage] = useState("");
	const handleInputChange = (e) => setValue(e.target.value);

	const handleSubmit = () => {
		if (value.trim() !== "") {
			setInputValue(value);
			setValue("");
			setsearchErrorMessage("");
		} else {
			setsearchErrorMessage("Please type a word");
		}
	};

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div>
			<h4>Search for a word</h4>
			<div>
				<input
					type="text"
					placeholder="type your word here..."
					value={value}
					onChange={handleInputChange}
					onKeyDown={handleInputKeyDown}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{searchErrorMessage && <div>{searchErrorMessage}</div>}
			{/*Display the word if its available*/}
			{inputValue && (
				<h2>
					Result for: <span>{inputValue}</span>
				</h2>
			)}
		</div>
	);
}

export default SearchBox;
