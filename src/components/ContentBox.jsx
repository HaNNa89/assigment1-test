import React, { useEffect, useState } from "react";
import ResultDataList from "./ResultDataList";

//This component handles fetching and display data
function ContentBox({ inputValue }) {
	const [response, setResponse] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const wordData = async () => {
			if (!inputValue.trim()) {
				setErrorMessage("you must type a word please");
				return;
			}
			setErrorMessage("");
			setLoading(true);
			//Fetch data from  the used Dictionary API
			try {
				const response = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
				);
				const data = await response.json();
				setResponse(data);
			} catch (err) {
				setErrorMessage(
					"An error occurred while fetching data, please try again"
				);
			} finally {
				setLoading(false);
			}
		};
		wordData();
	}, [inputValue]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{errorMessage && <p>{errorMessage}</p>}
			{response && (
				<div>
					<h3>Definitions:</h3>
					{/*Render the ResultDataList with the result*/}
					<ResultDataList meanings={response} />
				</div>
			)}
		</div>
	);
}
export default ContentBox;
