import Audio from "./components/Audio";
import ContentBox from "./components/ContentBox";
import SearchBox from "./components/SearchBox";

function App() {
	return (
		<>
			<div>
				<h1>Hej Dictionary</h1>
				<SearchBox />
				<ContentBox />
				<Audio />
			</div>
		</>
	);
}

export default App;
