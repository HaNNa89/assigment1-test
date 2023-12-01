import { useState } from "react";
import ContentBox from "./components/ContentBox";
import Header from "./components/Header";
import ResultDataList from "./components/ResultDataList";
import SearchBox from "./components/SearchBox";

function App() {
	const [inputValue, setInputValue] = useState("");

	return (
		<div>
			<Header />
			<SearchBox inputValue={inputValue} setInputValue={setInputValue} />
			<ContentBox inputValue={inputValue} />
			<ResultDataList inputValue={inputValue} />
		</div>
	);
}

export default App;
