import React from "react";
import styled from "styled-components";
function Header() {
	return (
		<TopHeading>
			<h1>Dictionary</h1>
		</TopHeading>
	);
}

const TopHeading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
`;

export default Header;
