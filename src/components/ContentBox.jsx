import React, { useEffect, useState } from "react";
import ResultDataList from "./ResultDataList";

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
					<ResultDataList meanings={response} />
				</div>
			)}
		</div>
	);
}
export default ContentBox;
