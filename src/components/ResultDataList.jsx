import React from "react";

function ResultDataList({ searchingResult }) {
	if (!searchingResult) {
		return null;
	}

	return (
		<div>
			{/* WORD */}
			<h2>{searchingResult[0].word}</h2>

			{/*PHONETICS*/}
			<h3>Phonetic</h3>
			{searchingResult[0].phonetics.slice(0, 5).map((phonetic, index) => (
				<div key={`${phonetic.text}-${index}`}>
					<p>{phonetic.text}</p>
					{phonetic.audio && (
						<audio
							data-testid="audio-player"
							controls
							key={`${phonetic.text}-${index}`}
						>
							<source src={phonetic.audio} type="audio/mpeg" />
							Your browser does not support the audio element.
						</audio>
					)}

					{phonetic.sourceUrl && <p>{phonetic.sourceUrl}</p>}
					{phonetic.license && (
						<div>
							<p>License name: {phonetic.license.name}</p>
							<p>License url: {phonetic.license.url}</p>
						</div>
					)}
				</div>
			))}

			{/*MEANINGS*/}
			<h3>Meaning</h3>
			{searchingResult[0].meanings.map((meaning, index) => (
				<div key={index}>
					<p>{meaning.partOfSpeech}</p>
					{meaning.definitions.map((definition, idx) => (
						<div key={idx}>
							{definition.definition}
							{definition.exemple && <p>Exemple: {definition.exemple}</p>}
						</div>
					))}
				</div>
			))}

			{/*SYNONYMS*/}
			<h3>Synonyms</h3>
			{searchingResult[0].meanings.map((meaning, index) => (
				<div key={index}>
					{meaning.synonyms && meaning.synonyms.length > 0 && (
						<div>
							{meaning.synonyms.map((synonym, idx) => (
								<div key={idx}>{synonym}</div>
							))}
						</div>
					)}
				</div>
			))}

			{/*ANTONYMS*/}
			<h3>Antonyms</h3>
			{searchingResult[0].meanings.map((meaning, index) => (
				<div key={index}>
					{meaning.antonyms && meaning.antonyms.length > 0 && (
						<div>
							{meaning.antonyms.map((antonym, idx) => (
								<div key={idx}>{antonym}</div>
							))}
						</div>
					)}
				</div>
			))}

			{/*LICENSE*/}
			<h3>License</h3>
			{searchingResult[0].license && (
				<div>
					<p>License name: {searchingResult[0].license.name}</p>
					<p>License url: {searchingResult[0].license.url}</p>
				</div>
			)}

			{/*SOURCE URL:S*/}
			<h3>Source url</h3>
			{searchingResult[0].sourceUrl &&
				searchingResult[0].sourceUrl.length > 0 && (
					<div>
						{searchingResult[0].sourceUrl.map((url, index) => (
							<div key={index}>
								<p>{url}</p>
							</div>
						))}
					</div>
				)}
		</div>
	);
}

export default ResultDataList;
