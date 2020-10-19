import React, { useState } from 'react';
import styled from "styled-components";

const StyledSearchHeader = styled.header`
	display: flex;
	flex-flow: row nowrap;
	h1 {
			font-size: 6rem;
			color: ${pr => pr.theme.charcoal};
	}
	p {
			font-weight: 600;
			font-size: 1.8rem;
			line-height: 2.5rem;
			color: ${pr => pr.theme.charcoal};
		}
`;

const initInput = {
	sessionInput: "",
	locationInput: "",
};

const SearchHeader = props => {
	const [input, setInput] = useState(initInput);

	const onChange = (evt) => {
		const {name, value} = evt.target;
		setInput({ ...input, [name]: value });
	};

	const onSubmit = (evt) => {
		alert(`Session: ${input.sessionInput} | Location: ${input.locationInput}`);
	}

	return (
		<StyledSearchHeader className="search-header">
			<h1>Anywhere Fitness</h1>
			<form onSubmit={onSubmit}>
				<input 
					name="session-search"
					type="text"
					value={input.sessionInput}
					onChange={onChange}
					placeholder="Find a class or activity" 
				/>
				<input 
					name="location-search"
					type="text"
					value={input.locationInput}
					onChange={onChange}
					placeholder="Chicago, IL"
				/>
			</form>
			<p>About</p>
			<p>Hello, User!</p>
		</StyledSearchHeader>
	);
};

export default SearchHeader;