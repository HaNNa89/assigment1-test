import { useState } from "react";
import styled from "styled-components";

function SearchBox({ inputValue, setInputValue }) {
	const [value, setValue] = useState("");

	const handleInputChange = (e) => setValue(e.target.value);
	//Handle search a word when user cliked the button.
	const handleSubmit = () => {
		setInputValue(value);
		setValue("");
	};
	//Handle searh a word if user press enter.
	const handleInputKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<SearchContainer>
			<h4>Search for a word</h4>
			<SearchInnerContainer>
				<SearchInput
					type="text"
					placeholder="type your word here..."
					onChange={handleInputChange}
					value={value}
					onKeyDown={handleInputKeyDown}
				/>
				<SearchButton onClick={handleSubmit}>Search</SearchButton>
			</SearchInnerContainer>
			{/*Display the word if its available*/}
			{inputValue && (
				<h2>
					Result for: <span>{inputValue}</span>
				</h2>
			)}
		</SearchContainer>
	);
}

const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 10px;
`;

const SearchInnerContainer = styled.div`
	width: 80%;
	display: flex;
	justify-content: center;
	gap: 12px;
`;

const SearchInput = styled.input`
	width: 40%;
	height: 26px;
	border: 2px solid #242424;
	border-radius: 12px;
`;
const SearchButton = styled.button`
	height: 28px;
`;

export default SearchBox;
