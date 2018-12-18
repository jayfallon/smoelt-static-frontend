import styled from "styled-components";

const FaqSupport = styled.section`
	background-color: #ffffff;
	padding: 9.2rem 0 16.9rem;
	color: #242424;
	.support-inner {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: ${props => props.theme.maxWidth};
	}
	h4 {
		padding-bottom: 1.4rem;
		font-family: GothamBold, sans-serif;
		font-size: 2.8rem;
		line-height: 1.71;
		letter-spacing: 2.5px;
		text-align: center;
		text-transform: uppercase;
	}
	p {
		margin: ${props => props.theme.margin};
		padding: ${props => props.theme.padding};
		max-width: 84.8rem;
		font-size: 1.6rem;
		line-height: 1.67;
		text-align: center;
	}
	a {
		color: #242424;
	}
`;

export default FaqSupport;
