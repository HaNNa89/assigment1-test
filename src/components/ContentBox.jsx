import React, { useEffect, useState } from "react";
import ResultDataList from "./ResultDataList";

//This component handles fetching and display data
function ContentBox({ inputValue }) {
	const [response, setResponse] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const wordData = async () => {
			try {
				setErrorMessage("");
				const response = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
				);
				const data = await response.json();

				if (Array.isArray(data) && data.length > 0) {
					setResponse(data);
				} else {
					setErrorMessage("Opps, searched word does not exist, try again.");
					setResponse(null);
				}
			} catch (err) {
				setResponse(null);
			} finally {
				setLoading(false);
			}
		};

		wordData();
	}, [inputValue]);
	return (
		<div>
			{loading && <p>Searching word...</p>}
			{errorMessage && <p>{errorMessage}</p>}
			{response && (
				<div>
					<h3>Result for searched word:</h3>
					{/*Render the ResultDataList with the result*/}
					<ResultDataList searchingResult={response} />
				</div>
			)}
		</div>
	);
}
export default ContentBox;
