import { useState } from "react";

function SearchBox({ inputValue, setInputValue }) {
	const [value, setValue] = useState("");

	const handleInputChange = (e) => setValue(e.target.value);

	const handleSubmit = () => {
		setInputValue(value);
		setValue("");
	};

	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div>
			<h4>Search for a word</h4>
			<input
				type="text"
				placeholder="type your word here..."
				onChange={handleInputChange}
				value={value}
				onKeyDown={handleInputKeyDown}
			/>
			<button onClick={handleSubmit}>Search</button>

			{inputValue && (
				<h2>
					Result for: <span>{inputValue}</span>
				</h2>
			)}
		</div>
	);
}
export default SearchBox;
