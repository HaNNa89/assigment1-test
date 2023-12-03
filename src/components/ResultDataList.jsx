import React from "react";

function ResultDataList({ meanings }) {
	if (!meanings) {
		return null;
	}

	return (
		<div>
			{/*Map each meanings for the searched word*/}
			{meanings.map((val) => {
				return val.meanings.map((meanings, index) => (
					<div key={index}>
						<h3>{meanings.partOfSpeech}</h3>
						<ul>
							{/*Display Definitions*/}
							{meanings.definitions.map((def) => (
								<li key={def.definition}>{def.definition}</li>
							))}
						</ul>
						<div key={index}>
							{/*Display audio for a word if its available*/}
							<h3>Play sound</h3>
							{val.phonetics && (
								<audio
									controls
									src={val.phonetics.find((phonetic) => phonetic.audio).audio}
									type="audio/mpeg"
								></audio>
							)}
						</div>

						{meanings.synonyms && (
							<>
								{/*Display Synonyms*/}
								<h3>Synonyms:</h3>
								<ul>
									{meanings.synonyms.map((syn, index) => (
										<li key={index}>{syn}</li>
									))}
								</ul>
							</>
						)}
						{meanings.antonyms && (
							<>
								{/*Display Antonyms*/}
								<h3>Antonyms:</h3>
								<ul>
									{meanings.antonyms.map((ant, index) => (
										<li key={index}>{ant}</li>
									))}
								</ul>
							</>
						)}
						{meanings.example && (
							<>
								{/*Display Example*/}
								<h3>Example:</h3>
								<ul>
									<li key={meanings.example}>{meanings.example}</li>
								</ul>
							</>
						)}
					</div>
				));
			})}
		</div>
	);
}

export default ResultDataList;
